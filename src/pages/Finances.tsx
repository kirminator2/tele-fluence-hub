import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/MetricCard";
import { DollarSign, CreditCard, Clock, TrendingUp } from "lucide-react";

export default function Finances() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">Финансы</h1>
            <p className="text-sm text-muted-foreground">Управление балансом и выплатами</p>
          </div>
          <Button variant="gradient">Запросить выплату</Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            title="Доступный баланс"
            value="$12,450"
            icon={<DollarSign className="h-5 w-5 text-success" />}
            variant="gradient"
          />
          <MetricCard
            title="В обработке"
            value="$3,200"
            icon={<Clock className="h-5 w-5 text-warning" />}
          />
          <MetricCard
            title="Выплачено за месяц"
            value="$45,890"
            icon={<CreditCard className="h-5 w-5 text-primary" />}
          />
        </div>
      </div>
    </div>
  );
}