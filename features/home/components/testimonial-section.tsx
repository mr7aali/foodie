import Image from "next/image";
import type { TestimonialContent } from "../types/home.types";
import styles from "../styles/home.module.css";

interface TestimonialSectionProps {
  readonly content: TestimonialContent;
}

export function TestimonialSection({ content }: TestimonialSectionProps) {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonialCopy}>
        <h2>
          Customer <span>Feedback</span>
        </h2>
        <p>{content.quote}</p>
        <div className={styles.reviewer}>
          <span className={styles.reviewerImage}>
            <Image
              src={content.reviewerImageSrc}
              alt={content.reviewerName}
              fill
              sizes="(min-width: 1441px) 5.3vw, 76px"
            />
          </span>
          <span>
            <strong>{content.reviewerName}</strong>
            <small>{content.reviewerRole}</small>
          </span>
        </div>
        <div
          className={styles.dots}
          aria-label={`Testimonial ${content.activeSlide} of ${content.slideCount}`}
        >
          {Array.from({ length: content.slideCount }, (_, index) => {
            const slideNumber = index + 1;
            const isActive = slideNumber === content.activeSlide;

            return (
              <button
                className={isActive ? styles.activeDot : undefined}
                aria-label={
                  isActive
                    ? "Current testimonial"
                    : `Show testimonial ${slideNumber}`
                }
                key={slideNumber}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.chefImage}>
        <Image
          src={content.chefImageSrc}
          alt="Chef giving an okay hand sign"
          fill
          sizes="(max-width: 800px) 90vw, 41vw"
        />
      </div>
    </section>
  );
}
