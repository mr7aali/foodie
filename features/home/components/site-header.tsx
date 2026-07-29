import type { NavigationItem } from "../types/home.types";
import styles from "../styles/home.module.css";
import { Brand } from "./brand";

interface SiteHeaderProps {
  readonly items: readonly NavigationItem[];
}

function NavigationLinks({
  items,
  mobile = false,
}: SiteHeaderProps & { readonly mobile?: boolean }) {
  return (
    <nav
      className={mobile ? undefined : styles.desktopNav}
      aria-label={mobile ? "Mobile navigation" : "Primary navigation"}
    >
      {items.map((item) => (
        <a
          className={!mobile && item.active ? styles.activeNav : undefined}
          href={item.href}
          key={item.href}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader({ items }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <Brand />
      <NavigationLinks items={items} />
      <a className={styles.loginButton} href="#contact">
        Login
      </a>
      <details className={styles.mobileMenu}>
        <summary aria-label="Open navigation menu">
          <span />
          <span />
          <span />
        </summary>
        <NavigationLinks items={items} mobile />
      </details>
    </header>
  );
}
