// app/actions/submit-salary.ts
"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitSalary(formData: FormData) {
  // 1) Supabase client'ı al
  const supabase = await createClient();

  // 2) Oturumdaki kullanıcıyı al
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Önce giriş yapmalısın.");
  }

  // 3) FormData’dan gelen alanları oku
  const companyId = formData.get("company_id") as string;
  const position = (formData.get("position") as string)?.trim() || "";
  const monthlySalaryRaw = formData.get("monthlySalary");
  const monthlySalary =
    typeof monthlySalaryRaw === "string"
      ? parseFloat(monthlySalaryRaw)
      : NaN;

  // 4) Validasyon
  if (!companyId) {
    throw new Error("Şirket seçimi yapılmadı.");
  }
  if (!position) {
    throw new Error("Pozisyon girilmedi.");
  }
  if (isNaN(monthlySalary) || monthlySalary <= 0) {
    throw new Error("Geçerli aylık maaş girilmedi.");
  }

  // 5) Insert işlemi
  const payload = {
    user_id: user.id,
    company_id: companyId,
    position,
    monthly_salary: monthlySalary,
    created_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("salaries").insert([payload]);
  if (error) {
    console.error("Maaş bilgisi kaydedilemedi:", error);
    throw new Error(error.message);
  }

  // 6) "/forum" sayfasının cache'ini yeniden oluştur
  revalidatePath("/forum");
}
