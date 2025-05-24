
import React from "react";
import { cn } from "@/lib/utils";

type GlowingParticleProps = {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
};

const GlowingParticle = ({ className, style, size = "md" }: GlowingParticleProps) => {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3", 
    lg: "w-4 h-4"
  };

  return (
    <div
      className={cn(
        "rounded-full bg-white/40 animate-float-up", 
        "shadow-[0_0_10px_rgba(255,255,255,0.3)]",
        sizeClasses[size], 
        className
      )}
      style={style}
    />
  );
};

export default GlowingParticle;
