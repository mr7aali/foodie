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
    <footer className={styles.footer} id="contact">
      <div className={styles.newsletter}>
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
              <a href="#" key={link.label}>
                {link.label}
                {link.badge && <span>{link.badge}</span>}
                {link.external && <b>↗</b>}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.footerBottom}>
        <nav aria-label="Legal">
          <a href="#">English</a>
          <a href="#">Privacy</a>
          <a href="#">Legal</a>
        </nav>
        <p>© 2023 Cadet UI. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
