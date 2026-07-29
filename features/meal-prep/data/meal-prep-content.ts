import type {
  MealPackage,
  PrepMeal,
  WeekDay,
} from "../types/meal-prep.types";

export const weekDays: readonly WeekDay[] = [
  { id: "monday", shortLabel: "Mon", label: "Monday" },
  { id: "tuesday", shortLabel: "Tue", label: "Tuesday" },
  { id: "wednesday", shortLabel: "Wed", label: "Wednesday" },
  { id: "thursday", shortLabel: "Thu", label: "Thursday" },
  { id: "friday", shortLabel: "Fri", label: "Friday" },
  { id: "saturday", shortLabel: "Sat", label: "Saturday" },
  { id: "sunday", shortLabel: "Sun", label: "Sunday" },
];

export const prepMeals: readonly PrepMeal[] = [
  {
    id: "sunrise-protein-bowl",
    name: "Sunrise Protein Bowl",
    description: "Eggs, avocado, roasted potato, greens and tomato salsa.",
    imageSrc: "/assets/design-image-12.png",
    category: "Breakfast",
    price: 12.5,
    calories: 480,
    protein: 31,
    tags: ["High protein", "GF"],
  },
  {
    id: "berry-oat-breakfast",
    name: "Berry Overnight Oats",
    description: "Rolled oats, chia, berries, almond butter and maple.",
    imageSrc: "/assets/design-image-15.png",
    category: "Breakfast",
    price: 10.5,
    calories: 390,
    protein: 16,
    tags: ["Vegan", "Fibre rich"],
  },
  {
    id: "herb-chicken-grains",
    name: "Herb Chicken & Grains",
    description: "Grilled chicken, herbed rice, seasonal greens and yoghurt.",
    imageSrc: "/assets/design-image-14.png",
    category: "Lunch",
    price: 14.5,
    calories: 560,
    protein: 44,
    tags: ["High protein", "Balanced"],
  },
  {
    id: "rainbow-power-bowl",
    name: "Rainbow Power Bowl",
    description: "Quinoa, edamame, carrot, herbs and sesame ginger dressing.",
    imageSrc: "/assets/design-image-13.png",
    category: "Lunch",
    price: 13,
    calories: 510,
    protein: 23,
    tags: ["Vegan", "GF"],
  },
  {
    id: "salmon-green-plate",
    name: "Salmon Green Plate",
    description: "Roasted salmon, greens, sweet potato and lemon herb sauce.",
    imageSrc: "/assets/design-image-16.png",
    category: "Dinner",
    price: 16.5,
    calories: 620,
    protein: 46,
    tags: ["Omega 3", "GF"],
  },
  {
    id: "slow-cooked-beef",
    name: "Slow-Cooked Beef Bowl",
    description: "Tender beef, brown rice, charred vegetables and chimichurri.",
    imageSrc: "/assets/design-image-17.png",
    category: "Dinner",
    price: 16,
    calories: 680,
    protein: 48,
    tags: ["High protein", "Dairy free"],
  },
];

export const mealTargets = [5, 7, 10, 14] as const;

export const mealPackages: readonly MealPackage[] = [
  {
    id: "balanced-week",
    name: "Balanced Week",
    eyebrow: "Everyday favourite",
    description:
      "A practical mix of colourful lunches and satisfying dinners for a busy week.",
    imageSrc: "/assets/design-image-13.png",
    mealsPerWeek: 7,
    pricePerWeek: 92,
    badge: "Most popular",
    features: [
      "7 chef-selected meals",
      "Balanced protein and vegetables",
      "Free weekly delivery",
    ],
    meals: [
      { mealId: "herb-chicken-grains", quantity: 2 },
      { mealId: "rainbow-power-bowl", quantity: 2 },
      { mealId: "salmon-green-plate", quantity: 2 },
      { mealId: "slow-cooked-beef", quantity: 1 },
    ],
  },
  {
    id: "protein-plus",
    name: "Protein Plus",
    eyebrow: "Built for active days",
    description:
      "High-protein breakfasts, lunches and dinners with zero planning required.",
    imageSrc: "/assets/design-image-14.png",
    mealsPerWeek: 10,
    pricePerWeek: 138,
    badge: "High protein",
    features: [
      "10 protein-forward meals",
      "Average 40g protein per meal",
      "Free weekly delivery",
    ],
    meals: [
      { mealId: "sunrise-protein-bowl", quantity: 2 },
      { mealId: "herb-chicken-grains", quantity: 3 },
      { mealId: "salmon-green-plate", quantity: 2 },
      { mealId: "slow-cooked-beef", quantity: 3 },
    ],
  },
  {
    id: "plant-powered",
    name: "Plant Powered",
    eyebrow: "Fresh and meat-free",
    description:
      "A vibrant vegetarian selection made with whole grains, plants and bold sauces.",
    imageSrc: "/assets/design-image-15.png",
    mealsPerWeek: 5,
    pricePerWeek: 62,
    features: [
      "5 vegetarian meals",
      "At least 18g protein per meal",
      "No artificial additives",
    ],
    meals: [
      { mealId: "berry-oat-breakfast", quantity: 2 },
      { mealId: "rainbow-power-bowl", quantity: 3 },
    ],
  },
];
