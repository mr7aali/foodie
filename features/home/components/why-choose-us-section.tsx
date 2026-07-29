import Image from "next/image";
import type { ChoiceItem } from "../types/home.types";
import styles from "../styles/home.module.css";
import { ChoiceCard } from "./choice-card";

interface WhyChooseUsSectionProps {
  readonly items: readonly ChoiceItem[];
}

export function WhyChooseUsSection({ items }: WhyChooseUsSectionProps) {
  return (
    <section className={styles.whySection} id="about">
      <div className={styles.whyImage}>
        <Image
          src="/assets/design-image-9.png"
          alt="Grilled chicken with a fresh garden salad"
          fill
          sizes="(max-width: 800px) 100vw, 578px"
        />
      </div>
      <div className={styles.whyCopy}>
        <h2>Why People Choose us?</h2>
        <div className={styles.choiceList}>
          {items.map((item) => (
            <ChoiceCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
