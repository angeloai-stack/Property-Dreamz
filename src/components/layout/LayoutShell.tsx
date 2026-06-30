"use client";
import { usePathname } from "next/navigation";
import { Navbar, Main, Footer, WhatsAppButton, MobileBottomNav } from "@/components/layout";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname.startsWith("/coming-soon");

  return (
    <>
      {!bare && <Navbar />}
      {bare ? children : <Main>{children}</Main>}
      {!bare && <Footer />}
      {!bare && <WhatsAppButton />}
      {!bare && <MobileBottomNav />}
    </>
  );
}
