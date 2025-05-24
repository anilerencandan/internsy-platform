"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    school: "",
  });

  useEffect(() => {
    const seen = localStorage.getItem("welcome-form-seen");
    if (!seen) setOpen(true);
  }, []);

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      localStorage.setItem("welcome-form-seen", "true");
      setOpen(false);
      // form verilerini burada backend'e gönderebilirsin
      console.log("Form verisi:", formData);
    }
  };

  const handleSkip = () => {
    localStorage.setItem("welcome-form-seen", "true");
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>
            {step === 1 ? "Hoş geldin! Bilgilerini doldur" : "Hazırsın!"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 ? (
          <div className="space-y-4 pt-2">
            <Input
              name="firstName"
              placeholder="Adın"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              name="lastName"
              placeholder="Soyadın"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              name="school"
              placeholder="Okulun"
              value={formData.school}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="text-muted-foreground py-4">
            Harika! Artık internsy'de sana uygun stajları keşfetmeye başlayabilirsin.
          </div>
        )}

        <div className="flex justify-between pt-4">
          <Button variant="ghost" onClick={handleSkip}>
            Atla
          </Button>
          <Button onClick={handleNext}>
            {step === 1 ? "Devam" : "Tamamla"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
