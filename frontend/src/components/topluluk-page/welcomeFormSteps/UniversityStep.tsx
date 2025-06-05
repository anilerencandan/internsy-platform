"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface UniversityStepProps {
  universities: { id: string; name: string }[];
  universitySearch: string;
  selectedUniversityName: string;
  selectedUniversityId: string;
  isDropdownOpen: boolean;
  setUniversitySearch: (val: string) => void;
  setSelectedUniversityName: (val: string) => void;
  setSelectedUniversityId: (val: string) => void;
  setIsDropdownOpen: (val: boolean) => void;
  onSubmit: () => void;
}

export default function UniversityStep({
  universities,
  universitySearch,
  selectedUniversityName,
  selectedUniversityId,
  isDropdownOpen,
  setUniversitySearch,
  setSelectedUniversityName,
  setSelectedUniversityId,
  setIsDropdownOpen,
  onSubmit,
}: UniversityStepProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="w-full space-y-4 pt-2">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        Üniversiten
      </h2>
      <p className="text-sm text-gray-500 mb-2">
        Üniversiteni seçerek sana özel içeriklere ulaş.
      </p>

      {/* Hidden input: university_id */}
      <input type="hidden" name="university_id" value={selectedUniversityId} />

      <div className="relative">
        <input
          type="text"
          placeholder="Bir üniversite seçin..."
          value={universitySearch || selectedUniversityName}
          onChange={(e) => {
            setUniversitySearch(e.target.value);
            setIsDropdownOpen(true);
          }}
          onFocus={() => setIsDropdownOpen(true)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />

        {isDropdownOpen && (
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
            {universities
              .filter((u) =>
                u.name.toLowerCase().includes(universitySearch.toLowerCase())
              )
              .map((u) => (
                <button
                  key={u.id}
                  type="button"
                  className="w-full text-left px-4 py-3 hover:bg-blue-50 transition text-sm"
                  onClick={() => {
                    setSelectedUniversityName(u.name);
                    setSelectedUniversityId(u.id);
                    setUniversitySearch(u.name);
                    setIsDropdownOpen(false);
                  }}
                >
                  {u.name}
                </button>
              ))}
            {universities.filter((u) =>
              u.name.toLowerCase().includes(universitySearch.toLowerCase())
            ).length === 0 && (
              <div className="px-4 py-3 text-sm text-gray-500">
                Üniversite bulunamadı
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-end pt-2">
        <Button type="submit">Devam</Button>
      </div>
    </form>
  );
}
