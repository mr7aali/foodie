export interface InteriorHeroContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly primaryAction?: {
    readonly label: string;
    readonly href: string;
  };
  readonly secondaryAction?: {
    readonly label: string;
    readonly href: string;
  };
}

export interface Dish {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly imageSrc?: string;
  readonly category?: string;
  readonly dietary?: readonly string[];
  readonly featured?: boolean;
}

export interface MenuCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly dishes: readonly Dish[];
}

export interface ValueItem {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface ContactDetail {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly lines: readonly string[];
  readonly href?: string;
}
