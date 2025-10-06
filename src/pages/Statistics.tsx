import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Chart } from "@/components/Chart";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Calendar,
  Download,
  Filter,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  FileSpreadsheet,
} from "lucide-react";

const statisticsData = [
  {
    date: "2024-01-15",
    offer: "Telegram Premium Bot",
    clicks: 1234,
    conversions: 52,
    revenue: "$520",
    cr: "4.2%",
    epc: "$0.42",
  },
  {
    date: "2024-01-15",
    offer: "Channel Statistics Pro",
    clicks: 987,
    conversions: 38,
    revenue: "$570",
    cr: "3.8%",
    epc: "$0.58",
  },
  {
    date: "2024-01-14",
    offer: "Auto-Moderator Bot",
    clicks: 756,
    conversions: 26,
    revenue: "$208",
    cr: "3.4%",
    epc: "$0.28",
  },
  {
    date: "2024-01-14",
    offer: "Neurocomments AI",
    clicks: 2341,
    conversions: 75,
    revenue: "$1,500",
    cr: "3.2%",
    epc: "$0.64",
  },
  {
    date: "2024-01-13",
    offer: "Subscriber Booster",
    clicks: 543,
    conversions: 16,
    revenue: "$192",
    cr: "2.9%",
    epc: "$0.35",
  },
];

const chartData = [
  { date: "10 Jan", revenue: 3400, conversions: 145 },
  { date: "11 Jan", revenue: 4200, conversions: 178 },
  { date: "12 Jan", revenue: 3800, conversions: 162 },
  { date: "13 Jan", revenue: 5100, conversions: 210 },
  { date: "14 Jan", revenue: 4800, conversions: 198 },
  { date: "15 Jan", revenue: 5500, conversions: 225 },
  { date: "16 Jan", revenue: 4900, conversions: 203 },
];

export default function Statistics() {
  const { t } = useLanguage();
  const [dateRange, setDateRange] = useState("week");
  const [groupBy, setGroupBy] = useState("day");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">{t("stats.title")}</h1>
            <p className="text-sm text-muted-foreground">
              {t("stats.subtitle")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4" />
              {t("stats.refresh")}
            </Button>
            <Button variant="gradient" size="sm">
              <Download className="h-4 w-4" />
              {t("stats.export.csv")}
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-card/30 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder={t("stats.period")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">{t("stats.today")}</SelectItem>
              <SelectItem value="yesterday">{t("stats.yesterday")}</SelectItem>
              <SelectItem value="week">{t("stats.last7days")}</SelectItem>
              <SelectItem value="month">{t("stats.last30days")}</SelectItem>
              <SelectItem value="custom">{t("stats.custom")}</SelectItem>
            </SelectContent>
          </Select>

          <Select value={groupBy} onValueChange={setGroupBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t("stats.grouping")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">{t("stats.by.day")}</SelectItem>
              <SelectItem value="week">{t("stats.by.week")}</SelectItem>
              <SelectItem value="month">{t("stats.by.month")}</SelectItem>
              <SelectItem value="offer">{t("stats.by.offer")}</SelectItem>
              <SelectItem value="geo">{t("stats.by.geo")}</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Filter className="h-4 w-4" />
            {t("stats.advanced.filters")}
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {t("stats.total.revenue")}
              </p>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="mt-2 text-2xl font-bold">$32,490</p>
            <p className="mt-1 text-xs text-success">+12.5% {t("stats.vs.previous")}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {t("stats.total.clicks")}
              </p>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="mt-2 text-2xl font-bold">87,654</p>
            <p className="mt-1 text-xs text-success">+8.2% {t("stats.vs.previous")}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {t("stats.total.conversions")}
              </p>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </div>
            <p className="mt-2 text-2xl font-bold">3,421</p>
            <p className="mt-1 text-xs text-destructive">-2.4% {t("stats.vs.previous")}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {t("stats.average.cr")}
              </p>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="mt-2 text-2xl font-bold">3.9%</p>
            <p className="mt-1 text-xs text-success">+0.3% {t("stats.vs.previous")}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{t("stats.revenue.dynamics")}</h3>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span>{t("dashboard.revenue")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary" />
                <span>{t("dashboard.conversions")}</span>
              </div>
            </div>
          </div>
          <Chart
            data={chartData}
            type="line"
            dataKey="revenue"
            xAxisKey="date"
            height={350}
            color="hsl(var(--primary))"
          />
        </div>

        {/* Data Table */}
        <div className="rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border p-6">
            <h3 className="text-lg font-semibold">{t("stats.detailed")}</h3>
            <Button variant="outline" size="sm">
              <FileSpreadsheet className="h-4 w-4" />
              {t("stats.export.excel")}
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("stats.date")}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("stats.offer")}
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("dashboard.clicks")}
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("dashboard.conversions")}
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    CR
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    EPC
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("dashboard.revenue")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {statisticsData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 transition-colors hover:bg-muted/30"
                  >
                    <td className="px-6 py-4 text-sm">{row.date}</td>
                    <td className="px-6 py-4">
                      <span className="font-medium">{row.offer}</span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {row.clicks.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {row.conversions}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {row.cr}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm">{row.epc}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-semibold text-success">
                        {row.revenue}
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
