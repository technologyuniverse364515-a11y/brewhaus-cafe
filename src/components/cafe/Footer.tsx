import { text } from "@/config/text";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-8 text-center">
      <p className="font-serif text-lg font-bold text-foreground">{text.cafeName}</p>
      <p className="mt-2 text-xs text-muted-foreground">{text.footerText}</p>
    </footer>
  );
}
