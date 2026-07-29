import Link from "next/link";
import { SiteLayout } from "@/features/site";
import { DishCard } from "../components/dish-card";
import { InteriorHero } from "../components/interior-hero";
import { SectionHeading } from "../components/section-heading";
import { featuredDishes, foodsHero } from "../data/restaurant-content";
import styles from "../styles/restaurant-pages.module.css";

const principles = [
  {
    icon: "✦",
    title: "Prepared fresh",
    description:
      "Our sauces, dressings and desserts are made in-house, with each plate finished to order.",
  },
  {
    icon: "⌖",
    title: "Responsibly sourced",
    description:
      "We choose trusted producers and prioritise seasonal ingredients wherever possible.",
  },
  {
    icon: "♡",
    title: "Made for everyone",
    description:
      "Vegetarian, vegan and gluten-aware choices are clearly marked and thoughtfully prepared.",
  },
] as const;

export function FoodsPageView() {
  return (
    <SiteLayout activePath="/foods">
      <main className={styles.interiorMain}>
        <InteriorHero content={foodsHero} />

        <section className={styles.contentSection}>
          <SectionHeading
            eyebrow="Guest favourites"
            title="Meet the dishes people come back for."
            description="Balanced, colourful and satisfying plates for breakfast, lunch, dinner and everything in between."
          />
          <div className={styles.categoryNav} aria-label="Food categories">
            {["All dishes", "Breakfast", "Bowls", "Mains", "Salads", "Sharing"].map(
              (category) => (
                <span className={styles.filterPill} key={category}>
                  {category}
                </span>
              ),
            )}
          </div>
          <div className={styles.foodGrid}>
            {featuredDishes.map((dish) => (
              <DishCard dish={dish} key={dish.id} />
            ))}
          </div>
        </section>

        <section className={`${styles.contentSection} ${styles.softSection}`}>
          <SectionHeading
            eyebrow="The Foodie standard"
            title="Simple principles. Better plates."
            description="Every dish begins with good ingredients and ends with careful, generous cooking."
            centered
          />
          <div className={styles.principlesGrid}>
            {principles.map((principle) => (
              <article className={styles.principleCard} key={principle.title}>
                <span className={styles.principleIcon}>{principle.icon}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.ctaBand}>
            <div>
              <h2>See something you would love to try?</h2>
              <p>Explore every course, dietary marker and seasonal special.</p>
            </div>
            <Link href="/menu">View full menu</Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
