"use client";

import React, { useEffect, useState } from "react";

interface IncreaseButtonProps {
  initial: number;
  min?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export default function IncreaseButton({
  initial = 1,
  min = 1,
  onChange,
  className = "",
}: IncreaseButtonProps) {
  const [value, setValue] = useState<number>(initial);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  const decrease = () => {
    setValue((value) => {
      const next = Math.max(min, value - 1);
      if (next !== value && onChange) onChange(next);
      return next;
    });
  };

  const increase = () => {
    setValue((value) => {
      const next = value + 1;
      if (onChange) onChange(next);
      return next;
    });
  };

  return (
    <div
      className={`flex items-center justify-center text-[13px] font-bold transition-colors bg-(--hash-white) px-[15.5px] py-[15px] gap-[21px] ${className}`}
    >
      <button
        aria-label="decrease"
        onClick={decrease}
        className="text-black/25 hover:text-(--primary) cursor-pointer disabled:opacity-50"
        disabled={value <= min}
      >
        –
      </button>

      <div className="font-bold text-black min-w-9 text-center">{value}</div>

      <button
        aria-label="increase"
        onClick={increase}
        className="text-black/25 hover:text-(--primary) cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
