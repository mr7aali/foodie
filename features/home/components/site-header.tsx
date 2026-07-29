import Link from "next/link";
import type { NavigationItem } from "../types/home.types";
import styles from "../styles/home.module.css";
import { Brand } from "./brand";

interface SiteHeaderProps {
  readonly items: readonly NavigationItem[];
  readonly activePath: string;
}

function NavigationLinks({
  items,
  activePath,
  mobile = false,
}: SiteHeaderProps & { readonly mobile?: boolean }) {
  return (
    <nav
      className={mobile ? undefined : styles.desktopNav}
      aria-label={mobile ? "Mobile navigation" : "Primary navigation"}
    >
      {items.map((item) => (
        <Link
          aria-current={item.href === activePath ? "page" : undefined}
          className={
            !mobile && item.href === activePath ? styles.activeNav : undefined
          }
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
      {mobile && (
        <Link
          aria-current={activePath === "/meal-prep" ? "page" : undefined}
          className={styles.mobileMealPrepLink}
          href="/meal-prep"
        >
          Meal Prep
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  );
}

export function SiteHeader({ items, activePath }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <Brand />
      <NavigationLinks items={items} activePath={activePath} />
      <Link
        aria-current={activePath === "/meal-prep" ? "page" : undefined}
        className={`${styles.headerCta} ${
          activePath === "/meal-prep" ? styles.headerCtaActive : ""
        }`}
        href="/meal-prep"
      >
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="M4.5 8.5h15v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10Z" />
          <path d="M3.5 5.5h17v3h-17zM9 12h6M9 16h6" />
        </svg>
        <span>Meal Prep</span>
      </Link>
      <details className={styles.mobileMenu}>
        <summary aria-label="Open navigation menu">
          <span />
          <span />
          <span />
        </summary>
        <NavigationLinks items={items} activePath={activePath} mobile />
      </details>
    </header>
  );
}
