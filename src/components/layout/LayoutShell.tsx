"use client";
import { usePathname } from "@/i18n/navigation";
import { Navbar, Main, Footer, WhatsAppButton, MobileBottomNav, SideNavRail } from "@/components/layout";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare =
    pathname.startsWith("/coming-soon") || pathname.startsWith("/portal");

  return (
    <>
      {!bare && <Navbar />}
      {!bare && <SideNavRail />}
      {bare ? children : <Main>{children}</Main>}
      {!bare && <Footer />}
      {!bare && <WhatsAppButton />}
      {!bare && <MobileBottomNav />}
    </>
  );
}
