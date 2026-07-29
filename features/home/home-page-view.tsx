import {
  choiceItems,
  featureItems,
  heroContent,
  productItems,
  testimonialContent,
} from "./data/home-content";
import { SiteLayout } from "@/features/site";
import { BestSellersSection } from "./components/best-sellers-section";
import { FeaturesSection } from "./components/features-section";
import { HeroSection } from "./components/hero-section";
import { TestimonialSection } from "./components/testimonial-section";
import { WhyChooseUsSection } from "./components/why-choose-us-section";

export function HomePageView() {
  return (
    <SiteLayout activePath="/">
      <main>
        <HeroSection content={heroContent} />
        <FeaturesSection items={featureItems} />
        <WhyChooseUsSection items={choiceItems} />
        <BestSellersSection products={productItems} />
        <TestimonialSection content={testimonialContent} />
      </main>
    </SiteLayout>
  );
}
