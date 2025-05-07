"use client";

import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const options = ["En Faydalı", "En Yeni"];

export default function SortDropdown() {
  const [selected, setSelected] = useState("En Faydalı");

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex items-center gap-x-1 font-semibold text-gray-600">
          Sırala: <strong className="ml-1">{selected}</strong>
          <ChevronDown size={16} />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          sideOffset={8}
          className="bg-white rounded-md shadow-lg border border-gray-200 p-2 text-sm z-50"
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${
                selected === option ? "font-semibold bg-gray-50" : ""
              }`}
            >
              {option}
            </button>
          ))}

          <Popover.Arrow className="fill-white drop-shadow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}