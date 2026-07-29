import Image from "next/image";
import Link from "next/link";
import type { InteriorHeroContent } from "../types/restaurant.types";
import styles from "../styles/restaurant-pages.module.css";

interface InteriorHeroProps {
  readonly content: InteriorHeroContent;
}

export function InteriorHero({ content }: InteriorHeroProps) {
  return (
    <section className={styles.pageHero}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className={styles.heroDescription}>{content.description}</p>
        {(content.primaryAction || content.secondaryAction) && (
          <div className={styles.heroActions}>
            {content.primaryAction && (
              <Link
                className={styles.primaryAction}
                href={content.primaryAction.href}
              >
                {content.primaryAction.label}
              </Link>
            )}
            {content.secondaryAction && (
              <Link
                className={styles.secondaryAction}
                href={content.secondaryAction.href}
              >
                {content.secondaryAction.label}
              </Link>
            )}
          </div>
        )}
      </div>
      <div className={styles.heroImage}>
        <Image
          src={content.imageSrc}
          alt={content.imageAlt}
          fill
          priority
          sizes="(max-width: 800px) 90vw, 520px"
        />
      </div>
    </section>
  );
}
