import { text } from "@/config/text";
import { images } from "@/config/images";

export function About() {
  return (
    <section id="about" className="cafe-section-padding bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl cafe-card-shadow">
          <img
            src={images.galleryAmbience}
            alt="Our cafe"
            loading="lazy"
            width={800}
            height={600}
            className="h-80 w-full object-cover md:h-full"
          />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {text.aboutHighlight}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {text.aboutTitle}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{text.aboutText}</p>
        </div>
      </div>
    </section>
  );
}
