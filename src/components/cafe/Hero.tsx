import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { images } from "@/config/images";
import { messages } from "@/config/messages";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center">
      <img
        src={images.hero}
        alt="Cafe interior"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="cafe-hero-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center cafe-fade-up">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground/80">
          {messages.welcome}
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {text.heroTitle}
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/90 sm:text-xl">{text.heroSubtitle}</p>
        <p className="mt-2 text-sm text-primary-foreground/70">{messages.cta}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={buttons.visitNow.link}
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-cafe-brown-light hover:shadow-lg"
          >
            {buttons.visitNow.text}
          </a>
          <a
            href={buttons.viewMenu.link}
            className="rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            {buttons.viewMenu.text}
          </a>
        </div>
      </div>
    </section>
  );
}
