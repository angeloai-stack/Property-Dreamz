import { MessageCircle } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

// Floating WhatsApp action button for direct chat support.
// Keep this fixed to the bottom-right corner across pages.
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5210000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-brand-pine p-4 text-brand-paper shadow-[0_6px_12px_rgba(2,65,57,0.14)] transition hover:bg-brand-emerald"
    >
      <Icon as={MessageCircle} size={20} />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
