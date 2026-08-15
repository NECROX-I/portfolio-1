import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base = variant === "primary" ? "primary-btn" : "secondary-btn";
  return (
    <a className={[base, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </a>
  );
}
