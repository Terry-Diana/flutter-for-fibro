
import React from "react";
import { cn } from "@/lib/utils";

type SparkleIconProps = {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
};

const SparkleIcon = ({ className, style, size = "md" }: SparkleIconProps) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4", 
    lg: "w-6 h-6"
  };

  return (
    <svg
      className={cn(sizeClasses[size], className)}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3L13.09 8.26L18 9L13.09 9.74L12 15L10.91 9.74L6 9L10.91 8.26L12 3Z"
        fill="currentColor"
      />
      <path
        d="M19 12L19.74 14.26L22 15L19.74 15.74L19 18L18.26 15.74L16 15L18.26 14.26L19 12Z"
        fill="currentColor"
      />
      <path
        d="M5 6L5.5 7.5L7 8L5.5 8.5L5 10L4.5 8.5L3 8L4.5 7.5L5 6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SparkleIcon;
