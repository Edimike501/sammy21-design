"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before (Legacy)",
  afterLabel = "After (Redesign)",
  aspectRatio = "aspect-[16/10]",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden select-none cursor-ew-resize border border-purple-200 dark:border-purple-800/60 shadow-lg`}
    >
      {/* After Image (Background full) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After Redesign"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
          priority
        />
        {/* After Tag */}
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-purple-900/80 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-purple-400/30">
          ✨ {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="relative h-full"
          style={{
            width: containerRef.current
              ? `${containerRef.current.clientWidth}px`
              : "100%",
          }}
        >
          <Image
            src={beforeImage}
            alt="Before Redesign"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover grayscale brightness-90"
            priority
          />
        </div>
        {/* Before Tag */}
        <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md text-slate-200 text-xs font-semibold tracking-wide border border-slate-700/50">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Line & Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-2xl z-20 flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 -ml-5 rounded-full bg-purple-600 text-white border-2 border-white flex items-center justify-center shadow-lg shadow-purple-900/50">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
