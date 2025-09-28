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
  { date: "10 янв", revenue: 3400, conversions: 145 },
  { date: "11 янв", revenue: 4200, conversions: 178 },
  { date: "12 янв", revenue: 3800, conversions: 162 },
  { date: "13 янв", revenue: 5100, conversions: 210 },
  { date: "14 янв", revenue: 4800, conversions: 198 },
  { date: "15 янв", revenue: 5500, conversions: 225 },
  { date: "16 янв", revenue: 4900, conversions: 203 },
];

export default function Statistics() {
  const [dateRange, setDateRange] = useState("week");
  const [groupBy, setGroupBy] = useState("day");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">Статистика</h1>
            <p className="text-sm text-muted-foreground">
              Детальная аналитика вашей партнерской активности
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4" />
              Обновить
            </Button>
            <Button variant="gradient" size="sm">
              <Download className="h-4 w-4" />
              Экспорт CSV
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
              <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Сегодня</SelectItem>
              <SelectItem value="yesterday">Вчера</SelectItem>
              <SelectItem value="week">Последние 7 дней</SelectItem>
              <SelectItem value="month">Последние 30 дней</SelectItem>
              <SelectItem value="custom">Выбрать период</SelectItem>
            </SelectContent>
          </Select>

          <Select value={groupBy} onValueChange={setGroupBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Группировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">По дням</SelectItem>
              <SelectItem value="week">По неделям</SelectItem>
              <SelectItem value="month">По месяцам</SelectItem>
              <SelectItem value="offer">По офферам</SelectItem>
              <SelectItem value="geo">По странам</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Filter className="h-4 w-4" />
            Расширенные фильтры
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="p-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                Общий доход
              </p>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="mt-2 text-2xl font-bold">$32,490</p>
            <p className="mt-1 text-xs text-success">+12.5% vs прошлый период</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                Клики
              </p>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="mt-2 text-2xl font-bold">87,654</p>
            <p className="mt-1 text-xs text-success">+8.2% vs прошлый период</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                Конверсии
              </p>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </div>
            <p className="mt-2 text-2xl font-bold">3,421</p>
            <p className="mt-1 text-xs text-destructive">-2.4% vs прошлый период</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                Средний CR
              </p>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <p className="mt-2 text-2xl font-bold">3.9%</p>
            <p className="mt-1 text-xs text-success">+0.3% vs прошлый период</p>
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Динамика дохода и конверсий</h3>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span>Доход</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary" />
                <span>Конверсии</span>
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
            <h3 className="text-lg font-semibold">Детальная статистика</h3>
            <Button variant="outline" size="sm">
              <FileSpreadsheet className="h-4 w-4" />
              Экспорт в Excel
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Дата
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Оффер
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Клики
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Конверсии
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    CR
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    EPC
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Доход
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