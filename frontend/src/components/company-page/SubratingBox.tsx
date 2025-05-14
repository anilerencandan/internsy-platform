"use client";

import * as Popover from "@radix-ui/react-popover";
import { ChevronDown, Star } from "lucide-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const ratingImport = () =>
  import("react-rating") as Promise<{ default: ComponentType<Record<string, unknown>> }>;

const Rating = dynamic(ratingImport, { ssr: false });
const ratings = [
  { label: "İş Ortamı", value: 4 },
  { label: "Yönetici Davranışı", value: 3 },
  { label: "Gelişme İmkanı", value: 3 },
  { label: "Çalışma Koşulları", value: 4 },
];

export default function SubratingBox() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <div
          tabIndex={0}
          onMouseEnter={() => !isMobile && setOpen(true)}
          onMouseLeave={() => !isMobile && setOpen(false)}
          onClick={() => isMobile && setOpen((prev) => !prev)}
          className="ml-1 cursor-pointer outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0"
        >
          <ChevronDown size={16} />
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          className="z-50 w-80 max-w-[90vw] bg-white border border-gray-200 rounded-xl shadow-lg p-5"
        >
          <h4 className="text-base font-semibold mb-3 text-gray-800">
            Detaylı Puanlama
          </h4>
          <div className="flex flex-col gap-y-3 text-sm">
            {ratings.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between whitespace-nowrap"
              >
                <span className="text-gray-700 font-medium">
                  {item.label}:
                </span>
                <Rating
                  readonly
                  initialRating={item.value}
                  emptySymbol={<Star size={16} stroke="gray" />}
                  fullSymbol={<Star size={16} fill="black" stroke="black" />}
                />
              </div>
            ))}
          </div>

          <Popover.Arrow className="fill-white drop-shadow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}