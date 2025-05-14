
import React from "react";
import { cn } from "@/lib/utils";

type ButterflyIconProps = {
  className?: string;
  style?: React.CSSProperties;
  variant?: "simple" | "detailed";
};

const ButterflyIcon = ({ className, style, variant = "simple" }: ButterflyIconProps) => {
  if (variant === "detailed") {
    // Detailed butterfly outline
    return (
      <svg
        className={className}
        style={style}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M400 550C400 550 350 470 150 470C150 470 270 430 350 300C350 300 270 170 150 130C150 130 350 130 400 50C400 50 450 130 650 130C650 130 530 170 450 300C450 300 530 430 650 470C650 470 450 470 400 550Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M400 80C400 80 420 130 450 160M400 80C400 80 380 130 350 160M400 550C400 550 420 500 450 440M400 550C400 550 380 500 350 440"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M370 300C370 330 383.4 350 400 350C416.6 350 430 330 430 300C430 270 416.6 250 400 250C383.4 250 370 270 370 300Z"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
        />
      </svg>
    );
  }

  // Simple butterfly outline (current design)
  return (
    <svg
      className={cn(className)}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C12 22 10 18 2 18C2 18 8 16 10 12C10 12 8 8 2 6C2 6 10 6 12 2C12 2 14 6 22 6C22 6 16 8 14 12C14 12 16 16 22 18C22 18 14 18 12 22Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ButterflyIcon;
