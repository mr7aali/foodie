import Image from "next/image";
import type { FeatureItem } from "../types/home.types";
import styles from "../styles/home.module.css";

interface FeaturesSectionProps {
  readonly items: readonly FeatureItem[];
}

export function FeaturesSection({ items }: FeaturesSectionProps) {
  return (
    <section className={styles.features} aria-label="Foodie benefits">
      {items.map((item) => (
        <article className={styles.featureCard} key={item.id}>
          <Image src={item.iconSrc} alt="" width={100} height={100} />
          <h2>{item.title}</h2>
          <p>
            {item.descriptionLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < item.descriptionLines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <a
            className={item.accent ? styles.accentLink : undefined}
            href={item.linkHref}
          >
            {item.linkLabel}
          </a>
        </article>
      ))}
    </section>
  );
}
