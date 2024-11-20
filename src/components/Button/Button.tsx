import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gradient";
  size?: "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseStyles = "rounded-md border-none pointer";

  const variants = {
    primary: "bg-blue-600 color-light",
    secondary: "bg-gray-600 color-light",
    gradient: "bg-gradient-135deg color-light",
  };

  const sizes = {
    medium: "px-4 py-2",
    large: "px-16 py-4",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
