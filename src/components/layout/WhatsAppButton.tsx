import { MessageCircle } from "lucide-react";

// Floating WhatsApp action button for direct chat support.
// Keep this fixed to the bottom-right corner across pages.
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5210000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-brand-green p-4 text-white shadow-[0_20px_40px_rgba(26,106,91,0.35)] transition hover:bg-brand-green/90"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
