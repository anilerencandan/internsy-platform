"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/utils/supabase";
import { Search } from "lucide-react";
import { Building2, Star, TrendingUp, Award, ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm, useFieldArray } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// 1. Kullanıcı Bilgileri Şeması
const userSchema = z.object({
  school: z.string().min(1, { message: "Üniversite zorunlu" }),
});
type UserFormValues = z.infer<typeof userSchema>;

// 2. Mülakat Paylaşım Şeması
const interviewSchema = z.object({
  companyName: z.string().min(1, { message: "Firma ismi zorunlu" }),
  position: z.string().min(1, { message: "Pozisyon zorunlu" }),
  experience: z.enum(["positive", "negative"], {
    errorMap: () => ({ message: "Pozitif veya negatif seçimi zorunlu" }),
  }),
  difficulty: z.enum(["easy", "medium", "hard"], {
    errorMap: () => ({ message: "Zorluk seviyesi seçilmeli" }),
  }),
  offer: z.enum(["received", "not_received"], {
    errorMap: () => ({ message: "Teklif durumu zorunlu" }),
  }),
  details: z.string().optional(),
  questions: z.array(
    z.object({
      question: z.string().min(1, { message: "Soru zorunlu" }),
      answer: z.string().optional(),
    })
  ).optional(),
});
type InterviewFormValues = z.infer<typeof interviewSchema>;

// 3. Maaş Bilgisi Şeması
const salarySchema = z.object({
  companyName: z.string().min(1, { message: "Firma ismi zorunlu" }),
  position: z.string().min(1, { message: "Pozisyon zorunlu" }),
  monthlySalary: z.number().min(1, { message: "Maaş zorunlu" }),
});
type SalaryFormValues = z.infer<typeof salarySchema>;

// 4. Şirket Görüşü Şeması
const reviewSchema = z.object({
  companyName: z.string().min(1, { message: "Firma ismi zorunlu" }),
  sentiment: z.enum(["positive", "negative"], {
    errorMap: () => ({ message: "Pozitif veya negatif seçimi zorunlu" }),
  }),
  review: z.string().min(1, { message: "Görüş yazmalısınız" }),
  workEnvironment: z.number().min(1).max(5),
  managerBehavior: z.number().min(1).max(5),
  growthOpportunity: z.number().min(1).max(5),
  workingConditions: z.number().min(1).max(5),
});
type ReviewFormValues = z.infer<typeof reviewSchema>;

