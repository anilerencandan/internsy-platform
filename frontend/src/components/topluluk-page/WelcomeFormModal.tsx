"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { submitReview } from "@/app/actions/submit-review";
import { submitInterview } from "@/app/actions/submit-interview";
import { submitSalary } from "@/app/actions/submit-salaries";
import { submitUniversity } from "@/app/actions/submit-university";

// 1. Kullanıcı Bilgileri Şeması
const userSchema = z.object({
  school: z.string().min(1, { message: "Üniversite zorunlu" }),
});
type UserFormValues = z.infer<typeof userSchema>;

// 2. Mülakat Paylaşım Şeması
const interviewSchema = z.object({
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
  questions: z
    .array(
      z.object({
        question: z.string().min(1, { message: "Soru zorunlu" }),
        answer: z.string().optional(),
      })
    )
    .optional(),
});
type InterviewFormValues = z.infer<typeof interviewSchema>;

// 3. Maaş Bilgisi Şeması
const salarySchema = z.object({
  position: z.string().min(1, { message: "Pozisyon zorunlu" }),
  monthlySalary: z.number().min(1, { message: "Maaş zorunlu" }),
});
type SalaryFormValues = z.infer<typeof salarySchema>;

// 4. Şirket Görüşü Şeması
const reviewSchema = z.object({
  // Burada company ID direkt olarak transmitleyeceğiz, name zorunluluğu kaldırdık
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

type CompanyOption = {
  id: string;
  name: string;
};

type University = {
  id: string;
  name: string;
};


export default function WelcomeFlowModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6| 7>(1);
  const [userInfo, setUserInfo] = useState<UserFormValues | null>(null);
  const [showAnswerIdx, setShowAnswerIdx] = useState<number[]>([]);

  // Üniversite dropdown durumları
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [universitySearch, setUniversitySearch] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState<string>("");

  // Şirket liste ve seçim için state'ler
  const [companies, setCompanies] = useState<CompanyOption[]>([]);
  const [companySearch, setCompanySearch] = useState("");
  const [selectedCompanyName, setSelectedCompanyName] = useState("");
  const [selectedCompanyId, setSelectedCompanyId] = useState("");
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [selectedUniversityId, setSelectedUniversityId] = useState<string>("");
  const [selectedUniversityName, setSelectedUniversityName] = useState<string>("");


  // Supabase'den şirketleri çek
  useEffect(() => {
    const fetchCompanies = async () => {
      const { data, error } = await supabase
        .from("companies")
        .select("id, name");
      if (error) {
        console.error("Şirket verisi alınamadı:", error);
      } else if (data) {
        // data: Array<{id: string, name: string}>
        setCompanies(data as CompanyOption[]);
      }
    };
    fetchCompanies();
  }, []);

  // Modal'ı ilk açılışta göster (localStorage kontrolü)
  useEffect(() => {
    if (!localStorage.getItem("welcome-seen")) {
      setOpen(true);
    }
  }, []);

  // 1. form: kullanıcı bilgileri
  const userForm = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: { school: "" },
  });

  // 2. form: mülakat paylaşım
  const interviewForm = useForm<InterviewFormValues>({
    resolver: zodResolver(interviewSchema),
    defaultValues: {
      position: "",
      experience: "positive",
      difficulty: "medium",
      offer: "received",
      details: "",
      questions: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: interviewForm.control,
    name: "questions",
  });

  // 3. form: maaş bilgisi paylaşım
  const salaryForm = useForm<SalaryFormValues>({
    resolver: zodResolver(salarySchema),
    defaultValues: { position: "", monthlySalary: 0 },
  });

  // 4. form: şirket görüşü paylaşım
  const reviewForm = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      sentiment: "positive",
      review: "",
      workEnvironment: 3,
      managerBehavior: 3,
      growthOpportunity: 3,
      workingConditions: 3,
    },
  });

  // Üniversite listesini Supabase'den çek
  const [universities, setUniversities] = useState<University[]>([]);
  useEffect(() => {
  const fetchUniversities = async () => {
    const { data, error } = await supabase.from("universities").select("id, name");

    if (error) {
      console.error("Üniversiteler alınamadı:", error);
    } else {
      setUniversities(data as University[]);
    }
  };

  fetchUniversities();
}, []);


  const experience = interviewForm.watch("experience");
  const difficulty = interviewForm.watch("difficulty");
  const offer = interviewForm.watch("offer");

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
  const onInterviewSubmit = async (values: InterviewFormValues) => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        alert("Giriş yapmadınız!");
        return;
      }

      const user = session.user;

      if (!selectedCompanyId) {
        alert("Lütfen bir şirket seçin.");
        return;
      }

      const payload = {
        user_id: user.id,
        company_id: selectedCompanyId,
        position: values.position,
        experience: values.experience,
        difficulty: values.difficulty,
        offer: values.offer,
        details: values.details,
        questions: values.questions ?? [],
        is_visible: true,
      };

      const { data, error } = await supabase
        .from("interviews")
        .insert([payload]);
      if (error) {
        console.error("Mülakat gönderilemedi:", error);
        alert("Gönderim sırasında hata oluştu.");
      } else {
        console.log("Mülakat başarıyla kaydedildi:", data);
        localStorage.setItem("welcome-seen", "true");
        setOpen(false);
      }
    } catch (error) {
      console.error("Beklenmeyen bir hata:", error);
      alert("Bir hata oluştu.");
    }
  };

  const onSalarySubmit = async (values: SalaryFormValues) => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        alert("Giriş yapmadınız!");
        return;
      }
      const user = session.user;

      if (!selectedCompanyId) {
        alert("Lütfen bir şirket seçin.");
        return;
      }

      const payload = {
        user_id: user.id,
        company_id: selectedCompanyId,
        position: values.position,
        monthly_salary: values.monthlySalary,
        created_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from("salaries")
        .insert([payload]);
      if (error) {
        console.error("Maaş bilgisi gönderilemedi:", error);
        alert("Gönderim sırasında hata oluştu.");
      } else {
        console.log("Maaş bilgisi başarıyla kaydedildi:", data);
        localStorage.setItem("welcome-seen", "true");
        setOpen(false);
      }
    } catch (error) {
      console.error("Beklenmeyen bir hata:", error);
      alert("Bir hata oluştu.");
    }
  };

  const handleToggleAnswer = (idx: number) => {
    setShowAnswerIdx((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
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
      <DialogContent className="flex flex-col items-center max-w-[90%] sm:max-w-[400px] rounded-lg min-h-[400px] max-h-[90%] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary font-bold">
            {step === 1 && "Hoş geldin! Bilgilerini doldur"}
            {step === 2 && "Ne paylaşmak istersin?"}
            {step === 3 && "Mülakat Deneyimini Paylaş"}
            {step === 4 && "Şirket Maaş Bilgisi Paylaş"}
            {step === 5 && "Şirket Görüşü Paylaş"}
            {step === 6 && "4.4/5 ⭐ Deneyimini Paylaşmak İster misin?"}
          </DialogTitle>
        </DialogHeader>

        {/* 1. Adım: Kullanıcı Bilgileri */}
       {step === 1 && (
          <form onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            try {
              await submitUniversity(formData)
              setStep(2)
            }catch (err) {
              console.error("universite gonderme hatasi:", err)
            }
          }} className="w-full space-y-4 pt-2">
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
        )}


        {/* 2. Adım: Hangi Tür Paylaşımı */}
        {step === 2 && (
          <div className="gap-3 flex flex-col items-center pt-4 text-sm">
            <div className="grid gap-3 w-full max-w-md">
              <Button
                className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                onClick={() => setStep(3)}
              >
                Mülakat Paylaş
              </Button>
              <Button
                className="flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                onClick={() => setStep(4)}
              >
                Maaş Bilgisi Paylaş
              </Button>
              <Button
                className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                onClick={() => setStep(5)}
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
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              try {
                await submitInterview(formData)
                setStep(7)
              }catch (err) {
                console.error("Mulakat gonderilirken hata olustu")
              }
            }}
            className="space-y-6 pt-4"
          >
            {/* ——— 1. Firma ve Pozisyon ——— */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Şirket
                </label>
                <div className="relative">
                  {/* Hidden Input: şirket ID burada saklanacak */}
                  <input
                    type="hidden"
                    name="company_id"
                    value={selectedCompanyId}
                  />

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

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pozisyon
                </label>
                <input
                  type="text"
                  name="position"
                  required
                  placeholder="Örn: Yazılım Mühendisi"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* ——— 2. Deneyim, Zorluk, Teklif ——— */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deneyim
              </label>
              <select
                name="experience"
                required
                className={`w-full p-2 rounded-md bg-white border font-semibold border-gray-300 ${
                  experience === "positive"
                    ? "text-green-700"
                    : experience === "negative"
                    ? "text-red-600"
                    : "text-gray-700"
                }`}
                onChange={(e) => interviewForm.setValue("experience", e.target.value as "positive" | "negative")}
              >
                <option value="">Seçiniz</option>
                <option value="positive">Pozitif</option>
                <option value="negative">Negatif</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zorluk
              </label>
              <select
                name="difficulty"
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
                onChange={(e) => interviewForm.setValue("difficulty", e.target.value as "easy" | "medium" | "hard")}
              >
                <option value="">Seçiniz</option>
                <option value="easy">Kolay</option>
                <option value="medium">Orta</option>
                <option value="hard">Zor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teklif Durumu
              </label>
              <select
                name="offer"
                required
                className={`w-full p-2 rounded-md bg-white border font-semibold border-gray-300 ${
                  offer === "received"
                    ? "text-green-700"
                    : offer === "not_received"
                    ? "text-red-600"
                    : "text-gray-700"
                }`}
                onChange={(e) => interviewForm.setValue("offer", e.target.value as "received" | "not_received")}
              >
                <option value="">Seçiniz</option>
                <option value="received">Alındı</option>
                <option value="not_received">Alınmadı</option>
              </select>
            </div>

            {/* ——— 3. Detaylar ——— */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Detaylar
              </label>
              <Textarea
                name="details"
                rows={4}
                placeholder="Mülakatın detaylarını yazın..."
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ——— 4. Sorular (Field Array) ——— */}
            <div className="max-w-2xl w-full mx-auto bg-gradient-to-b from-slate-50 to-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
                Mülakatta Sorulan Sorular
              </h3>

              <div className="space-y-4">
                {fields.map((item, idx) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
                  >
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Soru #{idx + 1}
                      </label>
                      <input
                        type="text"
                        name={`questions[${idx}].question`}
                        placeholder="Soruyu yazın..."
                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring focus:ring-slate-100 text-sm"
                      />
                    </div>

                    {showAnswerIdx.includes(idx) && (
                      <div className="mb-2">
                        <label className="block text-xs font-medium text-slate-600 mb-1">
                          Cevap
                        </label>
                        <textarea
                          name={`questions[${idx}].answer`}
                          placeholder="Cevabı yazın..."
                          rows={3}
                          className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring focus:ring-slate-100 text-sm"
                        ></textarea>
                      </div>
                    )}

                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        className="text-xs text-slate-500 hover:text-slate-800 hover:underline"
                        onClick={() => handleToggleAnswer(idx)}
                      >
                        + Cevap Ekle
                      </button>
                      <button
                        type="button"
                        className="text-xs text-rose-500 hover:text-rose-700 hover:underline"
                        onClick={() => remove(idx)}
                      >
                        ✕ Sil
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 text-center">
                <button
                  type="button"
                  onClick={() => {
                    append({ question: "", answer: "" });
                  }}
                  className="text-sm px-4 py-2 border border-slate-200 rounded-md hover:bg-slate-50 text-slate-700 transition"
                >
                  + Yeni Soru Ekle
                </button>
              </div>

              {/**  Bunları formData’ya eklemek için tek hidden input olarak JSON.stringify ediyoruz */}
              <input
                type="hidden"
                name="questions"
                value={JSON.stringify(interviewForm.getValues("questions"))}
              />
            </div>

            {/* ——— 5. Navigasyon ——— */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-white border border-gray-300 hover:border-blue-600 hover:bg-blue-600 font-medium px-3 py-1.5 rounded-md transition-colors duration-200"
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
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              try{
                await submitSalary(formData);
                setStep(7)
              }catch (err){
                console.error('Maas bilgisi gonderilirken bir sorun olustu')
              }
            }}
            className="space-y-4 pt-2"
            // Bu form zaten "use client" altında olduğun bir component içinde yer alıyor olmalı
            // Aksi takdirde form actionları çalışmaz.
          >
            <h2 className="text-xl font-bold text-primary">
              Şirket Maaş Bilgisi Paylaş
            </h2>

            {/* ——— 1) Şirket Seçimi ——— */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Şirket
              </label>
              <div className="relative">
                {/* Hidden Input: company_id */}
                <input
                  type="hidden"
                  name="company_id"
                  value={selectedCompanyId}
                />

                <input
                  type="text"
                  placeholder="Bir şirket seçin..."
                  value={companySearch || selectedCompanyName}
                  onChange={(e) => {
                    setCompanySearch(e.target.value);
                    setIsCompanyDropdownOpen(true);
                  }}
                  onFocus={() => setIsCompanyDropdownOpen(true)}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            {/* ——— 2) Pozisyon ——— */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pozisyon
              </label>
              <input
                type="text"
                name="position"
                required
                placeholder="Örn: Yazılım Mühendisi"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ——— 3) Aylık Maaş ——— */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Aylık Maaş (₺)
              </label>
              <input
                type="number"
                name="monthlySalary"
                required
                placeholder="Örn. 15.000"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ——— 4) Navigasyon ——— */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-white border border-gray-300 hover:border-blue-600 hover:bg-blue-600 font-medium px-3 py-1.5 rounded-md transition-colors duration-200"
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


        {/* 5. Adım - Şirket Görüşü */}
        {step === 5 && (
          <form action={submitReview}
          onSubmit={async (e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            try{
              await submitReview(formData)
              setStep(7)
            }catch(err){
              console.error('Sirket gorusu gonderilirken bir sorun olustu.')
            }
          }}
          className="space-y-4 pt-2">
            <h2 className="text-xl font-bold text-primary">
              Şirket Staj Deneyimi Paylaş
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Şirket
              </label>
              <div className="relative">
                {/* Hidden Input: company ID */}
                <input
                  type="hidden"
                  name="company"
                  value={selectedCompanyId}
                />
                <input
                  type="text"
                  placeholder="Bir şirket seçin..."
                  value={companySearch || selectedCompanyName}
                  onChange={(e) => {
                    setCompanySearch(e.target.value);
                    setIsCompanyDropdownOpen(true);
                  }}
                  onFocus={() => setIsCompanyDropdownOpen(true)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Staj Türü
              </label>
              <Textarea
                name="internTerm"
                placeholder="Staj Türün nedir? (kısa / uzun dönem…)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                İş Tanımı
              </label>
              <Textarea
                name="positionTitle"
                placeholder="Staj deneyiminde neler yaptınız?"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Olumlu Yönler
              </label>
              <Textarea
                name="pros"
                placeholder="Staj deneyiminde hoşunuza giden şeyleri yazın..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Olumsuz Yönler
              </label>
              <Textarea
                name="cons"
                placeholder="Geliştirilebilecek veya hoşunuza gitmeyen yönleri yazın..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
              />
            </div>

            {/* Rating fields */}
            <Form {...reviewForm}>
            <FormField
              control={reviewForm.control}
              name="workEnvironment"
              render={({ field }) => (
                <>
                  <StarRatingInput label="İş Ortamı" value={field.value} onChange={field.onChange} />
                  <input type="hidden" name="workEnvironment" value={field.value} />
                </>
              )}
            />
            <FormField
              control={reviewForm.control}
              name="managerBehavior"
              render={({ field }) => (
                <>
                  <StarRatingInput label="Yönetici Davranışı" value={field.value} onChange={field.onChange} />
                  <input type="hidden" name="managerBehavior" value={field.value} />
                </>
              )}
            />
            <FormField
              control={reviewForm.control}
              name="growthOpportunity"
              render={({ field }) => (
                <>
                  <StarRatingInput label="Gelişme İmkanı" value={field.value} onChange={field.onChange} />
                  <input type="hidden" name="growthOpportunity" value={field.value} />
                </>
              )}
            />
            <FormField
              control={reviewForm.control}
              name="workingConditions"
              render={({ field }) => (
                <>
                  <StarRatingInput label="Çalışma Koşulları" value={field.value} onChange={field.onChange} />
                  <input type="hidden" name="workingConditions" value={field.value} />
                </>
              )}
            />
          </Form>


            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => setStep(2)}
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
        )}

        {/* 6. Adım - Hiç staj yapmadım */}
        {step === 6 && (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 space-y-6 text-center">
            <div className="flex flex-col items-center">
              <svg
                className="w-12 h-12 text-yellow-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2a10 10 0 00-3.536 19.316c.28.052.384-.122.384-.272v-1.043c-1.562.34-1.89-.754-1.89-.754-.254-.647-.62-.819-.62-.819-.508-.347.038-.34.038-.34.562.04.858.578.858.578.5.858 1.312.61 1.632.466.05-.366.198-.61.358-.75-1.247-.142-2.557-.624-2.557-2.774 0-.614.218-1.116.578-1.51-.058-.14-.252-.7.054-1.46 0 0 .468-.15 1.53.576a5.32 5.32 0 011.396-.188c.474.002.952.064 1.396.188 1.062-.726 1.53-.576 1.53-.576.306.76.112 1.32.054 1.46.36.394.578.896.578 1.51 0 2.16-1.31 2.632-2.56 2.774.204.176.384.524.384 1.058v1.574c0 .152.106.326.386.27A10 10 0 0012 2z"
                />
              </svg>
              <p className="text-gray-600">
                Merak etme, staj yapmamış olman sorun değil.
              </p>
              <p className="text-gray-600">
                Platformu keşfetmeye devam edebilirsin 🎉
              </p>
              <p className="text-gray-500 text-sm mt-2">
                2 haftalık deneme süren başladı
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  localStorage.setItem("welcome-seen", "true");
                  setOpen(false);
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-sm transition-colors duration-200"
              >
                Devam Et
              </Button>
            </div>
          </div>
        )}

        {step === 7 && (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 space-y-6 text-center">
              artik hazirsiniz 
              <div className="flex justify-center">
                <Button
                  onClick={() => {
                    localStorage.setItem("welcome-seen", "true");
                    setOpen(false);
                  }}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-sm transition-colors duration-200"
                >
                  Devam Et
                </Button>
            </div>
            </div>
            

        )}
      </DialogContent>
    </Dialog>
  );
}
