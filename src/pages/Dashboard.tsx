import { MetricCard } from "@/components/MetricCard";
import { Chart } from "@/components/Chart";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DollarSign,
  MousePointer,
  Target,
  TrendingUp,
  Package,
  Users,
  ArrowRight,
  Download,
  Calendar,
} from "lucide-react";

// Mock data for charts
const revenueData = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 5000 },
  { name: "Thu", value: 2780 },
  { name: "Fri", value: 8890 },
  { name: "Sat", value: 7390 },
  { name: "Sun", value: 6490 },
];

const conversionData = [
  { name: "00:00", value: 2.4 },
  { name: "04:00", value: 3.1 },
  { name: "08:00", value: 4.8 },
  { name: "12:00", value: 5.2 },
  { name: "16:00", value: 4.9 },
  { name: "20:00", value: 3.8 },
  { name: "23:59", value: 3.2 },
];

const topOffers = [
  { id: 1, name: "Telegram Premium Bot", conversions: 234, revenue: "$2,340", cr: "4.2%" },
  { id: 2, name: "Channel Statistics Pro", conversions: 189, revenue: "$1,890", cr: "3.8%" },
  { id: 3, name: "Auto-Moderator Bot", conversions: 156, revenue: "$1,560", cr: "3.5%" },
  { id: 4, name: "Neurocomments AI", conversions: 134, revenue: "$1,340", cr: "3.2%" },
  { id: 5, name: "Subscriber Booster", conversions: 112, revenue: "$1,120", cr: "2.9%" },
];

export default function Dashboard() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">{t("dashboard.title")}</h1>
            <p className="text-sm text-muted-foreground">{t("dashboard.welcome")}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4" />
              {t("dashboard.today")}
            </Button>
            <Button variant="gradient" size="sm">
              <Download className="h-4 w-4" />
              {t("dashboard.export")}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title={t("dashboard.revenue.today")}
            value="$8,490"
            change={12.5}
            changeLabel={t("dashboard.vs.yesterday")}
            icon={<DollarSign className="h-5 w-5 text-primary" />}
            variant="gradient"
          />
          <MetricCard
            title={t("dashboard.clicks")}
            value="12,543"
            change={8.2}
            changeLabel={t("dashboard.vs.yesterday")}
            icon={<MousePointer className="h-5 w-5 text-secondary" />}
          />
          <MetricCard
            title={t("dashboard.conversions")}
            value="523"
            change={-2.4}
            changeLabel={t("dashboard.vs.yesterday")}
            icon={<Target className="h-5 w-5 text-accent" />}
          />
          <MetricCard
            title={t("dashboard.cr")}
            value="4.17%"
            change={5.1}
            changeLabel={t("dashboard.vs.yesterday")}
            icon={<TrendingUp className="h-5 w-5 text-success" />}
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{t("dashboard.revenue.week")}</h3>
              <span className="text-sm text-muted-foreground">$37,610 {t("dashboard.total")}</span>
            </div>
            <Chart
              data={revenueData}
              type="bar"
              dataKey="value"
              color="hsl(var(--primary))"
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{t("dashboard.conversion.hourly")}</h3>
              <span className="text-sm text-muted-foreground">{t("dashboard.cr.average")}: 3.9%</span>
            </div>
            <Chart
              data={conversionData}
              type="line"
              dataKey="value"
              color="hsl(var(--secondary))"
            />
          </div>
        </div>

        {/* Top Offers Table */}
        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border p-6">
            <div>
              <h3 className="text-lg font-semibold">{t("dashboard.top.offers")}</h3>
              <p className="text-sm text-muted-foreground">{t("dashboard.top.offers.desc")}</p>
            </div>
            <Button variant="outline" size="sm">
              {t("dashboard.all.offers")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("dashboard.offer")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("dashboard.conversions")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("dashboard.revenue")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("dashboard.cr")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {topOffers.map((offer, index) => (
                  <tr
                    key={offer.id}
                    className="border-b border-border/50 transition-colors hover:bg-muted/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                          <Package className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-medium">{offer.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium">{offer.conversions}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-success">{offer.revenue}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">
                        {offer.cr}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
