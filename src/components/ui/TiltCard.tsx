"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees — keep ≤ 8 for luxury contexts. Default 6. */
  intensity?: number;
};

export function TiltCard({ children, className, intensity = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 22 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
