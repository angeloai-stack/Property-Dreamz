import Link from "next/link";
import { Button, Container } from "@/components/ui";

// Layout header wrapper for site navigation and branding.
// Build responsive nav links, mobile menu controls, and the agency logo here.
// Text content has been updated to English for the current design direction.
export function Navbar() {
  return (
    <header className="border-b border-brand-ink/10 bg-brand-paper">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="text-base font-semibold uppercase tracking-[0.3em] text-brand-ink">
          Property Dreamz
        </Link>

        <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-brand-ink/75 md:flex">
          <Link href="/" className="transition hover:text-brand-ink">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-brand-ink">
            About us
          </Link>
          <Link href="/contact" className="transition hover:text-brand-ink">
            Contact
          </Link>
        </div>

        <Button href="/contact" variant="premium" className="hidden md:inline-flex">
          Talk to advisor
        </Button>
      </Container>
    </header>
  );
}
