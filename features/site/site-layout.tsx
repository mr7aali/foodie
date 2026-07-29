import type { ReactNode } from "react";
import {
  footerColumns,
  navigationItems,
  newsletterContent,
} from "@/features/home/data/home-content";
import { SiteFooter } from "@/features/home/components/site-footer";
import { SiteHeader } from "@/features/home/components/site-header";
import styles from "@/features/home/styles/home.module.css";

interface SiteLayoutProps {
  readonly activePath: string;
  readonly children: ReactNode;
}

export function SiteLayout({ activePath, children }: SiteLayoutProps) {
  return (
    <div className={styles.pageShell}>
      <div
        className={`${styles.contentFrame} mx-auto w-full max-w-[1440px]`}
      >
        <SiteHeader items={navigationItems} activePath={activePath} />
        {children}
        <SiteFooter columns={footerColumns} newsletter={newsletterContent} />
      </div>
    </div>
  );
}
