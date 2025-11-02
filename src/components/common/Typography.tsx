interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle" | "body";
  className?: string;
  children?: React.ReactNode;
}

export default function Typography({ variant, className, children }: TypographyProps) {
  if (variant === "h1")
    return <h1 className={`h1 ${className}`}>{children ?? "Welcome to Our Store"}</h1>;
  if (variant === "h2")
    return <h2 className={`h2 ${className}`}>{children ?? "Welcome to Our Store"}</h2>;
  if (variant === "h3")
    return <h3 className={`h3 ${className}`}>{children ?? "Welcome to Our Store"}</h3>;
  if (variant === "h4")
    return <h4 className={`h4 ${className}`}>{children ?? "Welcome to Our Store"}</h4>;
  if (variant === "h5")
    return <h5 className={`h5 ${className}`}>{children ?? "Welcome to Our Store"}</h5>;
  if (variant === "h6")
    return <h6 className={`h6 ${className}`}>{children ?? "Welcome to Our Store"}</h6>;
  if (variant === "overline")
    return <div className={`overline ${className}`}>{children ?? "OVERLINE"}</div>;
  if (variant === "subtitle")
    return <div className={`subtitle ${className}`}>{children ?? "SUBTITLE"}</div>;
  return <p className={`body-text ${className}`}>{children ?? "Welcome to Our Store"}</p>;
}