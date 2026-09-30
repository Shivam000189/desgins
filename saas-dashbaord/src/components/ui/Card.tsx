import React, { type ElementType, type ReactNode } from "react";

export type CardVariant = "default" | "highlight" | "soft" | "ghost";

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: CardVariant;
  as?: ElementType;
  className?: string;
  noPadding?: boolean;
}

export function Card({
  children,
  variant = "default",
  as: Component = "section",
  className = "",
  noPadding = false,
  ...props
}: CardProps) {
  const variantStyles: Record<CardVariant, string> = {
    default:
      "bg-white border border-[var(--color-border-light)] text-[var(--color-text-primary)] shadow-[0_1px_3px_rgba(23,26,22,0.03)]",
    highlight:
      "bg-[var(--color-primary-dark)] text-white border border-transparent shadow-[0_8px_24px_rgba(40,54,34,0.18)]",
    soft: "bg-[var(--color-background-soft)] border border-[var(--color-border-light)] text-[var(--color-text-primary)]",
    ghost: "bg-transparent border border-transparent text-[var(--color-text-primary)]",
  };

  const paddingStyle = noPadding ? "" : "p-4 sm:p-5 lg:p-6";

  return (
    <Component
      className={`rounded-2xl flex flex-col justify-between min-w-0 transition-colors ${variantStyles[variant]} ${paddingStyle} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface CardHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  badge?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function CardHeader({
  title,
  subtitle,
  badge,
  icon,
  action,
  className = "",
}: CardHeaderProps) {
  return (
    <div
      className={`flex items-start sm:items-center justify-between gap-3 mb-4 sm:mb-5 ${className}`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        {icon && <div className="shrink-0">{icon}</div>}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-[15px] sm:text-base font-semibold tracking-[-0.01em] text-inherit truncate">
              {title}
            </h2>
            {badge && <div className="shrink-0">{badge}</div>}
          </div>
          {subtitle && (
            <p className="text-[12px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {action && <div className="shrink-0 flex items-center gap-2">{action}</div>}
    </div>
  );
}
