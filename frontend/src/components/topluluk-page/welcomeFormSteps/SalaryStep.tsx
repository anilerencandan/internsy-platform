"use client";

import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectActionStepProps {
  onSelectInterview: () => void;
  onSelectSalary: () => void;
  onSelectReview: () => void;
  onSelectNoIntern: () => void;
}

export default function SelectActionStep({
  onSelectInterview,
  onSelectSalary,
  onSelectReview,
  onSelectNoIntern,
}: SelectActionStepProps) {
  return (
    <div className="gap-3 flex flex-col items-center pt-4 text-sm">
      <div className="grid gap-3 w-full max-w-md">
        <Button
          className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          onClick={onSelectInterview}
        >
          Mülakat Paylaş
        </Button>
        <Button
          className="flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          onClick={onSelectSalary}
        >
          Maaş Bilgisi Paylaş
        </Button>
        <Button
          className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
          onClick={onSelectReview}
        >
          Şirket Görüşü Paylaş
        </Button>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2 italic">
        veya premium ayrıcalıklarla devam et
      </p>
      <div className="w-full max-w-md bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-md p-6 border border-yellow-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-yellow-200 rounded-full">
            <Star className="h-6 w-6 text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Premium Üyelik
          </h3>
        </div>
        <p className="text-gray-700 mb-4">
          Daha fazlasını keşfet! Premium üyelik ile topluluğun sunduğu
          özel ayrıcalıklardan faydalan:
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <ArrowRight className="h-5 w-5 text-yellow-600" />
            <span className="text-gray-800">
              Tüm şirket yorumlarına sınırsız erişim
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ArrowRight className="h-5 w-5 text-yellow-600" />
            <span className="text-gray-800">
              Ayrıntılı şirket mülakatlarına erişim
            </span>
          </div>
        </div>
        <Button
          onClick={() => (window.location.href = "/premium")}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
        >
          Premium Edinin
        </Button>
        <p className="text-sm text-center text-gray-600 mt-3">
          Sadece 30₺ / ay
        </p>
      </div>
      <div className="mt-2 w-full max-w-sm mx-auto bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center text-center">
        <span className="text-base font-medium text-gray-800 mb-2">
          Hiç staj yapmadın mı?
        </span>
        <Button
          onClick={onSelectNoIntern}
          className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 px-5 py-2 rounded-lg shadow-md transition font-semibold"
        >
          Hiç Staj Yapmadım
        </Button>
      </div>
    </div>
  );
}
