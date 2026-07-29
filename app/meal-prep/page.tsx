import type { Metadata } from "next";
import { MealPrepPageView } from "@/features/meal-prep";

export const metadata: Metadata = {
  title: "Meal Prep Plans | Foodie",
  description:
    "Build a custom weekly or monthly meal plan, or choose a chef-curated ready-made Foodie package.",
};

export default function MealPrepPage() {
  return <MealPrepPageView />;
}
