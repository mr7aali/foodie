import type { Metadata } from "next";
import { AboutPageView } from "@/features/restaurant-pages";

export const metadata: Metadata = {
  title: "About Us | Foodie Restaurant",
  description:
    "Meet the people, values and seasonal sourcing behind Foodie Restaurant.",
};

export default function AboutPage() {
  return <AboutPageView />;
}
