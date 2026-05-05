import { text } from "@/config/text";
import { images } from "@/config/images";
import { messages } from "@/config/messages";

const galleryItems = [
  { src: images.galleryAmbience, alt: messages.galleryAlt.ambience },
  { src: images.galleryDessert, alt: messages.galleryAlt.dessert },
  { src: images.galleryBarista, alt: messages.galleryAlt.barista },
  { src: images.galleryOutdoor, alt: messages.galleryAlt.outdoor },
  { src: images.galleryFood, alt: messages.galleryAlt.food },
  { src: images.galleryBeans, alt: messages.galleryAlt.beans },
];

export function Gallery() {
  return (
    <section id="gallery" className="cafe-section-padding bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {text.galleryTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">{text.gallerySubtitle}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.alt}
              className="cafe-gallery-hover overflow-hidden rounded-xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={800}
                height={600}
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
