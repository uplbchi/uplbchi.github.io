"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(false);
      }, 1200);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000"
      style={{
        opacity: visible ? 1 : 0,
        background: `
          radial-gradient(
            3000px circle at ${position.x}px ${position.y}px,
            var(--cursor-glow),
            transparent 30%
          )
        `,
      }}
    />
  );
}