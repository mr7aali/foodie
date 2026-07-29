import type { Metadata } from "next";
import { FoodsPageView } from "@/features/restaurant-pages";

export const metadata: Metadata = {
  title: "Our Food | Foodie Restaurant",
  description:
    "Discover Foodie's guest-favourite breakfasts, bowls, salads, mains and sharing dishes.",
};

export default function FoodsPage() {
  return <FoodsPageView />;
}
