"use client";

import { useEffect, useState } from "react";
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
  firstName: z.string().min(1, { message: "Ad zorunlu" }),
  lastName: z.string().min(1, { message: "Soyad zorunlu" }),
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

  // İlk açılışta göster
  useEffect(() => {
    if (!localStorage.getItem("welcome-seen")) setOpen(true);
  }, []);

  // 1. form: kullanıcı bilgileri
  const userForm = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: { firstName: "", lastName: "", school: "" },
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


  // 1. adım gönderildiğinde
  const onUserSubmit = (values: UserFormValues) => {
    setUserInfo(values);
    setStep(2);
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
      <DialogContent className="sm:max-w-[500px] h-auto overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {step === 1 && "Hoş geldin! Bilgilerini doldur"}
            {step === 2 && "Ne paylaşmak istersin?"}
            {step === 3 && "Mülakat Deneyimini Paylaş"}
          </DialogTitle>
        </DialogHeader>

        {/* 1. Adım */}
        {step === 1 && (
          <Form {...userForm}>
            <form onSubmit={userForm.handleSubmit(onUserSubmit)} className="space-y-4 pt-2">
              {['firstName','lastName','school'].map(name => (
                <FormField key={name} control={userForm.control} name={name as any} render={({ field }) => (
                  <FormItem>
                    <FormLabel>{ name==='firstName'? 'Adın' : name==='lastName'? 'Soyadın':'Üniversiten' }</FormLabel>
                    <FormControl><Input {...field} placeholder={field.name==='school'?'Üniversiten': field.name==='firstName'?'Adın':'Soyadın'} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              ))}
              <div className="flex justify-end pt-2">
                <Button type="submit">Devam</Button>
              </div>
            </form>
          </Form>
        )}
        
        {/* 2. Adım */}
        {step === 2 && (
          <div className="grid gap-3 pt-4">
            <Button onClick={() => setStep(3)}>Mülakat Paylaş</Button>
            <Button onClick={() => setStep(4)}>Maaş Bilgisi Paylaş</Button>
            <Button onClick={() => setStep(5)}>Şirket Görüşü Paylaş</Button>
            <div className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-600">
              <span>Hiç staj yapmadın mı?</span>
              <Button variant="outline" onClick={() => setStep(6)}>Hiç Staj Yapmadım</Button>
            </div>
          </div>
        )}

        {/* 3. Adım - Mülakat Formu */}
        {step === 3 && (
          <Form {...interviewForm}>
            <form onSubmit={interviewForm.handleSubmit(onInterviewSubmit)} className="space-y-4 pt-2">
              {/* Firma, Pozisyon, Experience, Difficulty, Offer, Details Fields... */}
              <FormField control={interviewForm.control} name="companyName" render={({ field }) => (
                <FormItem><FormLabel>Firma İsmi</FormLabel><FormControl><Input {...field} placeholder="Firma İsmi" /></FormControl><FormMessage/></FormItem>
              )} />
              <FormField control={interviewForm.control} name="position" render={({ field }) => (
                <FormItem><FormLabel>Pozisyon</FormLabel><FormControl><Input {...field} placeholder="Pozisyon" /></FormControl><FormMessage/></FormItem>
              )} />
              <FormField control={interviewForm.control} name="experience" render={({ field }) => (
                <FormItem><FormLabel>Deneyim</FormLabel><FormControl>
                  <select {...field} className="w-full p-2 border rounded"><option value="positive">Pozitif</option><option value="negative">Negatif</option></select>
                </FormControl><FormMessage/></FormItem>
              )} />
              <FormField control={interviewForm.control} name="difficulty" render={({ field }) => (
                <FormItem><FormLabel>Zorluk Seviyesi</FormLabel><FormControl>
                  <select {...field} className="w-full p-2 border rounded"><option value="easy">Kolay</option><option value="medium">Orta</option><option value="hard">Zor</option></select>
                </FormControl><FormMessage/></FormItem>
              )} />
              <FormField control={interviewForm.control} name="offer" render={({ field }) => (
                <FormItem><FormLabel>Teklif Durumu</FormLabel><FormControl>
                  <select {...field} className="w-full p-2 border rounded"><option value="received">Alındı</option><option value="not_received">Alınmadı</option></select>
                </FormControl><FormMessage/></FormItem>
              )} />
              <FormField control={interviewForm.control} name="details" render={({ field }) => (
                <FormItem><FormLabel>Detaylar</FormLabel><FormControl><Textarea {...field} placeholder="Detayları yazın..." /></FormControl><FormMessage/></FormItem>
              )} />

              {/* Soru Kartları */}
              <div className="pt-4">
                <Button variant="outline" onClick={() => append({ question: "", answer: "" })}>Soru Gir</Button>
              </div>
              {fields.map((item, idx) => (
                <div key={item.id} className="border rounded p-4 mt-3">
                  <FormField control={interviewForm.control} name={`questions.${idx}.question`} render={({ field }) => (
                    <FormItem><FormLabel>Soru #{idx + 1}</FormLabel><FormControl><Input {...field} placeholder="Soruyu yazın..." /></FormControl><FormMessage/></FormItem>
                  )} />
                  <div className="flex gap-2 mt-2">
                    <Button variant="ghost" size="sm" onClick={() => handleToggleAnswer(idx)}>Cevap Gir</Button>
                    <Button variant="destructive" size="sm" onClick={() => remove(idx)}>Sil</Button>
                  </div>
                  {showAnswerIdx.includes(idx) && (
                    <FormField control={interviewForm.control} name={`questions.${idx}.answer`} render={({ field }) => (
                      <FormItem><FormLabel>Cevap</FormLabel><FormControl><Textarea {...field} placeholder="Cevabı yazın..." /></FormControl><FormMessage/></FormItem>
                    )} />
                  )}
                </div>
              ))}

              <div className="flex justify-between pt-4">
                <Button variant="ghost" onClick={() => setStep(2)}>Geri</Button>
                <Button type="submit">Gönder</Button>
              </div>
            </form>
          </Form>
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
