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

export default function WelcomeFlowModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
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

  return (
    <Dialog open={open} onOpenChange={() => {}}>
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
            <form onSubmit={userForm.handleSubmit(onUserS
              ubmit)} className="space-y-4 pt-2">
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
            <Button disabled>Maaş Bilgisi Paylaş</Button>
            <Button disabled>Şirket Görüşü Paylaş</Button>
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
                <Button variant="ghost" onClick={() => setOpen(false)}>Atla</Button>
                <Button type="submit">Gönder</Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
