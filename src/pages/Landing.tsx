import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LandingHeader } from "@/components/LandingHeader";
import {
  ArrowRight,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Rocket,
  Target,
  DollarSign,
  MessageSquare,
  Bot,
  Brain,
  ChartBar,
  UserCheck,
  Network,
  Briefcase,
  ShoppingBag,
  Cloud,
  MessagesSquare,
  Layers,
  ChevronLeft,
  Store,
  BrainCircuit,
  Megaphone,
  LineChart,
  Share2,
} from "lucide-react";

export default function Landing() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: language === "ru" ? "Масштабируйте бизнес в Telegram" : "Scale Your Telegram Business",
      subtitle: language === "ru" ? "Экосистема из 15+ сервисов для роста продаж и автоматизации" : "Ecosystem of 15+ services for sales growth and automation",
      highlight: language === "ru" ? "до 300%" : "up to 300%",
      highlightText: language === "ru" ? "рост конверсии" : "conversion growth",
    },
    {
      title: language === "ru" ? "Станьте партнером №1" : "Become a Top Partner",
      subtitle: language === "ru" ? "Продвигайте топовые сервисы и получайте до 80% комиссии" : "Promote top services and earn up to 80% commission",
      highlight: "80%",
      highlightText: language === "ru" ? "партнерские выплаты" : "partner payouts",
    },
    {
      title: language === "ru" ? "Автоматизация 24/7" : "24/7 Automation",
      subtitle: language === "ru" ? "ИИ-боты работают круглосуточно без выходных и больничных" : "AI bots work around the clock without breaks",
      highlight: "24/7",
      highlightText: language === "ru" ? "непрерывная работа" : "continuous operation",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const dashboardPath = language === "ru" ? "/ru/dashboard" : "/dashboard";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <LandingHeader />
      
      {/* Hero Section with Slider */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="relative">
            {/* Slider */}
            <div className="mb-12 text-center">
              <div className="relative h-64 md:h-48">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="space-y-6">
                      <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5">
                        <Sparkles className="mr-1 h-3 w-3" />
                        {slide.highlight} {slide.highlightText}
                      </Badge>
                      <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                          {slide.title}
                        </span>
                      </h1>
                      <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="gradient" className="group" asChild>
                <Link to={dashboardPath}>
                  {t("landing.hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">{t("landing.hero.learn")}</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">{language === "ru" ? "Сервисов" : "Services"}</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-muted-foreground">{language === "ru" ? "Партнеров" : "Partners"}</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">$2M+</div>
                <div className="text-sm text-muted-foreground">{language === "ru" ? "Выплачено" : "Paid Out"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("landing.benefits.title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group border-border/40 bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-primary p-3">
              <DollarSign className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{t("landing.benefit1.title")}</h3>
            <p className="text-muted-foreground">{t("landing.benefit1.desc")}</p>
          </Card>

          <Card className="group border-border/40 bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-primary p-3">
              <Target className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{t("landing.benefit2.title")}</h3>
            <p className="text-muted-foreground">{t("landing.benefit2.desc")}</p>
          </Card>

          <Card className="group border-border/40 bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-primary p-3">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{t("landing.benefit3.title")}</h3>
            <p className="text-muted-foreground">{t("landing.benefit3.desc")}</p>
          </Card>

          <Card className="group border-border/40 bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="mb-4 inline-flex rounded-lg bg-gradient-primary p-3">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{t("landing.benefit4.title")}</h3>
            <p className="text-muted-foreground">{t("landing.benefit4.desc")}</p>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-y border-border/40 bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t("landing.services.title")}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 - Telegram Store */}
            <Card className="group relative overflow-hidden border-border/40 bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 p-3">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("landing.service1.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("landing.service1.desc")}</p>
              </div>
            </Card>

            {/* Service 2 - Multi-Messenger */}
            <Card className="group relative overflow-hidden border-border/40 bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-3">
                  <MessagesSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("landing.service2.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("landing.service2.desc")}</p>
              </div>
            </Card>

            {/* Service 3 - Telegram Bots */}
            <Card className="group relative overflow-hidden border-border/40 bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-green-500 to-green-600 p-3">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("landing.service3.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("landing.service3.desc")}</p>
              </div>
            </Card>

            {/* Service 4 - Cloud Business Suite */}
            <Card className="group relative overflow-hidden border-border/40 bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 p-3">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("landing.service4.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("landing.service4.desc")}</p>
              </div>
            </Card>

            {/* Service 5 - Channel Analytics */}
            <Card className="group relative overflow-hidden border-border/40 bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 p-3">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("landing.service5.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("landing.service5.desc")}</p>
              </div>
            </Card>

            {/* Service 6 - Auto-Posting System */}
            <Card className="group relative overflow-hidden border-border/40 bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 p-3">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("landing.service6.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("landing.service6.desc")}</p>
              </div>
            </Card>

            {/* Service 7 - Member Management */}
            <Card className="group relative overflow-hidden border-border/40 bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-red-500 to-red-600 p-3">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("landing.service7.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("landing.service7.desc")}</p>
              </div>
            </Card>

            {/* Service 8 - Integration Platform */}
            <Card className="group relative overflow-hidden border-border/40 bg-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 p-3">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{t("landing.service8.name")}</h3>
                <p className="text-sm text-muted-foreground">{t("landing.service8.desc")}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("landing.testimonials.title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-6 backdrop-blur">
            <p className="mb-4 text-muted-foreground">"{t("landing.testimonial1.text")}"</p>
            <div>
              <p className="font-semibold">{t("landing.testimonial1.author")}</p>
              <p className="text-sm text-muted-foreground">{t("landing.testimonial1.role")}</p>
            </div>
          </Card>

          <Card className="border-border/40 bg-card/50 p-6 backdrop-blur">
            <p className="mb-4 text-muted-foreground">"{t("landing.testimonial2.text")}"</p>
            <div>
              <p className="font-semibold">{t("landing.testimonial2.author")}</p>
              <p className="text-sm text-muted-foreground">{t("landing.testimonial2.role")}</p>
            </div>
          </Card>

          <Card className="border-border/40 bg-card/50 p-6 backdrop-blur">
            <p className="mb-4 text-muted-foreground">"{t("landing.testimonial3.text")}"</p>
            <div>
              <p className="font-semibold">{t("landing.testimonial3.author")}</p>
              <p className="text-sm text-muted-foreground">{t("landing.testimonial3.role")}</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border/40 bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {t("landing.cta.title")}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {t("landing.cta.subtitle")}
          </p>
          <Button size="lg" variant="gradient" className="group" asChild>
            <Link to={dashboardPath}>
              {t("landing.cta.button")}
              <Rocket className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            {t("landing.cta.login")}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 TeleAffiliates. {t("landing.footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
}
