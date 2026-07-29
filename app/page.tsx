import Image from "next/image";
import styles from "./page.module.css";

const features = [
  { icon: 5, accent: false },
  { icon: 6, accent: true },
  { icon: 7, accent: false },
  { icon: 8, accent: false },
];

const products = [
  { image: 12, title: "Breakfast Food" },
  { image: 13, title: "Health Breakfast" },
  { image: 14, title: "Breakfast Food" },
  { image: 15, title: "Breakfast Food" },
  { image: 16, title: "Breakfast Food" },
  { image: 17, title: "Breakfast Food" },
];

const footerColumns = [
  {
    title: "Product & Service",
    links: [
      ["Products"],
      ["Services"],
      ["Appliances"],
      ["Storage", "New"],
      ["Lifestyle", "↗"],
    ],
  },
  {
    title: "Shop Now",
    links: [
      ["Offers"],
      ["Promos"],
      ["Online Shop FAQ"],
      ["Business Offer", "New"],
      ["Student Offer", "↗"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Contact"],
      ["Email Support", "↗"],
      ["Live Chat", "↗"],
      ["Phone Support"],
      ["Community", "↗"],
    ],
  },
  {
    title: "Account",
    links: [
      ["My Products"],
      ["Orders"],
      ["Wishlist"],
      ["Service", "New"],
      ["Rewards", "↗"],
    ],
  },
  {
    title: "About",
    links: [
      ["Company Info"],
      ["Brand Guidelines"],
      ["Careers"],
      ["Investors", "New", "↗"],
      ["About Us", "↗"],
    ],
  },
];

function Brand() {
  return (
    <a className={styles.brand} href="#home" aria-label="Foodie home">
      <span className={styles.brandMark}>
        <svg viewBox="0 0 44 44" aria-hidden="true">
          <path
            d="M11 20.5h22c-.5-6.2-5.1-10.6-11-10.6s-10.5 4.4-11 10.6Zm-2 3h26"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.4"
          />
          <path
            d="M15.5 30.5c1.7 2 3.8 3 6.5 3 2.8 0 5-1 6.6-3"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2.4"
          />
          <circle cx="22" cy="8" r="1.7" fill="currentColor" />
        </svg>
      </span>
      <span className={styles.brandName}>Foodie</span>
    </a>
  );
}

function DeliveryIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M45.7 8.9C33 9.8 24.8 17.2 20.6 27l9.3 9.3c9.8-4.2 17.2-12.4 18.1-25.1.1-1.4-1-2.4-2.3-2.3Z"
        fill="currentColor"
      />
      <circle cx="37.6" cy="19.4" r="4" fill="white" />
      <path
        d="m19.8 31.2-7.2 1.2-4.4 4.4 10.1 1.1 1.5-6.7Zm4.8 4.8-1.2 7.2-4.4 4.4-1.1-10.1 6.7-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M32 7c-10.1 0-18.3 8.1-18.3 18.2C13.7 39 32 55 32 55s18.3-16 18.3-29.8C50.3 15.1 42.1 7 32 7Zm0 25.3a7.1 7.1 0 1 1 0-14.2 7.1 7.1 0 0 1 0 14.2Z"
        fill="currentColor"
      />
      <ellipse cx="32" cy="55" rx="24" ry="5" fill="currentColor" />
    </svg>
  );
}

function ScooterIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="17" cy="48" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="48" cy="48" r="7" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M15 40h19l8-13h8M27 40l-2-18h-7M31 18h7l5 8M12 25h12v11H12z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <circle cx="29" cy="12" r="5" fill="currentColor" />
    </svg>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <Brand />
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        <a className={styles.activeNav} href="#home">
          Home
        </a>
        <a href="#menu">Our Menu</a>
        <a href="#foods">Foods</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact us</a>
      </nav>
      <a className={styles.loginButton} href="#contact">
        Login
      </a>
      <details className={styles.mobileMenu}>
        <summary aria-label="Open navigation menu">
          <span />
          <span />
          <span />
        </summary>
        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Our Menu</a>
          <a href="#foods">Foods</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </nav>
      </details>
    </header>
  );
}

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroCopy}>
        <h1>
          Desire <span>Food</span>
          <br />
          for Your Taste
        </h1>
        <p>
          Food is what we eat to stay alive and healthy. It comes in many different
          forms and flavors, from fruits and vegetables to meats and grains.
        </p>
        <a className={styles.primaryButton} href="#menu">
          Order Now
        </a>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.heroOrange} />
        <Image
          className={styles.heroPerson}
          src="/assets/design-image-0.png"
          alt="Smiling woman holding a slice of pizza"
          fill
          priority
          sizes="(max-width: 800px) 92vw, 41vw"
        />

        <div className={`${styles.floatingCard} ${styles.deliveryCard}`}>
          <span className={styles.rocketIcon}>
            <DeliveryIcon />
          </span>
          <span>
            <strong>Delivery</strong>
            <small>in 30 mint</small>
          </span>
        </div>

        <div className={`${styles.floatingCard} ${styles.profileCard}`}>
          <span className={styles.avatar}>
            <Image
              src="/assets/design-image-2.png"
              alt=""
              fill
              sizes="(min-width: 1441px) 4.1vw, 59px"
            />
          </span>
          <span>
            <strong>Ali Ahmad</strong>
            <small>
              <b>★</b> 4.5 <i>♥</i> 1k Likes
            </small>
          </span>
        </div>

        <div className={`${styles.floatingCard} ${styles.locationCard}`}>
          <span className={styles.locationIcon}>
            <LocationIcon />
          </span>
          <span>
            <strong>Location</strong>
            <small>at destination</small>
          </span>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className={styles.features} aria-label="Foodie benefits">
      {features.map((feature) => (
        <article className={styles.featureCard} key={feature.icon}>
          <Image
            src={`/assets/design-image-${feature.icon}.png`}
            alt=""
            width={100}
            height={100}
          />
          <h2>Quality Food</h2>
          <p>
            Contrary to popular belief,
            <br />
            Lorem Ipsum is not simply
            <br />
            random text
          </p>
          <a className={feature.accent ? styles.accentLink : ""} href="#foods">
            Learn More
          </a>
        </article>
      ))}
    </section>
  );
}

