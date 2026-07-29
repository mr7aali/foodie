import { Fragment } from "react";
import Image from "next/image";
import type { ProductItem } from "../types/home.types";
import styles from "../styles/home.module.css";

interface ProductCardProps {
  readonly product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const title = product.titleLines.join(" ");
  const stars = "★".repeat(product.rating);

  return (
    <article className={styles.productCard}>
      <div className={styles.productImage}>
        <Image
          src={product.imageSrc}
          alt={title}
          fill
          sizes="(max-width: 700px) 92vw, (max-width: 1000px) 45vw, 29vw"
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productTop}>
          <h3>
            {product.titleLines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h3>
          <a href="#contact">Buy Now</a>
        </div>
        <div className={styles.productBottom}>
          <span aria-label={`${product.rating} out of 5 stars`}>{stars}</span>
          <strong>{product.price}</strong>
        </div>
      </div>
    </article>
  );
}
