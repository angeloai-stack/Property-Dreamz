// Main content wrapper that expands to fill available vertical space.
// Use this component to wrap page sections and landing content.
export function Main({ children }: { children: React.ReactNode }) {
  return <main className="w-full flex-1">{children}</main>;
}
