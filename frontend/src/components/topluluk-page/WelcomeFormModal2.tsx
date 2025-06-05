// // src/components/welcome/WelcomeFlowModal.tsx

// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { useForm, useFieldArray } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// // Step bileşenleri
// import UniversityStep from "@/components/topluluk-page/welcomeFormSteps/UniversityStep";
// import SelectActionStep from "@/components/topluluk-page/welcomeFormSteps/SelectActionStep";
// import InterviewStep from "@/components/topluluk-page/welcomeFormSteps/InterviewStep";
// import SalaryStep from "@/components/topluluk-page/welcomeFormSteps/SalaryStep";
// import ReviewStep from "@/components/topluluk-page/welcomeFormSteps/ReviewStep";
// import NoInternshipStep from "@/components/topluluk-page/welcomeFormSteps/NoInternshipStep";

// // ----------------------
// // 1. Form Şemaları
// // ----------------------

// // 1. Kullanıcı Bilgileri Şeması
// const userSchema = z.object({
//   school: z.string().min(1, { message: "Üniversite zorunlu" }),
// });
// type UserFormValues = z.infer<typeof userSchema>;

// // 2. Mülakat Paylaşım Şeması
// const interviewSchema = z.object({
//   position: z.string().min(1, { message: "Pozisyon zorunlu" }),
//   experience: z.enum(["positive", "negative"], {
//     errorMap: () => ({ message: "Pozitif veya negatif seçimi zorunlu" }),
//   }),
//   difficulty: z.enum(["easy", "medium", "hard"], {
//     errorMap: () => ({ message: "Zorluk seviyesi seçilmeli" }),
//   }),
//   offer: z.enum(["received", "not_received"], {
//     errorMap: () => ({ message: "Teklif durumu zorunlu" }),
//   }),
//   details: z.string().optional(),
//   questions: z
//     .array(
//       z.object({
//         question: z.string().min(1, { message: "Soru zorunlu" }),
//         answer: z.string().optional(),
//       })
//     )
//     .optional(),
// });
// type InterviewFormValues = z.infer<typeof interviewSchema>;

// // 3. Maaş Bilgisi Şeması
// const salarySchema = z.object({
//   position: z.string().min(1, { message: "Pozisyon zorunlu" }),
//   monthlySalary: z.number().min(1, { message: "Maaş zorunlu" }),
// });
// type SalaryFormValues = z.infer<typeof salarySchema>;

// // 4. Şirket Görüşü Şeması
// const reviewSchema = z.object({
//   sentiment: z.enum(["positive", "negative"], {
//     errorMap: () => ({ message: "Pozitif veya negatif seçimi zorunlu" }),
//   }),
//   review: z.string().min(1, { message: "Görüş yazmalısınız" }),
//   workEnvironment: z.number().min(1).max(5),
//   managerBehavior: z.number().min(1).max(5),
//   growthOpportunity: z.number().min(1).max(5),
//   workingConditions: z.number().min(1).max(5),
// });
// type ReviewFormValues = z.infer<typeof reviewSchema>;

// // ----------------------
// // Bileşen
// // ----------------------

// export default function WelcomeFlowModal() {
//   // Modal ve adım kontrolü
//   const [open, setOpen] = useState(false);
//   const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

//   // ------------------------------------------------
//   //  Üniversite seçim state'leri (1. adım)
//   // ------------------------------------------------
//   const [universities, setUniversities] = useState<{ id: string; name: string }[]>([]);
//   const [universitySearch, setUniversitySearch] = useState("");
//   const [selectedUniversityName, setSelectedUniversityName] = useState("");
//   const [selectedUniversityId, setSelectedUniversityId] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Üniversite formu (isteğe bağlı validasyon, ancak burada sadece seçimle ilerliyoruz)
//   const userForm = useForm<UserFormValues>({
//     resolver: zodResolver(userSchema),
//     defaultValues: { school: "" },
//   });

//   // ------------------------------------------------
//   //  Şirket liste ve seçim state'leri
//   // ------------------------------------------------
//   const [companies, setCompanies] = useState<{ id: string; name: string }[]>([]);
//   const [companySearch, setCompanySearch] = useState("");
//   const [selectedCompanyName, setSelectedCompanyName] = useState("");
//   const [selectedCompanyId, setSelectedCompanyId] = useState("");
//   const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

