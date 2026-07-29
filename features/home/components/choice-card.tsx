import Image from "next/image";
import type { ChoiceItem } from "../types/home.types";
import styles from "../styles/home.module.css";
import { ScooterIcon } from "./icons";

interface ChoiceCardProps {
  readonly item: ChoiceItem;
}

export function ChoiceCard({ item }: ChoiceCardProps) {
  return (
    <article className={styles.choiceCard}>
      <span className={styles.choiceIcon}>
        {item.icon === "scooter" ? (
          <ScooterIcon />
        ) : (
          <Image src={item.icon} alt="" width={54} height={54} />
        )}
      </span>
      <span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </span>
    </article>
  );
}
