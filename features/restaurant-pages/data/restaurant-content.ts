import type {
  ContactDetail,
  Dish,
  InteriorHeroContent,
  MenuCategory,
  ValueItem,
} from "../types/restaurant.types";

export const menuHero: InteriorHeroContent = {
  eyebrow: "Seasonal, fresh and made to order",
  title: "A menu made for every appetite.",
  description:
    "Comforting favourites, bright seasonal plates and thoughtful vegetarian choices—prepared from scratch by our kitchen every day.",
  imageSrc: "/assets/design-image-16.png",
  imageAlt: "A table filled with colourful dishes",
  primaryAction: { label: "Reserve a table", href: "/contact#reservation" },
  secondaryAction: { label: "Explore featured dishes", href: "/foods" },
};

export const menuCategories: readonly MenuCategory[] = [
  {
    id: "starters",
    title: "To Begin",
    description: "Fresh, shareable plates to start the table.",
    dishes: [
      {
        id: "garden-salad",
        name: "Foodie Garden Salad",
        description:
          "Baby leaves, cucumber, tomato, radish and citrus-herb dressing.",
        price: "$12",
        dietary: ["V", "GF"],
      },
      {
        id: "tomato-soup",
        name: "Roasted Tomato Soup",
        description:
          "Slow-roasted tomatoes, basil oil and warm sourdough.",
        price: "$10",
        dietary: ["V"],
      },
      {
        id: "calamari",
        name: "Crispy Calamari",
        description:
          "Lemon pepper coating, parsley and roasted garlic aioli.",
        price: "$15",
      },
      {
        id: "burrata",
        name: "Burrata & Heritage Tomatoes",
        description:
          "Creamy burrata, basil, aged balsamic and toasted seeds.",
        price: "$16",
        dietary: ["V", "GF"],
      },
    ],
  },
  {
    id: "mains",
    title: "Main Plates",
    description: "Generous dishes centred on peak-season ingredients.",
    dishes: [
      {
        id: "grilled-chicken",
        name: "Herb Grilled Chicken",
        description:
          "Free-range chicken, garden salad, roast potatoes and pan jus.",
        price: "$24",
        dietary: ["GF"],
      },
      {
        id: "salmon",
        name: "Seared Atlantic Salmon",
        description:
          "Lemon couscous, charred greens and dill yoghurt.",
        price: "$28",
      },
      {
        id: "mushroom-pasta",
        name: "Truffle Mushroom Pasta",
        description:
          "Wild mushrooms, parmesan, herbs and silky truffle cream.",
        price: "$22",
        dietary: ["V"],
      },
      {
        id: "signature-burger",
        name: "Foodie Signature Burger",
        description:
          "Dry-aged beef, cheddar, house pickles, burger sauce and fries.",
        price: "$21",
      },
    ],
  },
  {
    id: "desserts",
    title: "Something Sweet",
    description: "House-made desserts worth saving room for.",
    dishes: [
      {
        id: "cheesecake",
        name: "Basque Cheesecake",
        description: "Caramelised cheesecake, berry compote and vanilla.",
        price: "$10",
        dietary: ["V"],
      },
      {
        id: "fondant",
        name: "Chocolate Fondant",
        description: "Warm chocolate centre, cocoa crumb and milk ice cream.",
        price: "$11",
        dietary: ["V"],
      },
      {
        id: "panna-cotta",
        name: "Citrus Panna Cotta",
        description: "Orange, lemon and lime with a crisp almond tuile.",
        price: "$9",
        dietary: ["GF"],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    description: "House refreshments and thoughtful non-alcoholic serves.",
    dishes: [
      {
        id: "lemonade",
        name: "House Lemonade",
        description: "Fresh lemon, mint and a touch of wildflower honey.",
        price: "$6",
      },
      {
        id: "berry-spritz",
        name: "Berry & Basil Spritz",
        description: "Seasonal berries, basil, soda and fresh lime.",
        price: "$7",
      },
      {
        id: "cold-brew",
        name: "Vanilla Cold Brew",
        description: "Small-batch cold brew, vanilla and your choice of milk.",
        price: "$6",
      },
    ],
  },
];

export const foodsHero: InteriorHeroContent = {
  eyebrow: "From our kitchen",
  title: "Food worth gathering for.",
  description:
    "Discover the dishes our guests return for—from energising breakfasts to vibrant bowls, grilled favourites and generous sharing plates.",
  imageSrc: "/assets/design-image-14.png",
  imageAlt: "Roasted chicken served with tomatoes and lemon",
  primaryAction: { label: "View the full menu", href: "/menu" },
  secondaryAction: { label: "Book your table", href: "/contact#reservation" },
};

export const featuredDishes: readonly Dish[] = [
  {
    id: "seasonal-breakfast",
    name: "Seasonal Breakfast Plate",
    description:
      "Roasted vegetables, soft herbs, free-range eggs and toasted sourdough.",
    price: "$18",
    imageSrc: "/assets/design-image-12.png",
    category: "Breakfast",
    dietary: ["V"],
    featured: true,
  },
  {
    id: "sunshine-bowl",
    name: "Sunshine Grain Bowl",
    description:
      "Herbed grains, citrus, chickpeas, greens and tahini dressing.",
    price: "$19",
    imageSrc: "/assets/design-image-13.png",
    category: "Bowls",
    dietary: ["VG"],
  },
  {
    id: "roast-chicken",
    name: "Citrus Roast Chicken",
    description:
      "Golden roast chicken with tomatoes, charred lemon and pan juices.",
    price: "$26",
    imageSrc: "/assets/design-image-14.png",
    category: "Mains",
    dietary: ["GF"],
    featured: true,
  },
  {
    id: "fruit-table",
    name: "Fresh Fruit Table",
    description:
      "A generous mix of seasonal fruit, yoghurt, seeds and local honey.",
    price: "$16",
    imageSrc: "/assets/design-image-15.png",
    category: "Breakfast",
    dietary: ["V", "GF"],
  },
  {
    id: "salmon-salad",
    name: "Salmon Harvest Salad",
    description:
      "Roasted salmon, crisp vegetables, grains and mustard vinaigrette.",
    price: "$24",
    imageSrc: "/assets/design-image-16.png",
    category: "Salads",
    dietary: ["GF"],
  },
  {
    id: "sharing-feast",
    name: "Foodie Sharing Feast",
    description:
      "A table of colourful favourites designed for friends and family.",
    price: "$42",
    imageSrc: "/assets/design-image-17.png",
    category: "Sharing",
    featured: true,
  },
];

export const aboutHero: InteriorHeroContent = {
  eyebrow: "Our story",
  title: "Good food. Warm service. One welcoming table.",
  description:
    "Foodie began with a simple belief: everyday dining should feel generous, personal and full of flavour.",
  imageSrc: "/assets/design-image-9.png",
  imageAlt: "A fresh salad with grilled chicken",
  primaryAction: { label: "Meet our food", href: "/foods" },
  secondaryAction: { label: "Plan a visit", href: "/contact" },
};

export const restaurantValues: readonly ValueItem[] = [
  {
    id: "seasonal",
    icon: "◌",
    title: "Cook with the seasons",
    description:
      "Our menu follows what is fresh, flavourful and naturally at its best.",
  },
  {
    id: "local",
    icon: "⌖",
    title: "Source with care",
    description:
      "We build long-term relationships with responsible growers and suppliers.",
  },
  {
    id: "welcome",
    icon: "♡",
    title: "Welcome everyone",
    description:
      "Thoughtful hospitality, flexible dietary options and a place for every guest.",
  },
];

export const contactHero: InteriorHeroContent = {
  eyebrow: "Visit Foodie",
  title: "We would love to welcome you.",
  description:
    "Reserve a table, ask about dietary requirements or plan a group meal. Our team is here to make your visit easy.",
  imageSrc: "/assets/design-image-0.png",
  imageAlt: "A smiling Foodie guest holding pizza",
  primaryAction: { label: "Request a table", href: "#reservation" },
  secondaryAction: { label: "View opening hours", href: "#hours" },
};

export const contactDetails: readonly ContactDetail[] = [
  {
    id: "address",
    icon: "⌖",
    title: "Find us",
    lines: ["24 Garden Avenue", "Downtown, Food District"],
    href: "#location",
  },
  {
    id: "phone",
    icon: "☎",
    title: "Call",
    lines: ["+1 (555) 014-2026", "Daily from 9:00 AM"],
    href: "tel:+15550142026",
  },
  {
    id: "email",
    icon: "✉",
    title: "Email",
    lines: ["hello@foodierestaurant.com", "Replies within one business day"],
    href: "mailto:hello@foodierestaurant.com",
  },
  {
    id: "hours",
    icon: "◷",
    title: "Opening hours",
    lines: ["Mon–Thu 8:00 AM–10:00 PM", "Fri–Sun 8:00 AM–11:00 PM"],
    href: "#hours",
  },
];
