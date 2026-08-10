import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover",

    secondary:
      "border border-border bg-background text-foreground hover:bg-surface",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-6 py-3 text-base",

    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        font-medium
        transition-all
        duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
