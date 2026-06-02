import { Container } from "@/components/ui";

// Footer wrapper for legal notices, contact links, and agency branding.
// Place persistent footer content here for all public pages.
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy/95 text-white/70">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Property Dreamz. Verified Mexican real estate.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#terms" className="transition hover:text-white">
            Terms
          </a>
          <a href="#privacy" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}