//   // ------------------------------------------------
//   //  Mülakat formu (3. adım)
//   // ------------------------------------------------
//   const interviewForm = useForm<InterviewFormValues>({
//     resolver: zodResolver(interviewSchema),
//     defaultValues: {
//       position: "",
//       experience: "positive",
//       difficulty: "medium",
//       offer: "received",
//       details: "",
//       questions: [],
//     },
//   });
//   const { fields: questionFields, append: appendQuestion, remove: removeQuestion } =
//     useFieldArray({
//       control: interviewForm.control,
//       name: "questions",
//     });

//   // ------------------------------------------------
//   //  Maaş formu (4. adım)
//   // ------------------------------------------------
//   const salaryForm = useForm<SalaryFormValues>({
//     resolver: zodResolver(salarySchema),
//     defaultValues: { position: "", monthlySalary: 0 },
//   });

//   // ------------------------------------------------
//   //  Görüş formu (5. adım)
//   // ------------------------------------------------
//   const reviewForm = useForm<ReviewFormValues>({
//     resolver: zodResolver(reviewSchema),
//     defaultValues: {
//       sentiment: "positive",
//       review: "",
//       workEnvironment: 3,
//       managerBehavior: 3,
//       growthOpportunity: 3,
//       workingConditions: 3,
//     },
//   });

//   // ------------------------------------------------
//   //  Yanıt alanı toggle'ı (soru-cevap için)
//   // ------------------------------------------------
//   const [showAnswerIdx, setShowAnswerIdx] = useState<number[]>([]);
//   const handleToggleAnswer = (idx: number) => {
//     setShowAnswerIdx((prev) =>
//       prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
//     );
//   };

//   // ------------------------------------------------
//   //  Modal'ı ilk açılışta göster (localStorage kontrolü)
//   // ------------------------------------------------
//   useEffect(() => {
//     if (!localStorage.getItem("welcome-seen")) {
//       setOpen(true);
//     }
//   }, []);

//   // ------------------------------------------------
//   //  Supabase'den şirketleri ve üniversiteleri çekme
//   // ------------------------------------------------
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       const { data, error } = await supabase.from("companies").select("id, name");
//       if (!error && data) {
//         setCompanies(data as { id: string; name: string }[]);
//       }
//     };
//     fetchCompanies();

//     const fetchUniversities = async () => {
//       const { data, error } = await supabase.from("universities").select("id, name");
//       if (!error && data) {
//         setUniversities(data as { id: string; name: string }[]);
//       }
//     };
//     fetchUniversities();
//   }, []);

//   // ------------------------------------------------
//   //  1. Adım: Üniversite Seçimi Gönderme
//   // ------------------------------------------------
//   const onUserSubmit = () => {
//     if (selectedUniversityId) {
//       userForm.clearErrors();
//       setStep(2);
//     } else {
//       userForm.setError("school", { message: "Üniversite seçiniz" });
//     }
//   };

//   // ------------------------------------------------
//   //  3. Adım: Mülakat Gönderimi (Server Action kullanılıyor)
//   //      – InterviewStep bileşeni içinde form action={submitInterview}
//   //        olduğu için buraya ek logic gerekmez
//   // ------------------------------------------------

//   // ------------------------------------------------
//   //  4. Adım: Maaş Gönderimi (Server Action kullanılıyor)
//   //      – SalaryStep bileşeni içinde form action={submitSalary}
//   //        olduğu için buraya ek logic gerekmez
//   // ------------------------------------------------

//   // ------------------------------------------------
//   //  5. Adım: Görüş Gönderimi (Server Action kullanılıyor)
//   //      – ReviewStep bileşeni içinde form action={submitReview}
//   //        olduğu için buraya ek logic gerekmez
//   // ------------------------------------------------

//   return (
//     <Dialog open={open}>
//       <DialogContent className="flex flex-col items-center max-w-[90%] sm:max-w-[400px] rounded-lg min-h-[400px] max-h-[90%] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-primary font-bold">
//             {step === 1 && "Hoş geldin! Bilgilerini doldur"}
//             {step === 2 && "Ne paylaşmak istersin?"}
//             {step === 3 && "Mülakat Deneyimini Paylaş"}
//             {step === 4 && "Şirket Maaş Bilgisi Paylaş"}
//             {step === 5 && "Şirket Görüşü Paylaş"}
//             {step === 6 && "4.4/5 ⭐ Deneyimini Paylaşmak İster misin?"}
//           </DialogTitle>
//         </DialogHeader>

