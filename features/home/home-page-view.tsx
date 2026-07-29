import {
  choiceItems,
  featureItems,
  footerColumns,
  heroContent,
  navigationItems,
  newsletterContent,
  productItems,
  testimonialContent,
} from "./data/home-content";
import { BestSellersSection } from "./components/best-sellers-section";
import { FeaturesSection } from "./components/features-section";
import { HeroSection } from "./components/hero-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TestimonialSection } from "./components/testimonial-section";
import { WhyChooseUsSection } from "./components/why-choose-us-section";
import styles from "./styles/home.module.css";

export function HomePageView() {
  return (
    <div className={styles.pageShell}>
      <SiteHeader items={navigationItems} />
      <main>
        <HeroSection content={heroContent} />
        <FeaturesSection items={featureItems} />
        <WhyChooseUsSection items={choiceItems} />
        <BestSellersSection products={productItems} />
        <TestimonialSection content={testimonialContent} />
      </main>
      <SiteFooter columns={footerColumns} newsletter={newsletterContent} />
    </div>
  );
}
