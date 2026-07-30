import { SiteLayout } from "@/features/site";
import {
  mealPackages,
  prepMeals,
} from "./data/meal-prep-content";
import type { PlanCadence } from "./types/meal-prep.types";
import { MealPlanDetails } from "./components/meal-plan-details";
import styles from "./styles/plan-details.module.css";

interface MealPlanDetailsViewProps {
  readonly cadence: PlanCadence;
  readonly planId: string;
  readonly startDateIso: string;
}

export function getMealPackage(planId: string) {
  return mealPackages.find((item) => item.id === planId);
}

export function MealPlanDetailsView({
  cadence,
  planId,
  startDateIso,
}: MealPlanDetailsViewProps) {
  const packageItem = getMealPackage(planId);

  if (!packageItem) return null;

  return (
    <SiteLayout activePath="/meal-prep">
      <div className={styles.page}>
        <MealPlanDetails
          initialCadence={cadence}
          meals={prepMeals}
          packageItem={packageItem}
          startDateIso={startDateIso}
        />
      </div>
    </SiteLayout>
  );
}
