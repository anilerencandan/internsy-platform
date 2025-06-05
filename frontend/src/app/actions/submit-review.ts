"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitReview(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Önce giriş yapmalısın.");
  }

  const companyId = formData.get("company") as string;
  const internTerm = (formData.get("internTerm") as string) || "";
  const positionTitle = (formData.get("positionTitle") as string) || "";
  const pros = (formData.get("pros") as string) || "";
  const cons = (formData.get("cons") as string) || "";

  const workEnvironmentRaw = formData.get("workEnvironment");
  const managerBehaviorRaw = formData.get("managerBehavior");
  const growthOpportunityRaw = formData.get("growthOpportunity");
  const workingConditionsRaw = formData.get("workingConditions");

  const workEnvironment =
    typeof workEnvironmentRaw === "string"
      ? parseInt(workEnvironmentRaw, 10)
      : 0;
  const managerBehavior =
    typeof managerBehaviorRaw === "string"
      ? parseInt(managerBehaviorRaw, 10)
      : 0;
  const growthOpportunity =
    typeof growthOpportunityRaw === "string"
      ? parseInt(growthOpportunityRaw, 10)
      : 0;
  const workingConditions =
    typeof workingConditionsRaw === "string"
      ? parseInt(workingConditionsRaw, 10)
      : 0;


  if (!companyId) {
    throw new Error("Şirket seçimi yapılmadı.");
  }

  if (workEnvironment < 1 || workEnvironment > 5) {
    throw new Error("İş ortamı puanı 1–5 arası olmalı.");
  }
  if (managerBehavior < 1 || managerBehavior > 5) {
    throw new Error("Yönetici davranışı puanı 1–5 arası olmalı.");
  }
  if (growthOpportunity < 1 || growthOpportunity > 5) {
    throw new Error("Gelişme imkanı puanı 1–5 arası olmalı.");
  }
  if (workingConditions < 1 || workingConditions > 5) {
    throw new Error("Çalışma koşulları puanı 1–5 arası olmalı.");
  }

  const payload = {
    user_id: user.id,
    company_id: companyId,
    intern_type: internTerm,
    job_title: positionTitle,
    pros,
    cons,
    work_environment_rating: workEnvironment,
    manager_behavior_rating: managerBehavior,
    growth_opportunity_rating: growthOpportunity,
    working_conditions_rating: workingConditions,
    average_rating: (workEnvironment+managerBehavior+growthOpportunity+workingConditions)/4,
    created_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("reviews").insert([payload]);
  if (error) {
    console.error("Şirket görüşü kaydedilemedi:", error);
    throw new Error(error.message);
  }

  revalidatePath("/forum");
}
