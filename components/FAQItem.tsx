"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="brutal-border brutal-shadow bg-white overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold hover:bg-[#FFFBF0] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className="flex-shrink-0 brutal-border w-8 h-8 flex items-center justify-center bg-[#FFE234]">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-700 leading-relaxed border-t-[3px] border-black pt-4">
          {a}
        </div>
      )}
    </div>
  );
}
