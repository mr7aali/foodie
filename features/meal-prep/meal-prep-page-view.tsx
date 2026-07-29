import Image from "next/image";
import { SiteLayout } from "@/features/site";
import {
  mealPackages,
  mealTargets,
  prepMeals,
  weekDays,
} from "./data/meal-prep-content";
import { MealPrepDashboard } from "./components/meal-prep-dashboard";
import styles from "./styles/meal-prep.module.css";

export function MealPrepPageView() {
  return (
    <SiteLayout activePath="/meal-prep">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Fresh meals, your schedule</p>
            <h1>Meal prep that fits real life.</h1>
            <p className={styles.heroText}>
              Build every meal yourself or choose a chef-made plan. Pick your
              days, set your frequency and leave the cooking to us.
            </p>
            <div className={styles.heroPoints}>
              <span>Pause anytime</span>
              <span>Freshly prepared</span>
              <span>Flexible plans</span>
            </div>
            <a className={styles.heroButton} href="#planner">
              Build your plan
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                alt="A fresh prepared meal with vegetables and grains"
                fill
                priority
                sizes="(max-width: 800px) 90vw, 520px"
                src="/assets/design-image-16.png"
              />
            </div>
            <div className={styles.deliveryCard}>
              <span className={styles.deliveryIcon} aria-hidden="true">✓</span>
              <span>
                <strong>Next delivery</strong>
                <small>Monday, 8:00–11:00 AM</small>
              </span>
            </div>
            <div className={styles.nutritionCard}>
              <strong>40g</strong>
              <span>avg. protein</span>
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <p className={styles.eyebrow}>Two ways to prep</p>
          <h2>Your plan, your level of control.</h2>
          <p>
            Start from scratch or let our kitchen do the choosing. You can
            switch plans before your next renewal.
          </p>
        </section>

        <MealPrepDashboard
          days={weekDays}
          meals={prepMeals}
          packages={mealPackages}
          targets={mealTargets}
        />
      </main>
    </SiteLayout>
  );
}
