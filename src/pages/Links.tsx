import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  Link2,
  Copy,
  QrCode,
  Download,
  Settings,
  Eye,
  ExternalLink,
  Plus,
} from "lucide-react";

export default function Links() {
  const { t } = useLanguage();
  const [selectedOffer, setSelectedOffer] = useState("");
  const [utmSource, setUtmSource] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const savedLinks = [
    {
      id: 1,
      name: "Telegram канал - Premium Bot",
      link: "https://tg.afflink.com/ref/12345/1?utm_source=telegram",
      clicks: 1234,
      conversions: 52,
    },
    {
      id: 2,
      name: "VK группа - Statistics",
      link: "https://tg.afflink.com/ref/12345/2?utm_source=vk",
      clicks: 890,
      conversions: 34,
    },
    {
      id: 3,
      name: "Instagram - Moderator",
      link: "https://tg.afflink.com/ref/12345/3?utm_source=instagram",
      clicks: 567,
      conversions: 21,
    },
  ];

  const presets = [
    { name: "Telegram канал", source: "telegram", medium: "social" },
    { name: "VK группа", source: "vk", medium: "social" },
    { name: "Instagram", source: "instagram", medium: "social" },
    { name: "YouTube", source: "youtube", medium: "video" },
    { name: "Email рассылка", source: "email", medium: "newsletter" },
    { name: "Сайт/блог", source: "website", medium: "blog" },
  ];

  const generateLink = () => {
    if (!selectedOffer) {
      toast({
        title: t("links.error"),
        description: t("links.error.select"),
        variant: "destructive",
      });
      return;
    }

    let link = `https://tg.afflink.com/ref/12345/${selectedOffer}`;
    const params = [];
    if (utmSource) params.push(`utm_source=${utmSource}`);
    if (utmMedium) params.push(`utm_medium=${utmMedium}`);
    if (utmCampaign) params.push(`utm_campaign=${utmCampaign}`);
    
    if (params.length > 0) {
      link += `?${params.join("&")}`;
    }

    setGeneratedLink(link);
    toast({
      title: "Ссылка сгенерирована",
      description: "Используйте сгенерированную ссылку для продвижения",
    });
  };

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    toast({
      title: "Скопировано",
      description: "Ссылка скопирована в буфер обмена",
    });
  };

  const applyPreset = (preset: typeof presets[0]) => {
    setUtmSource(preset.source);
    setUtmMedium(preset.medium);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">Ссылки</h1>
            <p className="text-sm text-muted-foreground">
              Генератор и управление партнерскими ссылками
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <Tabs defaultValue="generator" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="generator">Генератор</TabsTrigger>
            <TabsTrigger value="saved">Сохраненные</TabsTrigger>
            <TabsTrigger value="materials">Материалы</TabsTrigger>
          </TabsList>

          {/* Generator Tab */}
          <TabsContent value="generator" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Generator Form */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Настройки ссылки</h3>
                
                <div className="space-y-4">
                  {/* Offer Selection */}
                  <div>
                    <Label htmlFor="offer">Выберите оффер</Label>
                    <Select value={selectedOffer} onValueChange={setSelectedOffer}>
                      <SelectTrigger id="offer" className="mt-1">
                        <SelectValue placeholder="Выберите оффер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Telegram Premium Bot</SelectItem>
                        <SelectItem value="2">Channel Statistics Pro</SelectItem>
                        <SelectItem value="3">Auto-Moderator Bot</SelectItem>
                        <SelectItem value="4">Neurocomments AI</SelectItem>
                        <SelectItem value="5">Subscriber Booster</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* UTM Parameters */}
                  <div>
                    <Label>UTM параметры</Label>
                    <div className="mt-2 space-y-2">
                      <Input
                        placeholder="utm_source (например: telegram)"
                        value={utmSource}
                        onChange={(e) => setUtmSource(e.target.value)}
                      />
                      <Input
                        placeholder="utm_medium (например: social)"
                        value={utmMedium}
                        onChange={(e) => setUtmMedium(e.target.value)}
                      />
                      <Input
                        placeholder="utm_campaign (например: summer2024)"
                        value={utmCampaign}
                        onChange={(e) => setUtmCampaign(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Presets */}
                  <div>
                    <Label>Быстрые пресеты</Label>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {presets.map((preset) => (
                        <Button
                          key={preset.name}
                          variant="outline"
                          size="sm"
                          onClick={() => applyPreset(preset)}
                        >
                          {preset.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="gradient"
                    className="w-full"
                    onClick={generateLink}
                  >
                    <Link2 className="h-4 w-4" />
                    Сгенерировать ссылку
                  </Button>
                </div>
              </div>

              {/* Generated Link */}
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    Сгенерированная ссылка
                  </h3>
                  
                  {generatedLink ? (
                    <>
                      <div className="rounded-lg bg-muted p-3">
                        <p className="break-all text-sm font-mono">
                          {generatedLink}
                        </p>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1"
                          onClick={() => copyLink(generatedLink)}
                        >
                          <Copy className="h-4 w-4" />
                          Копировать
                        </Button>
                        <Button variant="outline" size="sm">
                          <QrCode className="h-4 w-4" />
                          QR-код
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                          Превью
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="rounded-lg border-2 border-dashed border-muted p-8 text-center">
                      <Link2 className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Настройте параметры и сгенерируйте ссылку
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">Быстрые действия</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Скачать баннеры
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Настроить постбек
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Проверить лендинг
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Saved Links Tab */}
          <TabsContent value="saved">
            <div className="rounded-xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border p-6">
                <h3 className="text-lg font-semibold">Сохраненные ссылки</h3>
                <Button variant="gradient" size="sm">
                  <Plus className="h-4 w-4" />
                  Добавить
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Название
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Ссылка
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Клики
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Конверсии
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Действия
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedLinks.map((link) => (
                      <tr
                        key={link.id}
                        className="border-b border-border/50 transition-colors hover:bg-muted/30"
                      >
                        <td className="px-6 py-4">
                          <span className="font-medium">{link.name}</span>
                        </td>
                        <td className="px-6 py-4">
                          <p className="max-w-xs truncate text-sm text-muted-foreground">
                            {link.link}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {link.clicks.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-center">{link.conversions}</td>
                        <td className="px-6 py-4 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyLink(link.link)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["Баннеры", "Посты", "Видео", "Лендинги", "Email шаблоны", "Гайды"].map(
                (material) => (
                  <div
                    key={material}
                    className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
                  >
                    <h3 className="mb-2 font-semibold">{material}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Готовые материалы для продвижения
                    </p>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Скачать
                    </Button>
                  </div>
                )
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}