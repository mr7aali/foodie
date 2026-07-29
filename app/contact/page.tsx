import type { Metadata } from "next";
import { ContactPageView } from "@/features/restaurant-pages";

export const metadata: Metadata = {
  title: "Contact & Reservations | Foodie Restaurant",
  description:
    "Reserve a table, find Foodie Restaurant, check opening hours or contact our team.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
