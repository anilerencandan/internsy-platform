// app/actions/submit-interview.ts
"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitInterview(formData: FormData) {
  // 1) Supabase client’ı al
  const supabase = await createClient();

  // 2) Şu anki user’ı al
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Önce giriş yapmalısın.");
  }

  // 3) FormData’dan alanları oku
  const companyId = formData.get("company_id") as string;
  const position = (formData.get("position") as string) || "";
  const experience = (formData.get("experience") as string) || "";
  const difficulty = (formData.get("difficulty") as string) || "";
  const offer = (formData.get("offer") as string) || "";
  const details = (formData.get("details") as string) || "";

  // 4) Sorular JSON olarak tek bir hidden input üzerinden gönderiliyor
  const rawEntries = Array.from(formData.entries());
    const questions: { question: string; answer: string }[] = [];

    for (let i = 0; ; i++) {
    const q = formData.get(`questions[${i}].question`);
    const a = formData.get(`questions[${i}].answer`);
    if (!q && !a) break;

    questions.push({
        question: q?.toString() || "",
        answer: a?.toString() || "",
    });
    }

  // 5) Validasyon: zorunlu alanlar
  if (!companyId) {
    throw new Error("Şirket seçimi yapılmadı.");
  }
  if (!position) {
    throw new Error("Pozisyon girilmedi.");
  }
  if (!experience) {
    throw new Error("Deneyim seçilmedi.");
  }
  if (!difficulty) {
    throw new Error("Zorluk seviyesi seçilmedi.");
  }
  if (!offer) {
    throw new Error("Teklif durumu seçilmedi.");
  }

  // console.log("eeeee", formData)


  // 6) Payload oluştur ve insert et
  const payload = {
    user_id: user.id,
    company_id: companyId,
    position,
    experience,
    difficulty,
    offer,
    details,
    questions,
    created_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("interviews").insert([payload]);
  if (error) {
    console.error("Mülakat kaydedilemedi:", error);
    throw new Error(error.message);
  }

  // 7) İlgili sayfayı yeniden revalidate et
  // revalidatePath("/forum");
}
