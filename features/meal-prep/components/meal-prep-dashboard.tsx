"use client";

import Image from "next/image";
import {
  type FormEvent,
  useMemo,
  useState,
} from "react";
import type {
  CheckoutOrder,
  DayId,
  MealPackage,
  MealPrepMode,
  MealSchedule,
  PlanCadence,
  PrepMeal,
  WeekDay,
} from "../types/meal-prep.types";
import styles from "../styles/meal-prep.module.css";

interface MealPrepDashboardProps {
  readonly days: readonly WeekDay[];
  readonly meals: readonly PrepMeal[];
  readonly packages: readonly MealPackage[];
  readonly targets: readonly number[];
}

function createEmptySchedule(days: readonly WeekDay[]): MealSchedule {
  return Object.fromEntries(days.map((day) => [day.id, {}])) as MealSchedule;
}

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

function cadencePrice(weeklyPrice: number, cadence: PlanCadence) {
  return cadence === "monthly" ? weeklyPrice * 4 * 0.92 : weeklyPrice;
}

function ModeIcon({ mode }: { readonly mode: MealPrepMode }) {
  if (mode === "custom") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M10 14v6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M5 7.5h14v12H5zM3.5 4.5h17v3h-17zM9 11h6M9 15h6" />
    </svg>
  );
}

