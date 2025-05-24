
import React from "react";

type FloatingWordsProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const FloatingWords = ({ className, style, children }: FloatingWordsProps) => {
  return (
    <div
      className={`absolute text-white/50 font-medium select-none ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FloatingWords;
