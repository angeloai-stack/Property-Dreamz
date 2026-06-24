"use client";
// IntersectionObserver-based entrance animation wrapper — fires once when element enters the viewport.
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "center";

const hiddenClasses: Record<Direction, string> = {
  up:     "opacity-0 translate-y-8 scale-[0.97]",
  left:   "opacity-0 -translate-x-16",
  right:  "opacity-0 translate-x-16",
  center: "opacity-0 scale-[0.93]",
};

const visibleClasses: Record<Direction, string> = {
  up:     "opacity-100 translate-y-0 scale-100",
  left:   "opacity-100 translate-x-0",
  right:  "opacity-100 translate-x-0",
  center: "opacity-100 scale-100",
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  duration = 700,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] ease-out",
        visible ? visibleClasses[direction] : hiddenClasses[direction],
        className
      )}
      style={{ transitionDuration: `${duration}ms`, ...(delay ? { transitionDelay: `${delay}ms` } : {}) }}
    >
      {children}
    </div>
  );
}
