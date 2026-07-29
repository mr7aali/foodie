import styles from "../styles/home.module.css";

export function Brand() {
  return (
    <a className={styles.brand} href="#home" aria-label="Foodie home">
      <span className={styles.brandMark}>
        <svg viewBox="0 0 44 44" aria-hidden="true">
          <path
            d="M11 20.5h22c-.5-6.2-5.1-10.6-11-10.6s-10.5 4.4-11 10.6Zm-2 3h26"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.4"
          />
          <path
            d="M15.5 30.5c1.7 2 3.8 3 6.5 3 2.8 0 5-1 6.6-3"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.4"
          />
          <circle cx="22" cy="8" r="1.7" fill="currentColor" />
        </svg>
      </span>
      <span className={styles.brandName}>Foodie</span>
    </a>
  );
}
