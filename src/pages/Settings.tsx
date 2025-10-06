import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, Key, Bell, Shield } from "lucide-react";

export default function Settings() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-2xl font-bold">{t("settings.title")}</h1>
        </div>
      </div>
      <div className="p-6 max-w-2xl">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <User className="h-5 w-5" />
              {t("settings.profile")}
            </h3>
            <div className="space-y-4">
              <div>
                <Label>{t("settings.email")}</Label>
                <Input type="email" defaultValue="partner@example.com" className="mt-1" />
              </div>
              <div>
                <Label>{t("settings.telegram")}</Label>
                <Input defaultValue="@partner_username" className="mt-1" />
              </div>
              <Button variant="gradient">{t("settings.save")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}