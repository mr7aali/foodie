import Link from "next/link";
import { SiteLayout } from "@/features/site";
import { InteriorHero } from "../components/interior-hero";
import { menuCategories, menuHero } from "../data/restaurant-content";
import styles from "../styles/restaurant-pages.module.css";

export function MenuPageView() {
  return (
    <SiteLayout activePath="/menu">
      <main className={styles.interiorMain}>
        <InteriorHero content={menuHero} />

        <nav className={styles.categoryNav} aria-label="Menu categories">
          {menuCategories.map((category) => (
            <a href={`#${category.id}`} key={category.id}>
              {category.title}
            </a>
          ))}
        </nav>

        <section className={`${styles.contentSection} ${styles.softSection}`}>
          {menuCategories.map((category) => (
            <section
              className={styles.menuCategory}
              id={category.id}
              key={category.id}
            >
              <div className={styles.menuCategoryHeader}>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className={styles.menuList}>
                {category.dishes.map((dish) => (
                  <article className={styles.menuItem} key={dish.id}>
                    <h3>{dish.name}</h3>
                    <strong>{dish.price}</strong>
                    <p>{dish.description}</p>
                    {dish.dietary && (
                      <div
                        className={styles.inlineTags}
                        aria-label="Dietary information"
                      >
                        {dish.dietary.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}

          <p className={styles.menuNote}>
            V = vegetarian · VG = vegan · GF = prepared without gluten-containing
            ingredients. Please tell our team about allergies when ordering; our
            kitchen handles common allergens.
          </p>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.ctaBand}>
            <div>
              <h2>Ready to enjoy Foodie around the table?</h2>
              <p>
                Reserve ahead for dinner, weekend brunch or groups of six or more.
              </p>
            </div>
            <Link href="/contact#reservation">Reserve a table</Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
