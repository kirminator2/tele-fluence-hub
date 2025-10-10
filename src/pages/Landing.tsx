import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LandingHeader } from "@/components/LandingHeader";
import {
  ArrowRight,
  Users,
  DollarSign,
  Target,
  BarChart3,
  Rocket,
  ShoppingBag,
  MessagesSquare,
  Bot,
  Cloud,
  LineChart,
  Megaphone,
  UserCheck,
  Network,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Zap,
  TrendingUp,
  Globe,
  Layers,
  BrainCircuit,
} from "lucide-react";

export default function Landing() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const dashboardPath = language === "ru" ? "/ru/dashboard" : "/dashboard";

  const services = [
    { icon: ShoppingBag, name: t("landing.service1.name"), desc: t("landing.service1.desc"), gradient: "from-cyan-500 via-blue-500 to-cyan-600" },
    { icon: MessagesSquare, name: t("landing.service2.name"), desc: t("landing.service2.desc"), gradient: "from-blue-500 via-purple-500 to-blue-600" },
    { icon: Bot, name: t("landing.service3.name"), desc: t("landing.service3.desc"), gradient: "from-emerald-500 via-teal-500 to-emerald-600" },
    { icon: Cloud, name: t("landing.service4.name"), desc: t("landing.service4.desc"), gradient: "from-orange-500 via-red-500 to-orange-600" },
    { icon: LineChart, name: t("landing.service5.name"), desc: t("landing.service5.desc"), gradient: "from-pink-500 via-rose-500 to-pink-600" },
    { icon: Megaphone, name: t("landing.service6.name"), desc: t("landing.service6.desc"), gradient: "from-cyan-500 via-sky-500 to-cyan-600" },
    { icon: UserCheck, name: t("landing.service7.name"), desc: t("landing.service7.desc"), gradient: "from-red-500 via-orange-500 to-red-600" },
    { icon: Network, name: t("landing.service8.name"), desc: t("landing.service8.desc"), gradient: "from-indigo-500 via-violet-500 to-indigo-600" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-60 pointer-events-none" />
      <div className="fixed inset-0 tech-grid opacity-30 pointer-events-none" />
      
      <LandingHeader />
      
      {/* Hero Section - Arc Reactor Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-primary/20">
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse animation-delay-300" />
        
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="relative">
            {/* Carousel with Arrows */}
            <div className="mb-16 text-center relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary/10 border-2 border-primary/30 hover:bg-primary/20 hover:border-primary hover:scale-110 transition-all duration-300 group backdrop-blur-sm shadow-neon"
              >
                <ChevronLeft className="w-8 h-8 text-primary group-hover:text-primary-glow" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-primary/10 border-2 border-primary/30 hover:bg-primary/20 hover:border-primary hover:scale-110 transition-all duration-300 group backdrop-blur-sm shadow-neon"
              >
                <ChevronRight className="w-8 h-8 text-primary group-hover:text-primary-glow" />
              </button>

              <div className="relative h-80 md:h-64 px-16">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <div className="space-y-8">
                      <Badge 
                        variant="outline" 
                        className="mb-6 border-primary/50 bg-primary/10 text-primary px-6 py-2 text-base backdrop-blur-sm arc-reactor"
                      >
                        <Sparkles className="mr-2 h-5 w-5" />
                        {slide.highlight} {slide.highlightText}
                      </Badge>
                      
                      <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                        <span className="gradient-text inline-block">
                          {slide.title}
                        </span>
                      </h1>
                      
                      <p className="mx-auto max-w-3xl text-xl text-foreground/80 md:text-2xl font-light">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Slider Dots */}
              <div className="flex justify-center gap-3 mt-12">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? "w-12 bg-primary shadow-neon" 
                        : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center mb-20">
              <Button 
                size="lg" 
                className="group px-8 py-6 text-lg bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-glow hover:shadow-neon hover:scale-105 energy-beam" 
                asChild
              >
                <Link to={dashboardPath}>
                  <Zap className="mr-2 h-5 w-5" />
                  {t("landing.hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-2 border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300" 
                asChild
              >
                <a href="#services">
                  <Globe className="mr-2 h-5 w-5" />
                  {t("landing.hero.learn")}
                </a>
              </Button>
            </div>

            {/* Stats with Arc Reactor Effect */}
            <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
              {[
                { value: "15+", label: language === "ru" ? "Сервисов" : "Services", icon: Layers },
                { value: "5K+", label: language === "ru" ? "Партнеров" : "Partners", icon: Users },
                { value: "$2M+", label: language === "ru" ? "Выплачено" : "Paid Out", icon: DollarSign },
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="text-center p-6 rounded-xl bg-card/30 border border-primary/20 backdrop-blur-sm card-hover holo-border"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="mb-2 text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-foreground/70 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative container mx-auto px-4 py-24">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl gradient-text">
            {t("landing.benefits.title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: DollarSign, title: t("landing.benefit1.title"), desc: t("landing.benefit1.desc") },
            { icon: Target, title: t("landing.benefit2.title"), desc: t("landing.benefit2.desc") },
            { icon: BarChart3, title: t("landing.benefit3.title"), desc: t("landing.benefit3.desc") },
            { icon: Users, title: t("landing.benefit4.title"), desc: t("landing.benefit4.desc") },
          ].map((benefit, idx) => (
            <Card 
              key={idx}
              className="group relative p-8 border-2 border-primary/20 bg-card/50 backdrop-blur-sm card-hover holo-border overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-primary to-accent p-4 arc-reactor">
                  <benefit.icon className="h-8 w-8 text-background" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Smart Gallery - Services Section */}
      <section id="services" className="relative border-y border-primary/20 bg-gradient-to-b from-background via-primary/5 to-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl gradient-text">
              {t("landing.services.title")}
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {language === "ru" 
                ? "Передовые технологии для вашего успеха" 
                : "Cutting-edge technologies for your success"}
            </p>
          </div>

          {/* 3D Grid Gallery */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 perspective-1000">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`group relative overflow-hidden border-2 border-primary/30 bg-card/80 backdrop-blur-md card-hover holo-border transition-all duration-700 ${
                    hoveredService === idx ? "scale-105 z-10" : "scale-100"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: hoveredService === idx ? "rotateY(5deg) rotateX(5deg)" : "rotateY(0) rotateX(0)",
                  }}
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`} />
                  
                  {/* Energy lines */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 p-8">
                    {/* Icon container with glow */}
                    <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${service.gradient} p-4 shadow-lg transition-all duration-500 ${
                      hoveredService === idx ? "arc-reactor scale-110" : "scale-100"
                    }`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-foreground/70 leading-relaxed">
                      {service.desc}
                    </p>
                    
                    {/* Tech corner accent */}
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Particle effect on hover */}
                  {hoveredService === idx && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative container mx-auto px-4 py-24">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl gradient-text">
            {t("landing.testimonials.title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { text: t("landing.testimonial1.text"), author: t("landing.testimonial1.author"), role: t("landing.testimonial1.role") },
            { text: t("landing.testimonial2.text"), author: t("landing.testimonial2.author"), role: t("landing.testimonial2.role") },
            { text: t("landing.testimonial3.text"), author: t("landing.testimonial3.author"), role: t("landing.testimonial3.role") },
          ].map((testimonial, idx) => (
            <Card 
              key={idx}
              className="p-8 border-2 border-primary/20 bg-card/50 backdrop-blur-sm card-hover holo-border"
            >
              <div className="mb-6 text-4xl text-primary">"</div>
              <p className="mb-6 text-foreground/80 leading-relaxed italic">{testimonial.text}</p>
              <div className="border-t border-primary/20 pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA - Arc Reactor Powered */}
      <section className="relative border-t border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-block mb-8 p-4 rounded-full bg-primary/10 border-2 border-primary/30 arc-reactor">
            <BrainCircuit className="w-16 h-16 text-primary" />
          </div>
          
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl gradient-text">
            {t("landing.cta.title")}
          </h2>
          
          <p className="mb-10 text-xl text-foreground/70 max-w-2xl mx-auto">
            {t("landing.cta.subtitle")}
          </p>
          
          <Button 
            size="lg" 
            className="group px-12 py-8 text-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-glow hover:shadow-neon hover:scale-110 energy-beam" 
            asChild
          >
            <Link to={dashboardPath}>
              <Rocket className="mr-3 h-6 w-6" />
              {t("landing.cta.button")}
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
          
          <p className="mt-6 text-sm text-foreground/60">
            {t("landing.cta.login")}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-primary/20 py-12 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="text-2xl font-bold gradient-text">TeleAffiliates</span>
          </div>
          <p className="text-sm text-foreground/60">
            © 2024 TeleAffiliates. {t("landing.footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  );
}
