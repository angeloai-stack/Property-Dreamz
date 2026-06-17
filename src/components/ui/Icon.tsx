import React from "react";

type IconProps = {
  as: React.ElementType;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
  color?: string;
  title?: string;
};

// Icon wrapper to normalize stroke, size and color across the app.
// Defaults: size 24, strokeWidth 1.7, color var(--color-brand-pine).
export function Icon({ as: Component, size = 24, strokeWidth = 1.7, className = "", color = "var(--color-brand-pine)", title, ...rest }: IconProps) {
  return (
    <Component
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      aria-hidden={title ? undefined : true}
      {...(title ? { title } : {})}
      {...rest}
    />
  );
}

export default Icon;
