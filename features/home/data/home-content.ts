import type {
  ChoiceItem,
  FeatureItem,
  FooterColumn,
  HeroContent,
  NavigationItem,
  NewsletterContent,
  ProductItem,
  TestimonialContent,
} from "../types/home.types";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Menu", href: "/menu" },
  { label: "Foods", href: "/foods" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export const heroContent: HeroContent = {
  description:
    "Food is what we eat to stay alive and healthy. It comes in many different forms and flavors, from fruits and vegetables to meats and grains.",
  ctaLabel: "Order Now",
  ctaHref: "/menu",
  customerName: "Ali Ahmad",
  rating: "4.5",
  likes: "1k Likes",
};

export const featureItems: readonly FeatureItem[] = [
  {
    id: "quality",
    iconSrc: "/assets/design-image-5.png",
    title: "Quality Food",
    descriptionLines: [
      "Contrary to popular belief,",
      "Lorem Ipsum is not simply",
      "random text",
    ],
    linkLabel: "Learn More",
    linkHref: "/foods",
  },
  {
    id: "delivery",
    iconSrc: "/assets/design-image-6.png",
    title: "Quality Food",
    descriptionLines: [
      "Contrary to popular belief,",
      "Lorem Ipsum is not simply",
      "random text",
    ],
    linkLabel: "Learn More",
    linkHref: "/foods",
    accent: true,
  },
  {
    id: "payment",
    iconSrc: "/assets/design-image-7.png",
    title: "Quality Food",
    descriptionLines: [
      "Contrary to popular belief,",
      "Lorem Ipsum is not simply",
      "random text",
    ],
    linkLabel: "Learn More",
    linkHref: "/foods",
  },
  {
    id: "ordering",
    iconSrc: "/assets/design-image-8.png",
    title: "Quality Food",
    descriptionLines: [
      "Contrary to popular belief,",
      "Lorem Ipsum is not simply",
      "random text",
    ],
    linkLabel: "Learn More",
    linkHref: "/foods",
  },
];

export const choiceItems: readonly ChoiceItem[] = [
  {
    id: "reliable",
    icon: "scooter",
    title: "Convenient and Reliable",
    description:
      "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
  },
  {
    id: "variety",
    icon: "/assets/design-image-10.png",
    title: "Variety of Options",
    description:
      "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
  },
  {
    id: "burger",
    icon: "/assets/design-image-11.png",
    title: "Eat Burger",
    description:
      "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
  },
];

export const productItems: readonly ProductItem[] = [
  {
    id: "breakfast-vegetables",
    imageSrc: "/assets/design-image-12.png",
    titleLines: ["Breakfast Food"],
    price: "$230",
    rating: 5,
  },
  {
    id: "healthy-breakfast",
    imageSrc: "/assets/design-image-13.png",
    titleLines: ["Health", "Breakfast"],
    price: "$230",
    rating: 5,
  },
  {
    id: "breakfast-chicken",
    imageSrc: "/assets/design-image-14.png",
    titleLines: ["Breakfast Food"],
    price: "$230",
    rating: 5,
  },
  {
    id: "breakfast-fruit",
    imageSrc: "/assets/design-image-15.png",
    titleLines: ["Breakfast Food"],
    price: "$230",
    rating: 5,
  },
  {
    id: "breakfast-salad",
    imageSrc: "/assets/design-image-16.png",
    titleLines: ["Breakfast Food"],
    price: "$230",
    rating: 5,
  },
  {
    id: "breakfast-table",
    imageSrc: "/assets/design-image-17.png",
    titleLines: ["Breakfast Food"],
    price: "$230",
    rating: 5,
  },
];

export const testimonialContent: TestimonialContent = {
  quote:
    "I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.",
  reviewerName: "Tayyab Sohail",
  reviewerRole: "UX/UI Designer",
  reviewerImageSrc: "/assets/design-image-18.png",
  chefImageSrc: "/assets/design-image-19.png",
  activeSlide: 2,
  slideCount: 3,
};

export const newsletterContent: NewsletterContent = {
  title: "Join Our",
  accent: "Newsletter",
  description:
    "Be the first to know about our latest updates, exclusive offers, and more.",
  placeholder: "Enter your email address",
  buttonLabel: "Subscribe",
};

export const footerColumns: readonly FooterColumn[] = [
  {
    title: "Our Menu",
    links: [
      { label: "Full Menu", href: "/menu" },
      { label: "Meal Prep Plans", href: "/meal-prep" },
      { label: "Breakfast", href: "/foods#breakfast" },
      { label: "Main Dishes", href: "/foods#mains" },
      { label: "Desserts", href: "/foods#desserts" },
      { label: "Drinks", href: "/menu#drinks" },
    ],
  },
  {
    title: "Visit Foodie",
    links: [
      { label: "Reservations", href: "/contact#reservation" },
      { label: "Location", href: "/contact#location" },
      { label: "Opening Hours", href: "/contact#hours" },
      { label: "Private Dining", href: "/contact" },
      { label: "Group Bookings", href: "/contact", badge: "New" },
    ],
  },
  {
    title: "About Foodie",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Kitchen", href: "/about#kitchen" },
      { label: "Sourcing", href: "/about#sourcing" },
      { label: "Our Values", href: "/about#values" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Allergens", href: "/contact#faq" },
      { label: "Dietary Requests", href: "/contact#faq" },
      { label: "FAQs", href: "/contact#faq" },
      { label: "Accessibility", href: "/contact" },
    ],
  },
  {
    title: "Follow",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/",
        external: true,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/",
        external: true,
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/",
        external: true,
      },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Press enquiries", href: "/contact" },
    ],
  },
];
