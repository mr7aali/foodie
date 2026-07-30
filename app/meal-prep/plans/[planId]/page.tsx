import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getMealPackage,
  MealPlanDetailsView,
} from "@/features/meal-prep";
import { mealPackages } from "@/features/meal-prep/data/meal-prep-content";
import type { PlanCadence } from "@/features/meal-prep/types/meal-prep.types";

interface PlanPageProps {
  readonly params: Promise<{ planId: string }>;
  readonly searchParams: Promise<{
    cadence?: string | string[];
  }>;
}

function getNextMondayIso() {
  const today = new Date();
  const day = today.getUTCDay();
  const daysUntilMonday = ((8 - day) % 7) || 7;
  const nextMonday = new Date(today);
  nextMonday.setUTCDate(today.getUTCDate() + daysUntilMonday);
  return nextMonday.toISOString().slice(0, 10);
}

export function generateStaticParams() {
  return mealPackages.map((item) => ({ planId: item.id }));
}

export async function generateMetadata({
  params,
}: PlanPageProps): Promise<Metadata> {
  const { planId } = await params;
  const packageItem = getMealPackage(planId);

  if (!packageItem) {
    return { title: "Meal plan not found | Foodie" };
  }

  return {
    title: `${packageItem.name} Meal Plan | Foodie`,
    description: `${packageItem.description} Review the complete menu, delivery calendar and pricing.`,
  };
}

export default async function PlanDetailsPage({
  params,
  searchParams,
}: PlanPageProps) {
  const [{ planId }, query] = await Promise.all([params, searchParams]);
  const packageItem = getMealPackage(planId);

  if (!packageItem) notFound();

  const requestedCadence = Array.isArray(query.cadence)
    ? query.cadence[0]
    : query.cadence;
  const cadence: PlanCadence =
    requestedCadence === "monthly" ? "monthly" : "weekly";

  return (
    <MealPlanDetailsView
      cadence={cadence}
      planId={planId}
      startDateIso={getNextMondayIso()}
    />
  );
}
