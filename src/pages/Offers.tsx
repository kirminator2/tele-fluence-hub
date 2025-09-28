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
import {
  Search,
  Filter,
  Star,
  Copy,
  ExternalLink,
  TrendingUp,
  Globe,
  DollarSign,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const offers = [
  {
    id: 1,
    name: "Telegram Premium Bot",
    description: "Автоматизация премиум функций Telegram",
    category: "Боты",
    payout: "$10",
    epc: "$2.40",
    cr: "4.2%",
    status: "active",
    geo: ["RU", "KZ", "BY"],
    image: "/api/placeholder/100/100",
  },
  {
    id: 2,
    name: "Channel Statistics Pro",
    description: "Расширенная аналитика для каналов",
    category: "Аналитика",
    payout: "$15",
    epc: "$3.20",
    cr: "3.8%",
    status: "active",
    geo: ["RU", "UA"],
    image: "/api/placeholder/100/100",
  },
  {
    id: 3,
    name: "Auto-Moderator Bot",
    description: "Автоматическая модерация контента",
    category: "Боты",
    payout: "$8",
    epc: "$1.80",
    cr: "3.5%",
    status: "active",
    geo: ["RU", "KZ", "BY", "UA"],
    image: "/api/placeholder/100/100",
  },
  {
    id: 4,
    name: "Neurocomments AI",
    description: "ИИ генерация комментариев",
    category: "AI",
    payout: "$20",
    epc: "$4.50",
    cr: "3.2%",
    status: "hot",
    geo: ["RU"],
    image: "/api/placeholder/100/100",
  },
  {
    id: 5,
    name: "Subscriber Booster",
    description: "Органическое привлечение подписчиков",
    category: "Продвижение",
    payout: "$12",
    epc: "$2.10",
    cr: "2.9%",
    status: "active",
    geo: ["RU", "KZ"],
    image: "/api/placeholder/100/100",
  },
  {
    id: 6,
    name: "Content Scheduler Pro",
    description: "Планировщик публикаций с AI",
    category: "Автоматизация",
    payout: "$18",
    epc: "$3.80",
    cr: "4.5%",
    status: "new",
    geo: ["RU", "BY"],
    image: "/api/placeholder/100/100",
  },
];

export default function Offers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleCopyLink = (offerId: number) => {
    const link = `https://tg.afflink.com/ref/12345/offer/${offerId}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Ссылка скопирована",
      description: "Партнерская ссылка скопирована в буфер обмена",
    });
  };

  const toggleFavorite = (offerId: number) => {
    setFavorites((prev) =>
      prev.includes(offerId)
        ? prev.filter((id) => id !== offerId)
        : [...prev, offerId]
    );
  };

  const filteredOffers = offers.filter(
    (offer) =>
      (selectedCategory === "all" || offer.category === selectedCategory) &&
      offer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">Офферы</h1>
            <p className="text-sm text-muted-foreground">
              Каталог доступных предложений
            </p>
          </div>
          <Button variant="gradient">
            <Star className="h-4 w-4" />
            Избранные ({favorites.length})
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-card/30 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск офферов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              <SelectItem value="Боты">Боты</SelectItem>
              <SelectItem value="Аналитика">Аналитика</SelectItem>
              <SelectItem value="AI">AI</SelectItem>
              <SelectItem value="Продвижение">Продвижение</SelectItem>
              <SelectItem value="Автоматизация">Автоматизация</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4" />
            Фильтры
          </Button>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredOffers.map((offer) => (
            <div
              key={offer.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50"
            >
              {/* Status Badge */}
              {offer.status === "hot" && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground">
                  🔥 HOT
                </div>
              )}
              {offer.status === "new" && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-success px-2 py-1 text-xs font-semibold text-success-foreground">
                  NEW
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{offer.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {offer.category}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(offer.id)}
                    className="h-8 w-8"
                  >
                    <Star
                      className={`h-4 w-4 ${
                        favorites.includes(offer.id)
                          ? "fill-warning text-warning"
                          : "text-muted-foreground"
                      }`}
                    />
                  </Button>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm text-muted-foreground">
                  {offer.description}
                </p>

                {/* Metrics */}
                <div className="mb-4 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-muted/50 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Выплата</p>
                    <p className="text-sm font-semibold text-success">
                      {offer.payout}
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-2 text-center">
                    <p className="text-xs text-muted-foreground">EPC</p>
                    <p className="text-sm font-semibold">{offer.epc}</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-2 text-center">
                    <p className="text-xs text-muted-foreground">CR</p>
                    <p className="text-sm font-semibold">{offer.cr}</p>
                  </div>
                </div>

                {/* GEO */}
                <div className="mb-4 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <div className="flex gap-1">
                    {offer.geo.map((country) => (
                      <span
                        key={country}
                        className="rounded bg-muted px-2 py-0.5 text-xs"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="gradient"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleCopyLink(offer.id)}
                  >
                    <Copy className="h-4 w-4" />
                    Получить ссылку
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}