// src/components/welcome/steps/InterviewStep.tsx

"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

interface InterviewStepProps {
  companies: { id: string; name: string }[];
  companySearch: string;
  selectedCompanyName: string;
  selectedCompanyId: string;
  isCompanyDropdownOpen: boolean;
  setCompanySearch: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCompanyName: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCompanyId: React.Dispatch<React.SetStateAction<string>>;
  setIsCompanyDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  interviewForm: any;
  questionFields: any[];
  appendQuestion: () => void;
  removeQuestion: (index: number) => void;
  showAnswerIdx: number[];
  handleToggleAnswer: (idx: number) => void;
  goBack: () => void;
  closeModal: () => void;
}

export default function InterviewStep({
  companies,
  companySearch,
  selectedCompanyName,
  selectedCompanyId,
  isCompanyDropdownOpen,
  setCompanySearch,
  setSelectedCompanyName,
  setSelectedCompanyId,
  setIsCompanyDropdownOpen,
  interviewForm,
  questionFields,
  appendQuestion,
  removeQuestion,
  showAnswerIdx,
  handleToggleAnswer,
  goBack,
  closeModal,
}: InterviewStepProps) {
  const { register, handleSubmit } = interviewForm;

  return (
    <form
      onSubmit={handleSubmit(async (values: any) => {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (!session) {
          alert("Giriş yapmadınız!");
          return;
        }

        if (!selectedCompanyId) {
          alert("Lütfen bir şirket seçin.");
          return;
        }

        const payload = {
          user_id: session.user.id,
          company_id: selectedCompanyId,
          position: values.position,
          experience: values.experience,
          difficulty: values.difficulty,
          offer: values.offer,
          details: values.details,
          questions: values.questions || [],
          is_visible: true,
        };

        const { data, error } = await supabase.from("interviews").insert([payload]);
        if (error) {
          console.error("Mülakat gönderilemedi:", error);
          alert("Gönderim sırasında hata oluştu.");
        } else {
          closeModal();
        }
      })}
      className="space-y-6 pt-4"
    >
      {/* Şirket Seçimi */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Şirket
          </label>
          <div className="relative">
            <input type="hidden" {...register("company_id")} value={selectedCompanyId} />

            <input
              type="text"
              placeholder="Bir şirket seçin..."
              value={companySearch || selectedCompanyName}
              onChange={(e) => {
                setCompanySearch(e.target.value);
                setIsCompanyDropdownOpen(true);
              }}
              onFocus={() => setIsCompanyDropdownOpen(true)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {isCompanyDropdownOpen && (
              <div className="absolute z-20 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1">
                {companies
                  .filter((c) =>
                    c.name.toLowerCase().includes(companySearch.toLowerCase())
                  )
                  .map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className="w-full text-left px-4 py-2 hover:bg-blue-50"
                      onClick={() => {
                        setSelectedCompanyName(c.name);
                        setSelectedCompanyId(c.id);
                        setCompanySearch(c.name);
                        setIsCompanyDropdownOpen(false);
                      }}
                    >
                      {c.name}
                    </button>
                  ))}
                {companies.filter((c) =>
                  c.name.toLowerCase().includes(companySearch.toLowerCase())
                ).length === 0 && (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    Şirket bulunamadı
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Pozisyon */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pozisyon
          </label>
          <input
            type="text"
            {...register("position", { required: true })}
            placeholder="Örn: Yazılım Mühendisi"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Deneyim, Zorluk, Teklif, Detaylar ve Sorular alanları buraya eklenir */}
      {/* ... */}

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={goBack}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-white border border-gray-300 hover:border-blue-600 hover:bg-blue-600 font-medium px-3 py-1.5 rounded-md transition-colors duration-200"
        >
          ← Geri
        </button>
        <Button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Gönder
        </Button>
      </div>
    </form>
  );
}
