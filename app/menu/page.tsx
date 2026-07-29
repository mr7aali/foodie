import type { Metadata } from "next";
import { MenuPageView } from "@/features/restaurant-pages";

export const metadata: Metadata = {
  title: "Menu | Foodie Restaurant",
  description:
    "Explore Foodie's seasonal starters, main dishes, desserts and house drinks.",
};

export default function MenuPage() {
  return <MenuPageView />;
}