//         {/* 1. Adım: Üniversite Seçimi */}
//         {step === 1 && (
//           <UniversityStep
//             universities={universities}
//             universitySearch={universitySearch}
//             selectedUniversityName={selectedUniversityName}
//             selectedUniversityId={selectedUniversityId}
//             isDropdownOpen={isDropdownOpen}
//             setUniversitySearch={setUniversitySearch}
//             setSelectedUniversityName={setSelectedUniversityName}
//             setSelectedUniversityId={setSelectedUniversityId}
//             setIsDropdownOpen={setIsDropdownOpen}
//             onSubmit={onUserSubmit}
//           />
//         )}

//         {/* 2. Adım: Ne Paylaşmak İstersin? */}
//         {step === 2 && (
//           <SelectActionStep
//             onSelectInterview={() => setStep(3)}
//             onSelectSalary={() => setStep(4)}
//             onSelectReview={() => setStep(5)}
//             onSelectNoIntern={() => setStep(6)}
//           />
//         )}

//         {/* 3. Adım: Mülakat Formu */}
//         {step === 3 && (
//           <InterviewStep
//             companies={companies}
//             companySearch={companySearch}
//             selectedCompanyName={selectedCompanyName}
//             selectedCompanyId={selectedCompanyId}
//             isCompanyDropdownOpen={isCompanyDropdownOpen}
//             setCompanySearch={setCompanySearch}
//             setSelectedCompanyName={setSelectedCompanyName}
//             setSelectedCompanyId={setSelectedCompanyId}
//             setIsCompanyDropdownOpen={setIsCompanyDropdownOpen}
//             interviewForm={interviewForm}
//             questionFields={questionFields}
//             appendQuestion={appendQuestion}
//             removeQuestion={removeQuestion}
//             showAnswerIdx={showAnswerIdx}
//             handleToggleAnswer={handleToggleAnswer}
//             goBack={() => setStep(2)}
//             closeModal={() => {
//               localStorage.setItem("welcome-seen", "true");
//               setOpen(false);
//             }}
//           />
//         )}

//         {/* 4. Adım: Maaş Formu */}
//         {step === 4 && (
//           <SalaryStep
//             companies={companies}
//             companySearch={companySearch}
//             selectedCompanyName={selectedCompanyName}
//             selectedCompanyId={selectedCompanyId}
//             isCompanyDropdownOpen={isCompanyDropdownOpen}
//             setCompanySearch={setCompanySearch}
//             setSelectedCompanyName={setSelectedCompanyName}
//             setSelectedCompanyId={setSelectedCompanyId}
//             setIsCompanyDropdownOpen={setIsCompanyDropdownOpen}
//             salaryForm={salaryForm}
//             goBack={() => setStep(2)}
//             closeModal={() => {
//               localStorage.setItem("welcome-seen", "true");
//               setOpen(false);
//             }}
//           />
//         )}

//         {/* 5. Adım: Görüş Formu */}
//         {step === 5 && (
//           <ReviewStep
//             companies={companies}
//             companySearch={companySearch}
//             selectedCompanyName={selectedCompanyName}
//             selectedCompanyId={selectedCompanyId}
//             isCompanyDropdownOpen={isCompanyDropdownOpen}
//             setCompanySearch={setCompanySearch}
//             setSelectedCompanyName={setSelectedCompanyName}
//             setSelectedCompanyId={setSelectedCompanyId}
//             setIsCompanyDropdownOpen={setIsCompanyDropdownOpen}
//             reviewForm={reviewForm}
//             goBack={() => setStep(2)}
//             closeModal={() => {
//               localStorage.setItem("welcome-seen", "true");
//               setOpen(false);
//             }}
//           />
//         )}

//         {/* 6. Adım: Hiç Staj Yapmadım */}
//         {step === 6 && (
//           <NoInternshipStep
//             closeModal={() => {
//               localStorage.setItem("welcome-seen", "true");
//               setOpen(false);
//             }}
//           />
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// }
