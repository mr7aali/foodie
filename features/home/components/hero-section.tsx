import Image from "next/image";
import type { HeroContent } from "../types/home.types";
import styles from "../styles/home.module.css";
import { DeliveryIcon, LocationIcon } from "./icons";

interface HeroSectionProps {
  readonly content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroCopy}>
        <h1>
          Desire <span>Food</span>
          <br />
          for Your Taste
        </h1>
        <p>{content.description}</p>
        <a className={styles.primaryButton} href={content.ctaHref}>
          {content.ctaLabel}
        </a>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.heroOrange} />
        <Image
          className={styles.heroPerson}
          src="/assets/design-image-0.png"
          alt="Smiling woman holding a slice of pizza"
          fill
          priority
          sizes="(max-width: 800px) 92vw, 587px"
        />

        <div className={`${styles.floatingCard} ${styles.deliveryCard}`}>
          <span className={styles.rocketIcon}>
            <DeliveryIcon />
          </span>
          <span>
            <strong>Delivery</strong>
            <small>in 30 mint</small>
          </span>
        </div>

        <div className={`${styles.floatingCard} ${styles.profileCard}`}>
          <span className={styles.avatar}>
            <Image
              src="/assets/design-image-2.png"
              alt=""
              fill
              sizes="59px"
            />
          </span>
          <span>
            <strong>{content.customerName}</strong>
            <small>
              <b>★</b> {content.rating} <i>♥</i> {content.likes}
            </small>
          </span>
        </div>

        <div className={`${styles.floatingCard} ${styles.locationCard}`}>
          <span className={styles.locationIcon}>
            <LocationIcon />
          </span>
          <span>
            <strong>Location</strong>
            <small>at destination</small>
          </span>
        </div>
      </div>
    </section>
  );
}