function CheckoutPanel({
  onClose,
  order,
}: {
  readonly onClose: () => void;
  readonly order: CheckoutOrder;
}) {
  const [complete, setComplete] = useState(false);
  const [reference, setReference] = useState("");

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const orderReference = `FD-${Date.now().toString().slice(-6)}`;
    const formData = new FormData(event.currentTarget);

    localStorage.setItem(
      "foodie-last-meal-prep-order",
      JSON.stringify({
        reference: orderReference,
        order,
        customer: Object.fromEntries(formData),
        placedAt: new Date().toISOString(),
      }),
    );

    setReference(orderReference);
    setComplete(true);
  }

  return (
    <div className={styles.checkoutOverlay} onMouseDown={onClose}>
      <section
        aria-labelledby="checkout-title"
        aria-modal="true"
        className={styles.checkoutPanel}
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button
          aria-label="Close order review"
          className={styles.closeButton}
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        {complete ? (
          <div className={styles.orderComplete}>
            <span aria-hidden="true">✓</span>
            <p className={styles.eyebrow}>Order confirmed</p>
            <h2 id="checkout-title">Your prep week is sorted.</h2>
            <p>
              We saved order <strong>{reference}</strong> on this device. Your
              plan is ready for a secure payment and delivery integration.
            </p>
            <button className={styles.primaryButton} onClick={onClose} type="button">
              Back to meal prep
            </button>
          </div>
        ) : (
          <>
            <div className={styles.checkoutHeading}>
              <p className={styles.eyebrow}>Review and order</p>
              <h2 id="checkout-title">{order.title}</h2>
              <p>{order.description}</p>
            </div>

            <div className={styles.checkoutTotal}>
              <span>
                {order.meals} meals · {order.cadence}
              </span>
              <strong>{money(order.amount)}</strong>
            </div>

            <form className={styles.checkoutForm} onSubmit={submitOrder}>
              <label>
                Full name
                <input autoComplete="name" name="name" required />
              </label>
              <div className={styles.formRow}>
                <label>
                  Email
                  <input autoComplete="email" name="email" required type="email" />
                </label>
                <label>
                  Phone
                  <input autoComplete="tel" name="phone" required type="tel" />
                </label>
              </div>
              <label>
                Delivery address
                <input
                  autoComplete="street-address"
                  name="address"
                  required
                />
              </label>
              <label>
                Delivery instructions <span>(optional)</span>
                <textarea name="instructions" rows={3} />
              </label>
              <button className={styles.primaryButton} type="submit">
                Confirm meal plan
                <span aria-hidden="true">→</span>
              </button>
              <small className={styles.formNote}>
                No payment is collected in this demo. Your plan is saved on
                this device and is ready for checkout integration.
              </small>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

function CustomMealBuilder({
  days,
  meals,
  targets,
}: Pick<MealPrepDashboardProps, "days" | "meals" | "targets">) {
  const [cadence, setCadence] = useState<PlanCadence>("weekly");
  const [target, setTarget] = useState(7);
  const [activeDay, setActiveDay] = useState<DayId>("monday");
  const [schedule, setSchedule] = useState<MealSchedule>(() =>
    createEmptySchedule(days),
  );
  const [checkoutOrder, setCheckoutOrder] = useState<CheckoutOrder | null>(
    null,
  );

  const selectedCount = useMemo(
    () =>
      Object.values(schedule).reduce(
        (total, dayMeals) =>
          total +
          Object.values(dayMeals).reduce(
            (dayTotal, quantity) => dayTotal + quantity,
            0,
          ),
        0,
      ),
    [schedule],
  );

  const weeklySubtotal = useMemo(
    () =>
      Object.values(schedule).reduce(
        (total, dayMeals) =>
          total +
          Object.entries(dayMeals).reduce((dayTotal, [mealId, quantity]) => {
            const meal = meals.find((item) => item.id === mealId);
            return dayTotal + (meal?.price ?? 0) * quantity;
          }, 0),
        0,
      ),
    [meals, schedule],
  );

  const selectedDays = days.filter(
    (day) =>
      Object.values(schedule[day.id]).reduce(
        (total, quantity) => total + quantity,
        0,
      ) > 0,
  );
  const deliveryFee = selectedCount > 0 && selectedCount < 7 ? 4.99 : 0;
  const weeklyTotal = weeklySubtotal + deliveryFee;
  const orderTotal = cadencePrice(weeklyTotal, cadence);
  const isComplete = selectedCount === target;

  function quantityFor(dayId: DayId, mealId: string) {
    return schedule[dayId][mealId] ?? 0;
  }

  function dayCount(dayId: DayId) {
    return Object.values(schedule[dayId]).reduce(
      (total, quantity) => total + quantity,
      0,
    );
  }

  function changeQuantity(mealId: string, change: number) {
    if (change > 0 && selectedCount >= target) return;

    setSchedule((current) => {
      const currentQuantity = current[activeDay][mealId] ?? 0;
      const nextQuantity = Math.max(0, currentQuantity + change);
      const nextDay = { ...current[activeDay] };

      if (nextQuantity === 0) {
        delete nextDay[mealId];
      } else {
        nextDay[mealId] = nextQuantity;
      }

      return { ...current, [activeDay]: nextDay };
    });
  }

  function reviewCustomOrder() {
    if (!isComplete) return;
    setCheckoutOrder({
      title: "Your custom meal plan",
      description: `${selectedDays.map((day) => day.shortLabel).join(", ")} delivery schedule`,
      cadence,
      amount: orderTotal,
      meals: selectedCount * (cadence === "monthly" ? 4 : 1),
    });
  }

  return (
    <div className={styles.builderLayout}>
      <div className={styles.builderMain}>
        <section className={styles.planSetup} aria-labelledby="plan-settings">
          <div className={styles.setupHeading}>
            <span>1</span>
            <div>
              <h3 id="plan-settings">Set your plan</h3>
              <p>Choose how often and how many meals you want.</p>
            </div>
          </div>

          <div className={styles.setupControls}>
            <fieldset>
              <legend>Plan frequency</legend>
              <div className={styles.segmentedControl}>
                {(["weekly", "monthly"] as const).map((option) => (
                  <button
                    aria-pressed={cadence === option}
                    className={cadence === option ? styles.selectedSegment : ""}
                    key={option}
                    onClick={() => setCadence(option)}
                    type="button"
                  >
                    {option === "weekly" ? "Weekly" : "Monthly"}
                    {option === "monthly" && <small>Save 8%</small>}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Meals each week</legend>
              <div className={styles.targetOptions}>
                {targets.map((option) => (
                  <button
                    aria-pressed={target === option}
                    className={target === option ? styles.selectedTarget : ""}
                    key={option}
                    onClick={() => setTarget(option)}
                    type="button"
                  >
                    <strong>{option}</strong>
                    <span>meals</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </section>

        <section className={styles.scheduleSection} aria-labelledby="schedule-title">
          <div className={styles.sectionTitle}>
            <span>2</span>
            <div>
              <h3 id="schedule-title">Build your week</h3>
              <p>Select a day, then add the meals you want for that day.</p>
            </div>
          </div>

          <div className={styles.dayTabs} role="tablist" aria-label="Meal days">
            {days.map((day) => {
              const count = dayCount(day.id);
              return (
                <button
                  aria-selected={activeDay === day.id}
                  className={activeDay === day.id ? styles.activeDay : ""}
                  key={day.id}
                  onClick={() => setActiveDay(day.id)}
                  role="tab"
                  type="button"
                >
                  <span>{day.shortLabel}</span>
                  <small>{count > 0 ? `${count} selected` : "Add meals"}</small>
                </button>
              );
            })}
          </div>

          <div className={styles.activeDayHeading}>
            <div>
              <p className={styles.eyebrow}>Choose for</p>
              <h3>{days.find((day) => day.id === activeDay)?.label}</h3>
            </div>
            <span>
              {selectedCount} of {target} meals selected
            </span>
          </div>

          <div className={styles.mealGrid}>
            {meals.map((meal) => {
              const quantity = quantityFor(activeDay, meal.id);
              return (
                <article
                  className={`${styles.mealCard} ${
                    quantity > 0 ? styles.selectedMeal : ""
                  }`}
                  key={meal.id}
                >
                  <div className={styles.mealImage}>
                    <Image
                      alt={meal.name}
                      fill
                      sizes="(max-width: 650px) 90vw, (max-width: 1100px) 42vw, 260px"
                      src={meal.imageSrc}
                    />
                    <span>{meal.category}</span>
                  </div>
                  <div className={styles.mealBody}>
                    <div className={styles.mealNameRow}>
                      <h4>{meal.name}</h4>
                      <strong>{money(meal.price)}</strong>
                    </div>
                    <p>{meal.description}</p>
                    <div className={styles.nutrition}>
                      <span>{meal.calories} cal</span>
                      <span>{meal.protein}g protein</span>
                    </div>
                    <div className={styles.mealFooter}>
                      <div className={styles.tags}>
                        {meal.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      {quantity === 0 ? (
                        <button
                          aria-label={`Add ${meal.name} to ${activeDay}`}
                          className={styles.addMealButton}
                          disabled={selectedCount >= target}
                          onClick={() => changeQuantity(meal.id, 1)}
                          type="button"
                        >
                          Add <span aria-hidden="true">+</span>
                        </button>
                      ) : (
                        <div className={styles.quantityControl}>
                          <button
                            aria-label={`Remove one ${meal.name}`}
                            onClick={() => changeQuantity(meal.id, -1)}
                            type="button"
                          >
                            −
                          </button>
                          <strong aria-label={`${quantity} selected`}>
                            {quantity}
                          </strong>
                          <button
                            aria-label={`Add another ${meal.name}`}
                            disabled={selectedCount >= target}
                            onClick={() => changeQuantity(meal.id, 1)}
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <aside className={styles.orderSummary}>
        <div className={styles.summaryHeading}>
          <span aria-hidden="true">🍽</span>
          <div>
            <p>Your plan</p>
            <h3>Order summary</h3>
          </div>
        </div>

        <div className={styles.progressLabel}>
          <span>Meals selected</span>
          <strong>
            {selectedCount} / {target}
          </strong>
        </div>
        <div
          aria-label={`${selectedCount} of ${target} meals selected`}
          className={styles.progressTrack}
          role="progressbar"
          aria-valuemax={target}
          aria-valuemin={0}
          aria-valuenow={selectedCount}
        >
          <span style={{ width: `${Math.min(100, (selectedCount / target) * 100)}%` }} />
        </div>

        <dl className={styles.summaryList}>
          <div>
            <dt>Frequency</dt>
            <dd>{cadence === "weekly" ? "Every week" : "Every month"}</dd>
          </div>
          <div>
            <dt>Meal days</dt>
            <dd>
              {selectedDays.length > 0
                ? selectedDays.map((day) => day.shortLabel).join(", ")
                : "Not selected"}
            </dd>
          </div>
          <div>
            <dt>Meals subtotal</dt>
            <dd>{money(weeklySubtotal)}</dd>
          </div>
          <div>
            <dt>Delivery</dt>
            <dd>{deliveryFee > 0 ? money(deliveryFee) : "Free"}</dd>
          </div>
          {cadence === "monthly" && (
            <div className={styles.savingRow}>
              <dt>Monthly saving</dt>
              <dd>8% off</dd>
            </div>
          )}
        </dl>

        <div className={styles.summaryTotal}>
          <span>
            Total
            <small>{cadence === "weekly" ? "per week" : "per month"}</small>
          </span>
          <strong>{money(orderTotal)}</strong>
        </div>

        <button
          className={styles.primaryButton}
          disabled={!isComplete}
          onClick={reviewCustomOrder}
          type="button"
        >
          {isComplete
            ? "Review your order"
            : `Add ${target - selectedCount} more ${
                target - selectedCount === 1 ? "meal" : "meals"
              }`}
          <span aria-hidden="true">→</span>
        </button>
        <p className={styles.summaryNote}>
          Change, skip or pause your plan before each renewal.
        </p>
      </aside>

      {checkoutOrder && (
        <CheckoutPanel
          onClose={() => setCheckoutOrder(null)}
          order={checkoutOrder}
        />
      )}
    </div>
  );
}

function PremadeMealPlans({
  meals,
  packages,
}: Pick<MealPrepDashboardProps, "meals" | "packages">) {
  const [cadence, setCadence] = useState<PlanCadence>("weekly");
  const [checkoutOrder, setCheckoutOrder] = useState<CheckoutOrder | null>(
    null,
  );

  function reviewPackage(item: MealPackage) {
    setCheckoutOrder({
      title: item.name,
      description: `${item.mealsPerWeek} chef-selected meals, delivered ${
        cadence === "weekly" ? "every week" : "every four weeks"
      }.`,
      cadence,
      amount: cadencePrice(item.pricePerWeek, cadence),
      meals: item.mealsPerWeek * (cadence === "monthly" ? 4 : 1),
    });
  }

  return (
    <div className={styles.premadeWrap}>
      <div className={styles.packageToolbar}>
        <div>
          <p className={styles.eyebrow}>Curated by our kitchen</p>
          <h3>Pick a complete plan</h3>
          <p>Everything is selected for you. Choose a package and frequency.</p>
        </div>
        <div className={styles.segmentedControl}>
          {(["weekly", "monthly"] as const).map((option) => (
            <button
              aria-pressed={cadence === option}
              className={cadence === option ? styles.selectedSegment : ""}
              key={option}
              onClick={() => setCadence(option)}
              type="button"
            >
              {option === "weekly" ? "Weekly" : "Monthly"}
              {option === "monthly" && <small>Save 8%</small>}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.packageGrid}>
        {packages.map((item) => (
          <article className={styles.packageCard} key={item.id}>
            <div className={styles.packageImage}>
              <Image
                alt={item.name}
                fill
                sizes="(max-width: 750px) 90vw, (max-width: 1100px) 44vw, 380px"
                src={item.imageSrc}
              />
              {item.badge && <span>{item.badge}</span>}
            </div>
            <div className={styles.packageBody}>
              <p className={styles.eyebrow}>{item.eyebrow}</p>
              <div className={styles.packageTitleRow}>
                <h3>{item.name}</h3>
                <div>
                  <strong>{money(cadencePrice(item.pricePerWeek, cadence))}</strong>
                  <small>/{cadence === "weekly" ? "week" : "month"}</small>
                </div>
              </div>
              <p className={styles.packageDescription}>{item.description}</p>
              <ul className={styles.featureList}>
                {item.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <details className={styles.packageDetails}>
                <summary>See what is included</summary>
                <ul>
                  {item.meals.map((packageMeal) => {
                    const meal = meals.find(
                      (candidate) => candidate.id === packageMeal.mealId,
                    );
                    return (
                      <li key={packageMeal.mealId}>
                        <span>{meal?.name}</span>
                        <strong>× {packageMeal.quantity}</strong>
                      </li>
                    );
                  })}
                </ul>
              </details>
              <button
                className={styles.primaryButton}
                onClick={() => reviewPackage(item)}
                type="button"
              >
                Choose this plan
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.packagePromise}>
        <div>
          <span aria-hidden="true">01</span>
          <strong>Choose your package</strong>
          <p>Select the menu and frequency that fits your routine.</p>
        </div>
        <div>
          <span aria-hidden="true">02</span>
          <strong>We cook it fresh</strong>
          <p>Our chefs prepare and portion every meal for you.</p>
        </div>
        <div>
          <span aria-hidden="true">03</span>
          <strong>Heat, eat, enjoy</strong>
          <p>Chilled delivery and simple reheating in a few minutes.</p>
        </div>
      </div>

      {checkoutOrder && (
        <CheckoutPanel
          onClose={() => setCheckoutOrder(null)}
          order={checkoutOrder}
        />
      )}
    </div>
  );
}

export function MealPrepDashboard({
  days,
  meals,
  packages,
  targets,
}: MealPrepDashboardProps) {
  const [mode, setMode] = useState<MealPrepMode>("custom");

  return (
    <section className={styles.dashboard} id="planner">
      <div className={styles.modeTabs} role="tablist" aria-label="Meal plan type">
        <button
          aria-selected={mode === "custom"}
          className={mode === "custom" ? styles.activeMode : ""}
          onClick={() => setMode("custom")}
          role="tab"
          type="button"
        >
          <span className={styles.modeIcon}>
            <ModeIcon mode="custom" />
          </span>
          <span>
            <strong>Custom meal</strong>
            <small>You choose every dish and day</small>
          </span>
          <i aria-hidden="true">→</i>
        </button>
        <button
          aria-selected={mode === "premade"}
          className={mode === "premade" ? styles.activeMode : ""}
          onClick={() => setMode("premade")}
          role="tab"
          type="button"
        >
          <span className={styles.modeIcon}>
            <ModeIcon mode="premade" />
          </span>
          <span>
            <strong>Pre-made meals</strong>
            <small>Chef-curated complete packages</small>
          </span>
          <i aria-hidden="true">→</i>
        </button>
      </div>

      <div className={styles.dashboardBody}>
        {mode === "custom" ? (
          <CustomMealBuilder days={days} meals={meals} targets={targets} />
        ) : (
          <PremadeMealPlans meals={meals} packages={packages} />
        )}
      </div>
    </section>
  );
}
