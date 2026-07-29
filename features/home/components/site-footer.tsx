import Link from "next/link";
import type {
  FooterColumn,
  NewsletterContent,
} from "../types/home.types";
import styles from "../styles/home.module.css";

interface SiteFooterProps {
  readonly columns: readonly FooterColumn[];
  readonly newsletter: NewsletterContent;
}

export function SiteFooter({ columns, newsletter }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter} id="newsletter">
        <div>
          <h2>
            {newsletter.title} <span>{newsletter.accent}</span>
          </h2>
          <p>{newsletter.description}</p>
        </div>
        <form>
          <label className={styles.srOnly} htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder={newsletter.placeholder}
          />
          <button type="submit">{newsletter.buttonLabel}</button>
        </form>
      </div>

      <div className={styles.footerLinks}>
        {columns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
                {link.badge && <span>{link.badge}</span>}
                {link.external && <b>↗</b>}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.footerBottom}>
        <nav aria-label="Legal">
          <Link href="/">English</Link>
          <Link href="/contact">Privacy</Link>
          <Link href="/contact">Legal</Link>
        </nav>
        <p>© 2026 Foodie Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
