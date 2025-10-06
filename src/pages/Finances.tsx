import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/MetricCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { DollarSign, CreditCard, Clock, TrendingUp } from "lucide-react";

export default function Finances() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">{t("finances.title")}</h1>
            <p className="text-sm text-muted-foreground">{t("finances.subtitle")}</p>
          </div>
          <Button variant="gradient">{t("finances.request.payout")}</Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            title={t("finances.available.balance")}
            value="$12,450"
            icon={<DollarSign className="h-5 w-5 text-success" />}
            variant="gradient"
          />
          <MetricCard
            title={t("finances.processing")}
            value="$3,200"
            icon={<Clock className="h-5 w-5 text-warning" />}
          />
          <MetricCard
            title={t("finances.paid.month")}
            value="$45,890"
            icon={<CreditCard className="h-5 w-5 text-primary" />}
          />
        </div>
      </div>
    </div>
  );
}