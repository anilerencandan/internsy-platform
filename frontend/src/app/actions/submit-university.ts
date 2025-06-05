// app/actions/submit-university.ts
"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitUniversity(formData: FormData) {
  // 1) Supabase client’ı
  const supabase = await createClient();

  // 2) Şu anki user’ı al
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Önce giriş yapmalısın.");
  }

  // 3) FormData’dan gelen university_id’yi al
  const universityId = formData.get("university_id") as string;
  
  if (!universityId) {
    throw new Error("Üniversite seçimi yapılmadı.");
  }
  console.log('gelen uni id:', universityId)

  // 4) Supabase üzerinde users tablosunu güncelle
  const { data, error } = await supabase
    .from("users")
    .update({ university_id: universityId })
    .eq("auth_id", user.id);  // "auth_id" sütununuza göre kontrol edin
  if (error) {
    console.error("Kullanıcıya üniversite atama hatası:", error);
    throw new Error(error.message);
  }

console.log("Update result:", data, error);

  // (İsteğe bağlı) Bir sayfa cache’ini yeniden oluştur
  revalidatePath("/forum");

  // Artık geriye bir şey döndürmüyoruz; client‐side yönlendirme ya da step kontrolü yapacak
}
