// Flex-grow wrapper that lets page content fill the space between Navbar and Footer.
export function Main({ children }: { children: React.ReactNode }) {
  return <main className="flex w-full flex-1 flex-col">{children}</main>;
}
