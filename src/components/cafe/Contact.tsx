import { text } from "@/config/text";
import { buttons } from "@/config/buttons";

export function Contact() {
  return (
    <section id="contact" className="cafe-section-padding bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {text.contactTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">{text.contactSubtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 font-serif text-lg font-bold text-foreground">Address</h3>
              <p className="text-muted-foreground">{text.address}</p>
            </div>
            <div>
              <h3 className="mb-2 font-serif text-lg font-bold text-foreground">Phone & Email</h3>
              <p className="text-muted-foreground">{text.phone}</p>
              <p className="text-muted-foreground">{text.email}</p>
            </div>
            <div>
              <h3 className="mb-3 font-serif text-lg font-bold text-foreground">Opening Hours</h3>
              <ul className="space-y-2">
                {text.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={buttons.callNow.link}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-cafe-brown-light"
              >
                {buttons.callNow.text}
              </a>
              <a
                href={buttons.getDirections.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {buttons.getDirections.text}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl cafe-card-shadow">
            <iframe
              title="Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.344!2d-73.9857!3d40.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzIxLjEiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
