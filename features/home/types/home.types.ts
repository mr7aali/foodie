export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface HeroContent {
  readonly description: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly customerName: string;
  readonly rating: string;
  readonly likes: string;
}

export interface FeatureItem {
  readonly id: string;
  readonly iconSrc: string;
  readonly title: string;
  readonly descriptionLines: readonly string[];
  readonly linkLabel: string;
  readonly linkHref: string;
  readonly accent?: boolean;
}

export interface ChoiceItem {
  readonly id: string;
  readonly icon: "scooter" | string;
  readonly title: string;
  readonly description: string;
}

export interface ProductItem {
  readonly id: string;
  readonly imageSrc: string;
  readonly titleLines: readonly string[];
  readonly price: string;
  readonly rating: number;
}

export interface TestimonialContent {
  readonly quote: string;
  readonly reviewerName: string;
  readonly reviewerRole: string;
  readonly reviewerImageSrc: string;
  readonly chefImageSrc: string;
  readonly activeSlide: number;
  readonly slideCount: number;
}

export interface NewsletterContent {
  readonly title: string;
  readonly accent: string;
  readonly description: string;
  readonly placeholder: string;
  readonly buttonLabel: string;
}

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly badge?: string;
  readonly external?: boolean;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}
