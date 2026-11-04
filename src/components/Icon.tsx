// src/components/Icon.tsx
import React from "react";

type Variant = "cute-regular" | "cute-filled" | "cute-duotone";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** icon token name as used in the CSS, e.g. "search", "user_add", "zoom_in" */
  name: string;
  /** variant: maps to the CSS suffix */
  variant?: Variant;
  /** tailwind text size class (preferred) or numeric px size via style */
  sizeClass?: string;
  /** fallback inline fontSize in px (applies if sizeClass not provided) */
  fontSizePx?: number;
  /** extra classes */
  className?: string;
  /** for duotone: optional color for the ::after layer */
  duotoneAfterColor?: string;
  /** accessibility label; if provided, role="img" and aria-label set; otherwise aria-hidden */
  ariaLabel?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  variant = "cute-regular",
  sizeClass,
  fontSizePx,
  className = "",
  duotoneAfterColor,
  ariaLabel,
  ...rest
}) => {
  const cssClass = `mgc-${name}_${variant} ${className} flex flex-col `.trim();

  const style: React.CSSProperties = {};
  if (!sizeClass && fontSizePx) style.fontSize = fontSizePx;

  // If duotoneAfterColor provided, set a CSS variable on the element to be used by global CSS
  // We'll use inline style to set a custom property that a small global rule can read.
  if (duotoneAfterColor) {
    (style as React.CSSProperties & Record<"--mgc-duotone-after", string>)["--mgc-duotone-after"] =
      duotoneAfterColor;
  }

  const accessibilityProps: Pick<
    React.HTMLAttributes<HTMLElement>,
    "role" | "aria-label" | "aria-hidden"
  > = ariaLabel ? { role: "img", "aria-label": ariaLabel } : { "aria-hidden": true };

  return (
    <i
      className={cssClass + (sizeClass ? ` ${sizeClass}` : "")}
      style={style}
      {...accessibilityProps}
      {...rest}
    />
  );
};

export default Icon;