function ChoiceCard({
  icon,
  title,
  children,
}: {
  icon: "scooter" | number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className={styles.choiceCard}>
      <span className={styles.choiceIcon}>
        {icon === "scooter" ? (
          <ScooterIcon />
        ) : (
          <Image
            src={`/assets/design-image-${icon}.png`}
            alt=""
            width={54}
            height={54}
          />
        )}
      </span>
      <span>
        <h3>{title}</h3>
        <p>{children}</p>
      </span>
    </article>
  );
}

function WhyChooseUs() {
  return (
    <section className={styles.whySection} id="about">
      <div className={styles.whyImage}>
        <Image
          src="/assets/design-image-9.png"
          alt="Grilled chicken with a fresh garden salad"
          fill
          sizes="(max-width: 800px) 100vw, 40.2vw"
        />
      </div>
      <div className={styles.whyCopy}>
        <h2>Why People Choose us?</h2>
        <div className={styles.choiceList}>
          <ChoiceCard icon="scooter" title="Convenient and Reliable">
            Whether you dine in, take out, or order delivery, our service is
            convenient, fast, and reliable, making mealtime hassle-free.
          </ChoiceCard>
          <ChoiceCard icon={10} title="Variety of Options">
            From hearty meals to light snacks, we offer a wide range of options to
            suit every taste and craving.
          </ChoiceCard>
          <ChoiceCard icon={11} title="Eat Burger">
            Our burgers are grilled to perfection, with juicy patties and flavorful
            toppings that make every bite a delicious experience.
          </ChoiceCard>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  image,
  title,
}: {
  image: number;
  title: string;
}) {
  return (
    <article className={styles.productCard}>
      <div className={styles.productImage}>
        <Image
          src={`/assets/design-image-${image}.png`}
          alt={title}
          fill
          sizes="(max-width: 700px) 92vw, (max-width: 1000px) 45vw, 29vw"
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productTop}>
          <h3>
            {title === "Health Breakfast" ? (
              <>
                Health
                <br />
                Breakfast
              </>
            ) : (
              title
            )}
          </h3>
          <a href="#contact">Buy Now</a>
        </div>
        <div className={styles.productBottom}>
          <span aria-label="5 out of 5 stars">★★★★★</span>
          <strong>$230</strong>
        </div>
      </div>
    </article>
  );
}

function BestSellers() {
  return (
    <section className={styles.sellers} id="foods">
      <div className={styles.sectionHeading}>
        <h2>Our best Seller Dishes</h2>
        <span aria-hidden="true" />
        <p>
          Our fresh garden salad is a light and refreshing option. It features a
          mix of
          <br />
          crisp lettuce, juicy tomatoe all tossed in your choice of dressing.
        </p>
      </div>
      <div className={styles.productGrid} id="menu">
        {products.map((product, index) => (
          <ProductCard
            image={product.image}
            title={product.title}
            key={`${product.image}-${index}`}
          />
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonialCopy}>
        <h2>
          Customer <span>Feedback</span>
        </h2>
        <p>
          I recently dined at your restaurant and wanted to share my experience. The
          food was absolutely delicious, and I was impressed by the freshness of the
          ingredients. Each dish was bursting with flavor, and the portion sizes were
          perfect. The service was quick and efficient, and the staff was incredibly
          friendly and welcoming.
        </p>
        <div className={styles.reviewer}>
          <span className={styles.reviewerImage}>
            <Image
              src="/assets/design-image-18.png"
              alt="Tayyab Sohail"
              fill
              sizes="(min-width: 1441px) 5.3vw, 76px"
            />
          </span>
          <span>
            <strong>Tayyab Sohail</strong>
            <small>UX/UI Designer</small>
          </span>
        </div>
        <div className={styles.dots} aria-label="Testimonial 2 of 3">
          <button aria-label="Show first testimonial" />
          <button className={styles.activeDot} aria-label="Current testimonial" />
          <button aria-label="Show third testimonial" />
        </div>
      </div>
      <div className={styles.chefImage}>
        <Image
          src="/assets/design-image-19.png"
          alt="Chef giving an okay hand sign"
          fill
          sizes="(max-width: 800px) 90vw, 41vw"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.newsletter}>
        <div>
          <h2>
            Join Our <span>Newsletter</span>
          </h2>
          <p>
            Be the first to know about our latest updates, exclusive offers, and
            more.
          </p>
        </div>
        <form>
          <label className={styles.srOnly} htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className={styles.footerLinks}>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a href="#" key={link.join("-")}>
                {link[0]}
                {link.includes("New") && <span>New</span>}
                {link.includes("↗") && <b>↗</b>}
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

export default function HomePage() {
  return (
    <div className={styles.pageShell}>
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <WhyChooseUs />
        <BestSellers />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
