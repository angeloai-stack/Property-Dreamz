import { Container } from "@/components/ui";

// Footer wrapper for legal notices, contact links, and agency branding.
// Place persistent footer content here for all public pages.
// Footer copy has been translated to English for consistency.
export function Footer() {
  return (
    <footer className="border-t border-brand-ink/10 bg-brand-paper text-brand-muted">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Property Dreamz. Editorial real estate portal.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#terms" className="transition hover:text-brand-ink">
            Terms
          </a>
          <a href="#privacy" className="transition hover:text-brand-ink">
            Privacy
          </a>
          <a href="#contact" className="transition hover:text-brand-ink">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}
