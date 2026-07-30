"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type {
  CheckoutOrder,
  MealPackage,
  PlanCadence,
  PrepMeal,
} from "../types/meal-prep.types";
import { CheckoutPanel } from "./meal-prep-dashboard";
import styles from "../styles/plan-details.module.css";

interface MealPlanDetailsProps {
  readonly initialCadence: PlanCadence;
  readonly meals: readonly PrepMeal[];
  readonly packageItem: MealPackage;
  readonly startDateIso: string;
}

interface ScheduledDay {
  readonly date: Date;
  readonly meals: readonly PrepMeal[];
}

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function planPrice(weeklyPrice: number, cadence: PlanCadence) {
  return cadence === "monthly" ? weeklyPrice * 4 * 0.92 : weeklyPrice;
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function expandPackageMeals(
  packageItem: MealPackage,
  meals: readonly PrepMeal[],
) {
  const remaining = new Map(
    packageItem.meals.map((item) => [item.mealId, item.quantity]),
  );
  const expanded: PrepMeal[] = [];

  while (expanded.length < packageItem.mealsPerWeek) {
    packageItem.meals.forEach((item) => {
      const quantity = remaining.get(item.mealId) ?? 0;
      const meal = meals.find((candidate) => candidate.id === item.mealId);

      if (quantity > 0 && meal) {
        expanded.push(meal);
        remaining.set(item.mealId, quantity - 1);
      }
    });
  }

  return expanded;
}

function createWeekSchedule(
  packageItem: MealPackage,
  meals: readonly PrepMeal[],
  startDateIso: string,
  weekIndex: number,
): readonly ScheduledDay[] {
  const startDate = addDays(
    new Date(`${startDateIso}T12:00:00`),
    weekIndex * 7,
  );
  const expandedMeals = expandPackageMeals(packageItem, meals);
  const groupedMeals = new Map<number, PrepMeal[]>();

  expandedMeals.forEach((meal, index) => {
    const dayOffset =
      expandedMeals.length <= 7
        ? index
        : Math.floor((index * 7) / expandedMeals.length);
    const current = groupedMeals.get(dayOffset) ?? [];
    groupedMeals.set(dayOffset, [...current, meal]);
  });

  return [...groupedMeals.entries()].map(([dayOffset, dayMeals]) => ({
    date: addDays(startDate, dayOffset),
    meals: dayMeals,
  }));
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

export function MealPlanDetails({
  initialCadence,
  meals,
  packageItem,
  startDateIso,
}: MealPlanDetailsProps) {
  const [cadence, setCadence] = useState<PlanCadence>(initialCadence);
  const [weekIndex, setWeekIndex] = useState(0);
  const [checkoutOrder, setCheckoutOrder] = useState<CheckoutOrder | null>(
    null,
  );

  const displayedWeek = cadence === "weekly" ? 0 : weekIndex;
  const schedule = useMemo(
    () =>
      createWeekSchedule(
        packageItem,
        meals,
        startDateIso,
        displayedWeek,
      ),
    [displayedWeek, meals, packageItem, startDateIso],
  );
  const includedMeals = packageItem.meals
    .map((item) => ({
      ...item,
      meal: meals.find((meal) => meal.id === item.mealId),
    }))
    .filter(
      (
        item,
      ): item is (typeof item) & {
        readonly meal: PrepMeal;
      } => Boolean(item.meal),
    );
  const averageCalories = Math.round(
    includedMeals.reduce(
      (total, item) => total + item.meal.calories * item.quantity,
      0,
    ) / packageItem.mealsPerWeek,
  );
  const averageProtein = Math.round(
    includedMeals.reduce(
      (total, item) => total + item.meal.protein * item.quantity,
      0,
    ) / packageItem.mealsPerWeek,
  );
  const averageCarbohydrates = Math.round(
    includedMeals.reduce(
      (total, item) => total + item.meal.carbohydrates * item.quantity,
      0,
    ) / packageItem.mealsPerWeek,
  );
  const averageFat = Math.round(
    includedMeals.reduce(
      (total, item) => total + item.meal.fat * item.quantity,
      0,
    ) / packageItem.mealsPerWeek,
  );
  const total = planPrice(packageItem.pricePerWeek, cadence);
  const totalMeals =
    packageItem.mealsPerWeek * (cadence === "monthly" ? 4 : 1);

  function confirmPlan() {
    setCheckoutOrder({
      title: packageItem.name,
      description: `${totalMeals} chef-selected meals beginning ${formatDate(
        schedule[0].date,
      )}.`,
      cadence,
      amount: total,
      meals: totalMeals,
    });
  }

  return (
    <>
      <section className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/meal-prep">Meal Prep</Link>
        <span aria-hidden="true">/</span>
        <Link href="/meal-prep#planner">Pre-made meals</Link>
        <span aria-hidden="true">/</span>
        <strong>{packageItem.name}</strong>
      </section>

      <section className={styles.planHero}>
        <div className={styles.heroImage}>
          <Image
            alt={packageItem.name}
            fill
            priority
            sizes="(max-width: 800px) 90vw, 560px"
            src={packageItem.imageSrc}
          />
          {packageItem.badge && <span>{packageItem.badge}</span>}
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{packageItem.eyebrow}</p>
          <h1>{packageItem.name}</h1>
          <p className={styles.heroDescription}>{packageItem.description}</p>

          <div className={styles.heroFacts}>
            <div>
              <strong>{packageItem.mealsPerWeek}</strong>
              <span>meals each week</span>
            </div>
            <div>
              <strong>~{averageCalories}</strong>
              <span>calories per meal</span>
            </div>
            <div>
              <strong>{averageCarbohydrates}g</strong>
              <span>average carbs</span>
            </div>
            <div>
              <strong>{averageFat}g</strong>
              <span>average fat</span>
            </div>
            <div>
              <strong>{averageProtein}g</strong>
              <span>average protein</span>
            </div>
          </div>

          <ul className={styles.heroFeatures}>
            {packageItem.features.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={styles.detailsLayout}>
        <main className={styles.detailsMain}>
          <section className={styles.detailSection} id="calendar">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Your meal calendar</p>
                <h2>Know exactly what is coming and when.</h2>
                <p>
                  Your chilled box arrives on{" "}
                  <strong>{formatDate(schedule[0].date)}</strong>. The dates
                  below are the recommended days for enjoying each meal.
                </p>
              </div>
              <span className={styles.deliveryBadge}>
                <i aria-hidden="true">✓</i>
                Free delivery
              </span>
            </div>

            {cadence === "monthly" && (
              <div className={styles.weekTabs} aria-label="Monthly plan weeks">
                {[0, 1, 2, 3].map((week) => {
                  const weekStart = addDays(
                    new Date(`${startDateIso}T12:00:00`),
                    week * 7,
                  );
                  return (
                    <button
                      aria-pressed={weekIndex === week}
                      className={weekIndex === week ? styles.activeWeek : ""}
                      key={week}
                      onClick={() => setWeekIndex(week)}
                      type="button"
                    >
                      <strong>Week {week + 1}</strong>
                      <span>{formatShortDate(weekStart)}</span>
                    </button>
                  );
                })}
              </div>
            )}

            <div className={styles.calendar}>
              {schedule.map((day, dayIndex) => (
                <article className={styles.calendarDay} key={day.date.toISOString()}>
                  <div className={styles.dateColumn}>
                    <span>{day.date.toLocaleDateString("en-US", { weekday: "short" })}</span>
                    <strong>{day.date.getDate()}</strong>
                    <small>
                      {day.date.toLocaleDateString("en-US", { month: "short" })}
                    </small>
                  </div>
                  <div className={styles.dayContent}>
                    <div className={styles.dayHeading}>
                      <div>
                        <h3>{formatDate(day.date)}</h3>
                        <span>
                          {day.meals.length}{" "}
                          {day.meals.length === 1 ? "meal" : "meals"} planned
                        </span>
                      </div>
                      {dayIndex === 0 && <em>Delivery day</em>}
                    </div>
                    <div className={styles.scheduledMeals}>
                      {day.meals.map((meal, mealIndex) => (
                        <div className={styles.scheduledMeal} key={`${meal.id}-${mealIndex}`}>
                          <div className={styles.mealThumb}>
                            <Image
                              alt=""
                              fill
                              sizes="66px"
                              src={meal.imageSrc}
                            />
                          </div>
                          <span>
                            <strong>{meal.name}</strong>
                            <small>
                              {meal.category} · {meal.calories} cal ·{" "}
                              {meal.carbohydrates}g carbs · {meal.fat}g fat ·{" "}
                              {meal.protein}g protein
                            </small>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.detailSection} id="included">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Inside every box</p>
                <h2>Everything included in this plan.</h2>
                <p>
                  Your menu repeats weekly and can be changed before the next
                  order cutoff.
                </p>
              </div>
            </div>

            <div className={styles.includedGrid}>
              {includedMeals.map(({ meal, quantity }) => (
                <article className={styles.includedCard} key={meal.id}>
                  <div className={styles.includedImage}>
                    <Image
                      alt={meal.name}
                      fill
                      sizes="(max-width: 650px) 90vw, 230px"
                      src={meal.imageSrc}
                    />
                    <strong>× {quantity}</strong>
                  </div>
                  <div>
                    <span>{meal.category}</span>
                    <h3>{meal.name}</h3>
                    <p>{meal.description}</p>
                    <small>
                      {meal.calories} cal · {meal.carbohydrates}g carbs ·{" "}
                      {meal.fat}g fat · {meal.protein}g protein
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.detailSection}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>From delivery to dinner</p>
                <h2>Prepared for an easy week.</h2>
              </div>
            </div>
            <div className={styles.careGrid}>
              <article>
                <span aria-hidden="true">❄</span>
                <h3>Delivered chilled</h3>
                <p>
                  Meals arrive together in insulated packaging on the first
                  date shown in your calendar.
                </p>
              </article>
              <article>
                <span aria-hidden="true">◷</span>
                <h3>Ready in minutes</h3>
                <p>
                  Follow the label instructions and heat most meals in three
                  to five minutes.
                </p>
              </article>
              <article>
                <span aria-hidden="true">♻</span>
                <h3>Flexible renewal</h3>
                <p>
                  Edit, pause or skip before the weekly cutoff shown in your
                  confirmation.
                </p>
              </article>
            </div>

            <div className={styles.planFaq}>
              <details>
                <summary>How long do the meals stay fresh?</summary>
                <p>
                  Keep meals refrigerated and use each one by the date printed
                  on its label. Most meals are best within five days.
                </p>
              </details>
              <details>
                <summary>Can I swap meals in a pre-made plan?</summary>
                <p>
                  Pre-made plans have a fixed menu. Choose Custom Meal if you
                  want to select every dish and meal time yourself.
                </p>
              </details>
              <details>
                <summary>What about allergies and dietary needs?</summary>
                <p>
                  Ingredient and allergen information is reviewed during
                  confirmation. Meals are prepared in a kitchen that handles
                  common allergens.
                </p>
              </details>
            </div>
          </section>
        </main>

        <aside className={styles.confirmCard}>
          <p className={styles.eyebrow}>Confirm your plan</p>
          <h2>{packageItem.name}</h2>

          <div className={styles.cadenceControl}>
            {(["weekly", "monthly"] as const).map((option) => (
              <button
                aria-pressed={cadence === option}
                className={cadence === option ? styles.activeCadence : ""}
                key={option}
                onClick={() => {
                  setCadence(option);
                  setWeekIndex(0);
                }}
                type="button"
              >
                <strong>{option === "weekly" ? "Weekly" : "Monthly"}</strong>
                <span>
                  {option === "monthly"
                    ? `${packageItem.mealsPerWeek * 4} meals · save 8%`
                    : `${packageItem.mealsPerWeek} meals`}
                </span>
              </button>
            ))}
          </div>

          <dl className={styles.confirmDetails}>
            <div>
              <dt>First delivery</dt>
              <dd>{formatShortDate(schedule[0].date)}</dd>
            </div>
            <div>
              <dt>Plan size</dt>
              <dd>{totalMeals} meals</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>Free</dd>
            </div>
          </dl>

          <div className={styles.confirmTotal}>
            <span>
              Plan total
              <small>Renews {cadence}</small>
            </span>
            <strong>{money(total)}</strong>
          </div>

          <button
            className={styles.confirmButton}
            onClick={confirmPlan}
            type="button"
          >
            Confirm this plan
            <span aria-hidden="true">→</span>
          </button>
          <p className={styles.confirmNote}>
            You can review delivery details before completing checkout.
          </p>
          <Link className={styles.backLink} href="/meal-prep#planner">
            ← Compare other plans
          </Link>
        </aside>
      </div>

      {checkoutOrder && (
        <CheckoutPanel
          onClose={() => setCheckoutOrder(null)}
          order={checkoutOrder}
        />
      )}
    </>
  );
}
