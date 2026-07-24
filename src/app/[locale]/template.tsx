"use client";
// Wraps every page with a fade-up entry animation on each navigation.
import { motion } from "framer-motion";

// Re-mounts on every navigation (unlike layout.tsx which persists).
// This is the correct Next.js App Router hook point for page enter animations.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
