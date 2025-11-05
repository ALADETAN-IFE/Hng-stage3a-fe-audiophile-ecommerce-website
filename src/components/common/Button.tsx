import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'icon' | 'goBack';
  size?: 'default';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className = "", variant = "default", size = "default", asChild, ...props }, ref ) => {
    const baseClasses =
      "flex items-center justify-center uppercase cursor-pointer text-[13px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      default: "primary-button hover:brightness-95",
      secondary: "secondary-button hover:brightness-95",
      outline: "tertiary-button",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      icon: "",
      goBack: "bg-transparent border-none p-0! text-black hover:brightness-95 font-normal! text-[15px]! leading-[25px]! text-black/50 tracking-[0px]! capitalize!",
    };

    const sizeClasses = {
      default: "px-[31px] py-[15px]",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const { children, ...rest } = props as ButtonProps & {
      children?: React.ReactNode;
    };

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<Record<string, unknown>>;
      const childClassName =
        (child.props && (child.props as { className?: string }).className) ||
        "";

      const cloneProps: Record<string, unknown> = {
        className: `${variant === 'icon' ?  '' : classes} ${childClassName}`.trim(),
        ...rest,
      };

      if (typeof child.type === "string") {
        (cloneProps as unknown as { ref?: React.Ref<HTMLButtonElement> }).ref =
          ref;
      }

      const cloned = React.cloneElement(child, cloneProps);
      return cloned;
    }

    return <button className={classes} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
