import { Button, Container } from "@/components/ui";

// Layout header wrapper for site navigation and branding.
// Build responsive nav links, mobile menu controls, and the agency logo here.
export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-brand-navy/95 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-5">
        <a href="#" className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
          Property Dreamz
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#properties" className="transition hover:text-white">
            Properties
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <Button variant="secondary" className="hidden md:inline-flex">
          Contact Us
        </Button>
      </Container>
    </header>
  );
}
