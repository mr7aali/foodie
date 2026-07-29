import { SiteLayout } from "@/features/site";
import { InteriorHero } from "../components/interior-hero";
import { SectionHeading } from "../components/section-heading";
import { contactDetails, contactHero } from "../data/restaurant-content";
import styles from "../styles/restaurant-pages.module.css";

export function ContactPageView() {
  return (
    <SiteLayout activePath="/contact">
      <main className={styles.interiorMain}>
        <InteriorHero content={contactHero} />

        <section className={styles.contentSection}>
          <div className={styles.contactCards}>
            {contactDetails.map((detail) => {
              const content = (
                <>
                  <span>{detail.icon}</span>
                  <h3>{detail.title}</h3>
                  {detail.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </>
              );

              return detail.href ? (
                <a
                  className={styles.contactCard}
                  href={detail.href}
                  id={detail.id === "hours" ? "hours" : undefined}
                  key={detail.id}
                >
                  {content}
                </a>
              ) : (
                <article className={styles.contactCard} key={detail.id}>
                  {content}
                </article>
              );
            })}
          </div>
        </section>

        <section
          className={`${styles.contentSection} ${styles.softSection}`}
          id="reservation"
        >
          <div className={styles.reservationGrid}>
            <div className={styles.reservationIntro}>
              <p className={styles.eyebrow}>Reservations</p>
              <h2>Tell us when you would like to join us.</h2>
              <p>
                Send a table request and our team will confirm availability by
                phone or email. For groups larger than eight, please include a note
                so we can help plan your meal.
              </p>
              <p>
                Dietary requirements and celebrations are always welcome—just let
                us know before your visit.
              </p>
            </div>

            <form className={styles.reservationForm}>
              <div className={styles.field}>
                <label htmlFor="guest-name">Name</label>
                <input
                  id="guest-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="guest-email">Email</label>
                <input
                  id="guest-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="reservation-date">Date</label>
                <input id="reservation-date" name="date" type="date" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="reservation-time">Preferred time</label>
                <select id="reservation-time" name="time" defaultValue="">
                  <option value="" disabled>
                    Select a time
                  </option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="guest-count">Guests</label>
                <select id="guest-count" name="guests" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                    <option value={count} key={count}>
                      {count} {count === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="guest-phone">Phone</label>
                <input
                  id="guest-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 555 000 0000"
                />
              </div>
              <div className={`${styles.field} ${styles.fieldFull}`}>
                <label htmlFor="reservation-note">Anything we should know?</label>
                <textarea
                  id="reservation-note"
                  name="note"
                  placeholder="Allergies, accessibility needs or a special occasion"
                />
              </div>
              <button className={styles.submitButton} type="submit">
                Request a table
              </button>
              <p className={styles.formNote}>
                This form sends a reservation request, not an instant booking.
                Please wait for confirmation from our team.
              </p>
            </form>
          </div>
        </section>

        <section className={styles.contentSection} id="location">
          <div className={styles.reservationGrid}>
            <div>
              <SectionHeading
                eyebrow="Location"
                title="Easy to find. Lovely to stay."
                description="Foodie is in the heart of the Food District, a short walk from Central Station. Street parking and a public garage are available nearby."
              />
              <div className={styles.locationPin}>
                <strong>Foodie Restaurant</strong>
                <p>24 Garden Avenue</p>
                <p>Downtown, Food District</p>
              </div>
            </div>
            <div className={styles.locationPanel} aria-label="Location map">
              <div className={styles.locationPin}>
                <strong>⌖ You have found us</strong>
                <p>Entrance on Garden Avenue, beside the public square.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.contentSection} ${styles.softSection}`}
          id="faq"
        >
          <SectionHeading
            eyebrow="Before you visit"
            title="Frequently asked questions"
            centered
          />
          <div className={styles.faqList}>
            <details>
              <summary>Can you accommodate allergies?</summary>
              <p>
                Yes. Tell us when booking and again on arrival. Our kitchen handles
                common allergens, so we will explain what can be prepared safely.
              </p>
            </details>
            <details>
              <summary>Do you have vegetarian and vegan options?</summary>
              <p>
                We always offer several vegetarian dishes and clearly mark vegan
                choices. Many plates can also be adapted by request.
              </p>
            </details>
            <details>
              <summary>Can I bring children?</summary>
              <p>
                Absolutely. Families are welcome, highchairs are available and the
                team can recommend smaller portions for younger guests.
              </p>
            </details>
            <details>
              <summary>Do you accept walk-ins?</summary>
              <p>
                Yes, when space allows. Reservations are recommended for Friday
                evenings, weekends and groups.
              </p>
            </details>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
