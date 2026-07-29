export type MealPrepMode = "custom" | "premade";
export type PlanCadence = "weekly" | "monthly";

export type DayId =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface WeekDay {
  readonly id: DayId;
  readonly shortLabel: string;
  readonly label: string;
}

export interface PrepMeal {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly category: "Breakfast" | "Lunch" | "Dinner";
  readonly price: number;
  readonly calories: number;
  readonly protein: number;
  readonly tags: readonly string[];
}

export interface PackageMeal {
  readonly mealId: string;
  readonly quantity: number;
}

export interface MealPackage {
  readonly id: string;
  readonly name: string;
  readonly eyebrow: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly mealsPerWeek: number;
  readonly pricePerWeek: number;
  readonly badge?: string;
  readonly features: readonly string[];
  readonly meals: readonly PackageMeal[];
}

export type MealSchedule = Record<DayId, Record<string, number>>;

export interface CheckoutOrder {
  readonly title: string;
  readonly description: string;
  readonly cadence: PlanCadence;
  readonly amount: number;
  readonly meals: number;
}