export default function WelcomeFlowModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [userInfo, setUserInfo] = useState<UserFormValues | null>(null);
  const [showAnswerIdx, setShowAnswerIdx] = useState<number[]>([]);
  // Dropdown state for university selection
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [universitySearch, setUniversitySearch] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState<string>("");

  // İlk açılışta göster
  useEffect(() => {
    if (!localStorage.getItem("welcome-seen")) setOpen(true);
  }, []);

  // 1. form: kullanıcı bilgileri
  const userForm = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: { school: "" },
  });

  // 2. form: mülakat paylaşım
  const interviewForm = useForm<InterviewFormValues>({
    resolver: zodResolver(interviewSchema),
    defaultValues: { companyName: "", position: "", experience: "positive", difficulty: "medium", offer: "received", details: "", questions: [] },
  });
  const { fields, append, remove } = useFieldArray({
    control: interviewForm.control,
    name: "questions",
  });

  // 3. form: maaş bilgisi paylaşım
  const salaryForm = useForm<SalaryFormValues>({
    resolver: zodResolver(salarySchema),
    defaultValues: { companyName: "", position: "", monthlySalary: 0 },
  });

  // 4. form: şirket görüşü paylaşım
  const reviewForm = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      companyName: "",
      sentiment: "positive",
      review: "",
      workEnvironment: 3,
      managerBehavior: 3,
      growthOpportunity: 3,
      workingConditions: 3,
    },
  });


  // Üniversite listesini Supabase'den çek
  const [universities, setUniversities] = useState<string[]>([]);
  useEffect(() => {
    const fetchUniversities = async () => {
      const { data, error } = await supabase.from("universities").select("name");
      if (error) {
        console.error("Üniversite verisi alınamadı:", error);
      } else {
        setUniversities(data.map((u: { name: string }) => u.name));
      }
    };
    fetchUniversities();
  }, []);
  const experience = interviewForm.watch("experience")
  const difficulty = interviewForm.watch("difficulty")
  const offer = interviewForm.watch("offer")
  // 1. adım gönderildiğinde
  const onUserSubmit = () => {
    if (selectedUniversity) {
      setUserInfo({ school: selectedUniversity });
      setStep(2);
    } else {
      userForm.setError("school", { message: "Üniversite seçiniz" });
    }
  };

  // mülakat formu gönderildiğinde
  const onInterviewSubmit = (values: InterviewFormValues) => {
    const payload = { ...userInfo!, ...values, type: "interview" };
    console.log("Payload:", payload);
    localStorage.setItem("welcome-seen", "true");
    setOpen(false);
  };

  const handleToggleAnswer = (idx: number) => {
    setShowAnswerIdx(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  // StarRatingInput component for review step
  const StarRatingInput = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
  }) => {
    const getColor = (v: number) =>
      v <= 2 ? "text-red-500" : v === 3 ? "text-yellow-500" : "text-green-500";

    return (
      <div className="flex flex-col gap-1">
        <label className="font-medium">{label}</label>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                onClick={() => onChange(i)}
                className={`cursor-pointer text-2xl ${
                  i <= value ? getColor(value) : "text-gray-300"
                }`}
              >
                {i <= value ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className={`text-xl font-bold ${getColor(value)}`}>{value}</span>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open}>
      <DialogContent className="flex flex-col items-center max-w-[90%]  sm:max-w-[400px] rounded-lg min-h-[400px] max-h-[80%] sm:max-h-[90%] overflow-y-auto ">
        <DialogHeader >
          <DialogTitle className="text-primary font-bold ">
            {step === 1 && "Hoş geldin! Bilgilerini doldur"}
            {step === 2 && "Ne paylaşmak istersin?"}
            {step === 3 && "Mülakat Deneyimini Paylaş"}
          </DialogTitle>
        </DialogHeader>

        {/* 1. Adım */}
        {step === 1 && (
          <Form {...userForm}>
          <form onSubmit={onUserSubmit} className="w-full space-y-4 pt-2">
            <FormItem>
              <FormLabel className="text-lg font-semibold text-gray-800 mb-1">Üniversiten</FormLabel>
              <p className="text-sm text-gray-500 mb-2">Üniversiteni seçerek sana özel içeriklere ulaş.</p>
        
              <FormControl>
                <div className="relative">
                  {/* Tıklanabilir Input */}
                  <input
                    type="text"
                    placeholder="Bir üniversite seçin..."
                    value={universitySearch}
                    onChange={(e) => {
                      setUniversitySearch(e.target.value)
                      setIsDropdownOpen(true)
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
        
                  {/* Dropdown Listesi */}
                  {isDropdownOpen && (
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                      {universities
                        .filter((uni) =>
                          uni.toLowerCase().includes(universitySearch.toLowerCase())
                        )
                        .map((uni) => (
                          <button
                            key={uni}
                            type="button"
                            className="w-full text-left px-4 py-3 hover:bg-blue-50 transition text-sm"
                            onClick={() => {
                              setSelectedUniversity(uni);
                              setUniversitySearch(uni); // input'a yaz
                              setIsDropdownOpen(false);
                            }}
                          >
                            {uni}
                          </button>
                        ))}
        
                      {universities.filter((uni) =>
                        uni.toLowerCase().includes(universitySearch.toLowerCase())
                      ).length === 0 && (
                        <div className="px-4 py-3 text-sm text-gray-500">Üniversite bulunamadı</div>
                      )}
                    </div>
                  )}
                </div>
              </FormControl>
        
              <FormMessage className="mt-1 text-sm text-red-500">
                {!selectedUniversity && userForm.formState.errors.school?.message}
              </FormMessage>
            </FormItem>
        
            <div className="flex justify-end pt-2">
              <Button type="submit">Devam</Button>
            </div>
          </form>
        </Form>
        )}
        
        {/* 2. Adım */}
        {step === 2 && (
          <div className="gap-3 flex flex-col items-center pt-4 text-sm ">
            <div className="grid gap-3 w-full max-w-md">
              <Button className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg min-w-[300px]" onClick={() => setStep(3)}>
                Mülakat Paylaş
              </Button>
              <Button className="flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg min-w-[300px]" onClick={() => setStep(4)}>
                Maaş Bilgisi Paylaş
              </Button>
              <Button className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg min-w-[300px]" onClick={() => setStep(5)}>
                Şirket Görüşü Paylaş
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2 italic">veya premium ayrıcalıklarla devam et</p>
            <div className="w-full max-w-md bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-md p-6 border border-yellow-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-200 rounded-full">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Premium Üyelik</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Daha fazlasını keşfet! Premium üyelik ile topluluğun sunduğu özel ayrıcalıklardan faydalan:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-800">Tüm şirket yorumlarına sınırsız erişim</span>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-yellow-600" />
                  <span className="text-gray-800">Ayrıntılı şirket mülakatlarına erişim</span>
                </div>
              </div>
              <Button onClick={() => window.location.href = "/premium"} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg">
                Premium Edinin
              </Button>
              <p className="text-sm text-center text-gray-600 mt-3">Sadece 30₺ / ay</p>
            </div>
          <div className="mt-2 w-full max-w-sm mx-auto bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center text-center">
            <span className="text-base font-medium text-gray-800 mb-2">
              Hiç staj yapmadın mı?
            </span>
            <Button
              onClick={() => setStep(6)}
              className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 px-5 py-2 rounded-lg shadow-md transition font-semibold"
            >
              Hiç Staj Yapmadım
            </Button>
          </div>
          </div>
        )}

        {/* 3. Adım - Mülakat Formu */}
        {step === 3 && (
  <form onSubmit={interviewForm.handleSubmit(onInterviewSubmit)} className="space-y-6 pt-4">
    {/* Firma ve Pozisyon */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Firma İsmi</label>
        <input
          type="text"
          name="companyName"
          required
          placeholder="Örn: Trendyol"
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Pozisyon</label>
        <input
          type="text"
          name="position"
          required
          placeholder="Örn: Yazılım Mühendisi"
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Deneyim, Zorluk, Teklif */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Deneyim</label>
  <select
    {...interviewForm.register("experience")}
    required
    className={`w-full p-2 rounded-md bg-white border font-semibold border-gray-300 ${
      experience === "positive"
        ? "text-green-700"
        : experience === "negative"
        ? "text-red-600"
        : "text-gray-700"
    }`}
  >
    <option value="">Seçiniz</option>
    <option value="positive">Pozitif</option>
    <option value="negative">Negatif</option>
  </select>
</div>

{/* Zorluk */}
<div>
  <label className="block text-sm font-medium  text-gray-700 mb-1">Zorluk</label>
  <select
    {...interviewForm.register("difficulty")}
    required
    className={`w-full p-2 rounded-md bg-white border font-semibold border-gray-300 ${
      difficulty === "easy"
        ? "text-green-700"
        : difficulty === "medium"
        ? "text-yellow-600"
        : difficulty === "hard"
        ? "text-red-600"
        : "text-gray-700"
    }`}
  >
    <option value="">Seçiniz</option>
    <option value="easy">Kolay</option>
    <option value="medium">Orta</option>
    <option value="hard">Zor</option>
  </select>
</div>

{/* Teklif Durumu */}
<div>
  <label className="block text-sm font-medium  text-gray-700 mb-1">Teklif Durumu</label>
  <select
    {...interviewForm.register("offer")}
    required
    className={`w-full p-2 rounded-md bg-white border font-semibold border-gray-300 ${
      offer === "received"
        ? "text-green-700"
        : offer === "not_received"
        ? "text-red-600"
        : "text-gray-700"
    }`}
  >
    <option value="">Seçiniz</option>
    <option value="received">Alındı</option>
    <option value="not_received">Alınmadı</option>
  </select>
</div>
    {/* Detaylar */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Detaylar</label>
      <textarea
        name="details"
        rows={4}
        required
        placeholder="Mülakatın detaylarını yazın..."
        className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    {/* Soru Kartları */}
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <h3 className="font-semibold text-gray-800 mb-3">Mülakatta Sorulan Sorular</h3>
      {fields.map((item, idx) => (
        <div key={item.id} className="bg-white border rounded-lg p-4 mb-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-1">Soru #{idx + 1}</label>
          <input
            type="text"
            name={`questions[${idx}].question`}
            placeholder="Soruyu yazın..."
            className="w-full p-2 border border-gray-300 rounded-md mb-2"
          />

          {showAnswerIdx.includes(idx) && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cevap</label>
              <textarea
                name={`questions[${idx}].answer`}
                rows={2}
                placeholder="Cevabı yazın..."
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
          )}

          <div className="flex gap-2 mt-3">
            <button
              type="button"
              className="text-blue-600 text-sm underline"
              onClick={() => handleToggleAnswer(idx)}
            >
              Cevap Gir
            </button>
            <button
              type="button"
              className="text-red-600 text-sm underline"
              onClick={() => remove(idx)}
            >
              Sil
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="mt-2 text-sm font-medium text-blue-600 underline"
        onClick={() => append({ question: "", answer: "" })}
      >
        + Yeni Soru Ekle
      </button>
    </div>

    {/* Navigasyon */}
    <div className="flex justify-between pt-6">
      <button
        type="button"
        onClick={() => setStep(2)}
        className="text-gray-600 hover:text-black underline text-sm"
      >
        ← Geri
      </button>
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Gönder
      </button>
    </div>
  </form>
)}
        {/* 4. Adım - Maaş Bilgisi */}
        {step === 4 && (
          <form onSubmit={() => console.log("maaş gönderildi")} className="space-y-4 pt-2">
            <h2 className="text-xl font-bold">Şirket Maaş Bilgisi Paylaş</h2>
            <div>
              <label className="block font-medium">Şirket</label>
              <Input placeholder="Şirket adı" />
            </div>
            <div>
              <label className="block font-medium">Pozisyon</label>
              <Input placeholder="Pozisyon" />
            </div>
            <div>
              <label className="block font-medium">Aylık Maaş (₺)</label>
              <Input type="number" placeholder="Örn. 15.000" />
            </div>
            <div className="flex justify-between pt-4">
              <Button variant="ghost" onClick={() => setStep(2)}>Geri</Button>
              <Button type="submit">Gönder</Button>
            </div>
          </form>
        )}

        {/* 5. Adım - Şirket Görüşü */}
        {step === 5 && (
          <form onSubmit={() => console.log("şirket görüşü gönderildi")} className="space-y-4 pt-2">
            <h2 className="text-xl font-bold">Şirket Staj Deneyimi Paylaş</h2>
            <div>
              <label className="block font-medium">Şirket</label>
              <Input placeholder="Şirket adı" />
            </div>
            <div>
              <label className="block font-medium">Pozitif / Negatif</label>
              <select className="w-full p-2 border rounded">
                <option value="positive">Pozitif</option>
                <option value="negative">Negatif</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Görüş</label>
              <Textarea placeholder="Deneyimini paylaş..." />
            </div>
            {/* Rating fields */}
            <Form {...reviewForm}>
              <FormField control={reviewForm.control} name="workEnvironment" render={({ field }) => (
                <StarRatingInput label="İş Ortamı" value={field.value} onChange={field.onChange} />
              )} />
              <FormField control={reviewForm.control} name="managerBehavior" render={({ field }) => (
                <StarRatingInput label="Yönetici Davranışı" value={field.value} onChange={field.onChange} />
              )} />
              <FormField control={reviewForm.control} name="growthOpportunity" render={({ field }) => (
                <StarRatingInput label="Gelişme İmkanı" value={field.value} onChange={field.onChange} />
              )} />
              <FormField control={reviewForm.control} name="workingConditions" render={({ field }) => (
                <StarRatingInput label="Çalışma Koşulları" value={field.value} onChange={field.onChange} />
              )} />
            </Form>
            <div className="flex justify-between pt-4">
              <Button variant="ghost" onClick={() => setStep(2)}>Geri</Button>
              <Button type="submit">Gönder</Button>
            </div>
          </form>
        )}
        {/* 6. Adım - Hiç staj yapmadım */}
        {step === 6 && (
          <div className="space-y-4 pt-4 text-center">
            <p className="text-sm text-gray-700">Merak etme, staj yapmamış olman sorun değil. Platformu keşfetmeye devam edebilirsin 🎉</p>
            <div className="flex justify-center">
              <Button onClick={() => { localStorage.setItem("welcome-seen", "true"); setOpen(false); }}>Devam Et</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
