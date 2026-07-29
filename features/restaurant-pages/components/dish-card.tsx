import Image from "next/image";
import type { Dish } from "../types/restaurant.types";
import styles from "../styles/restaurant-pages.module.css";

interface DishCardProps {
  readonly dish: Dish;
}

export function DishCard({ dish }: DishCardProps) {
  return (
    <article className={styles.dishCard}>
      {dish.imageSrc && (
        <div className={styles.dishImage}>
          <Image
            src={dish.imageSrc}
            alt={dish.name}
            fill
            sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 390px"
          />
          {dish.featured && <span className={styles.featuredBadge}>Popular</span>}
        </div>
      )}
      <div className={styles.dishBody}>
        <div className={styles.dishMeta}>
          {dish.category && <span>{dish.category}</span>}
          <strong>{dish.price}</strong>
        </div>
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        {dish.dietary && (
          <div className={styles.dietaryTags} aria-label="Dietary information">
            {dish.dietary.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
