import React from "react";
import { cn } from "@/lib/utils";
import fibro2 from "../media/img/fibro2.jpg";

type ButterflyIconProps = {
  className?: string;
  style?: React.CSSProperties;
  variant?: "simple" | "detailed";
};

const ButterflyIcon = ({ className, style, variant = "simple" }: ButterflyIconProps) => {
  return (
    <img 
      src={variant === "detailed" 
        ? fibro2 
        : fibro2}
      className={cn("inline-block", className)}
      style={style}
      alt="Butterfly icon"
    />
  );
};

export default ButterflyIcon;