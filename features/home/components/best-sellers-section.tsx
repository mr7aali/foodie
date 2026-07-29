import type { ProductItem } from "../types/home.types";
import styles from "../styles/home.module.css";
import { ProductCard } from "./product-card";

interface BestSellersSectionProps {
  readonly products: readonly ProductItem[];
}

export function BestSellersSection({ products }: BestSellersSectionProps) {
  return (
    <section className={styles.sellers} id="foods">
      <div className={styles.sectionHeading}>
        <h2>Our best Seller Dishes</h2>
        <span aria-hidden="true" />
        <p>
          Our fresh garden salad is a light and refreshing option. It features a
          mix of
          <br />
          crisp lettuce, juicy tomatoe all tossed in your choice of dressing.
        </p>
      </div>
      <div className={styles.productGrid} id="menu">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
