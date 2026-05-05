import { text } from "@/config/text";
import { images } from "@/config/images";
import { messages } from "@/config/messages";

type MenuItem = { name: string; description: string; price: string };

function MenuCard({
  title,
  items,
  image,
}: {
  title: string;
  items: readonly MenuItem[];
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-card cafe-card-shadow">
      <div className="h-48 overflow-hidden sm:h-56">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-4 font-serif text-xl font-bold text-foreground">{title}</h3>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.name} className="flex items-baseline justify-between gap-2">
              <div className="min-w-0">
                <span className="text-sm font-semibold text-foreground">{item.name}</span>
                <span className="ml-2 text-xs text-muted-foreground">{item.description}</span>
              </div>
              <span className="shrink-0 text-sm font-bold text-primary">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <section id="menu" className="cafe-section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {text.menuTitle}
          </h2>
          <p className="mt-2 text-muted-foreground">{text.menuSubtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <MenuCard
            title={messages.menuCoffeeLabel}
            items={text.menuItems.coffee}
            image={images.menuCoffee}
          />
          <MenuCard
            title={messages.menuPastriesLabel}
            items={text.menuItems.pastries}
            image={images.menuPastries}
          />
          <MenuCard
            title={messages.menuSnacksLabel}
            items={text.menuItems.snacks}
            image={images.menuSnacks}
          />
        </div>
      </div>
    </section>
  );
}
