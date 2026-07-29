import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "@/features/site";
import { InteriorHero } from "../components/interior-hero";
import { SectionHeading } from "../components/section-heading";
import { aboutHero, restaurantValues } from "../data/restaurant-content";
import styles from "../styles/restaurant-pages.module.css";

const stats = [
  { value: "2018", label: "Foodie opened its doors" },
  { value: "30+", label: "Local supplier relationships" },
  { value: "18", label: "Talented kitchen and service team members" },
  { value: "4.8", label: "Average guest rating" },
] as const;

export function AboutPageView() {
  return (
    <SiteLayout activePath="/about">
      <main className={styles.interiorMain}>
        <InteriorHero content={aboutHero} />

        <section className={styles.contentSection}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <Image
                src="/assets/design-image-9.png"
                alt="A colourful Foodie salad prepared with grilled chicken"
                fill
                sizes="(max-width: 800px) 90vw, 560px"
              />
            </div>
            <div className={styles.storyCopy}>
              <p className={styles.eyebrow}>How it started</p>
              <h2>A neighbourhood restaurant with a generous spirit.</h2>
              <p>
                Foodie started as a small daytime kitchen serving nourishing
                breakfasts and honest lunches. Guests stayed longer, brought
                friends and asked us to open for dinner.
              </p>
              <p>
                Today, the restaurant is still guided by the same idea: buy good
                ingredients, cook them with care and make every person feel at
                home—from a quick coffee to a long celebration.
              </p>
            </div>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <article className={styles.statCard} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section
          className={`${styles.contentSection} ${styles.softSection}`}
          id="values"
        >
          <SectionHeading
            eyebrow="What guides us"
            title="Hospitality with purpose."
            description="The choices behind the menu matter as much as what arrives at the table."
            centered
          />
          <div className={styles.valuesGrid}>
            {restaurantValues.map((value) => (
              <article className={styles.valueCard} key={value.id}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contentSection} id="kitchen">
          <div className={styles.kitchenGrid}>
            <div className={styles.kitchenCopy}>
              <p className={styles.eyebrow}>Inside our kitchen</p>
              <h2>Skilled hands, thoughtful details.</h2>
              <p>
                Our kitchen team combines familiar flavours with bright,
                contemporary cooking. The menu changes with the seasons, while a
                few Foodie favourites always remain.
              </p>
              <p id="sourcing">
                We work closely with growers, bakers and responsible suppliers,
                choosing quality over shortcuts and reducing waste through careful
                menu planning.
              </p>
            </div>
            <div className={styles.kitchenImage}>
              <Image
                src="/assets/design-image-19.png"
                alt="A Foodie chef"
                fill
                sizes="(max-width: 800px) 90vw, 560px"
              />
            </div>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.ctaBand}>
            <div>
              <h2>Come experience the table we have built.</h2>
              <p>Good food is always better when it is shared.</p>
            </div>
            <Link href="/contact#reservation">Plan your visit</Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
