import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  Award,
  TrendingDown,
  UserPlus,
  Building2,
  Workflow,
  ChevronLeft,
  Store,
  BrainCircuit,
  Megaphone,
  LineChart,
  Share2,
} from "lucide-react";

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Масштабируйте бизнес в Telegram",
      subtitle: "Экосистема из 15+ сервисов для роста продаж и автоматизации",
      highlight: "до 300%",
      highlightText: "рост конверсии",
    },
    {
      title: "Станьте партнером №1",
      subtitle: "Продвигайте топовые сервисы и получайте до 80% комиссии",
      highlight: "80%",
      highlightText: "партнерские выплаты",
    },
    {
      title: "Автоматизация 24/7",
      subtitle: "ИИ-боты работают круглосуточно без выходных и больничных",
      highlight: "24/7",
      highlightText: "непрерывная работа",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Bot,
      title: "AI Боты-консультанты",
      category: "Автоматизация",
      description: "Интеллектуальные боты с GPT-4 для консультаций, продаж и поддержки клиентов. Обучаются на вашей базе знаний.",
      features: ["Обработка до 10000 запросов/день", "Интеграция с CRM", "Мультиязычность", "Аналитика диалогов"],
      price: "от 9,990₽/мес",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Store,
      title: "Telegram Shop Pro",
      category: "E-commerce",
      description: "Полноценный магазин в Telegram с каталогом, корзиной, оплатой и доставкой. Интеграция с 1С и складом.",
      features: ["Каталог до 50000 товаров", "20+ способов оплаты", "Управление заказами", "Промокоды и скидки"],
      price: "от 14,990₽/мес",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: BrainCircuit,
      title: "NeuroMarketing AI",
      category: "Маркетинг",
      description: "ИИ-система для создания продающего контента, анализа аудитории и оптимизации рекламных кампаний.",
      features: ["Генерация постов", "A/B тестирование", "Прогноз эффективности", "Анализ конкурентов"],
      price: "от 19,990₽/мес",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessagesSquare,
      title: "MultiMessenger Cloud",
      category: "Коммуникации",
      description: "Единый центр управления всеми Telegram-аккаунтами и каналами. Массовые рассылки и автоответы.",
      features: ["До 100 аккаунтов", "Умные рассылки", "CRM интеграция", "Защита от бана"],
      price: "от 7,990₽/мес",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: LineChart,
      title: "Analytics Pro",
      category: "Аналитика",
      description: "Полная аналитика Telegram-каналов с прогнозами роста и рекомендациями по контенту.",
      features: ["Real-time метрики", "Анализ аудитории", "Отчеты PDF", "API доступ"],
      price: "от 4,990₽/мес",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Share2,
      title: "Network Growth",
      category: "Рост аудитории",
      description: "Система привлечения целевых подписчиков через партнерскую сеть из 10000+ каналов.",
      features: ["Гарантия качества", "Таргетинг по интересам", "Защита от ботов", "Оплата за результат"],
      price: "от 99₽/подписчик",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Cloud,
      title: "Cloud CRM System",
      category: "Управление",
      description: "Облачная CRM для управления клиентами, сделками и командой прямо в Telegram.",
      features: ["Воронка продаж", "Задачи и календарь", "Документооборот", "Интеграции"],
      price: "от 12,990₽/мес",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Megaphone,
      title: "AdManager Plus",
      category: "Реклама",
      description: "Автоматизация рекламных кампаний с умным таргетингом и оптимизацией бюджета.",
      features: ["Автобиддинг", "Ретаргетинг", "Креативы AI", "ROI tracking"],
      price: "от 24,990₽/мес",
      color: "from-red-500 to-red-600",
    },
  ];

  const stats = [
    { value: "50K+", label: "Активных бизнесов", icon: Building2 },
    { value: "2.5M+", label: "Обработано сообщений/день", icon: MessageSquare },
    { value: "98.7%", label: "Удовлетворенность клиентов", icon: Award },
    { value: "15 мин", label: "Среднее время внедрения", icon: Zap },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Экономия до 70%",
      description: "Сократите расходы на персонал и маркетинг",
    },
    {
      icon: TrendingUp,
      title: "Рост продаж x3",
      description: "Увеличьте конверсию и средний чек",
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Защита данных и соответствие 152-ФЗ",
    },
    {
      icon: UserPlus,
      title: "Лояльность клиентов",
      description: "Повысьте NPS и удержание на 40%",
    },
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      company: "ООО «ТехноПром»",
      text: "За 3 месяца увеличили продажи на 250% благодаря AI-ботам и автоматизации.",
      rating: 5,
    },
    {
      name: "Мария Иванова",
      company: "Beauty Studio",
      text: "Telegram Shop Pro полностью заменил нам сайт. Конверсия выросла в 4 раза!",
      rating: 5,
    },
    {
      name: "Дмитрий Козлов",
      company: "Digital Agency",
      text: "Как партнер зарабатываю 300-500к в месяц на комиссиях. Лучшая партнерка!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg">
                <Network className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  TelegramCPA
                </span>
                <p className="text-xs text-muted-foreground">Business Ecosystem</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Сервисы
              </a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                Преимущества
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Тарифы
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                Отзывы
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" className="hidden sm:flex">
                <MessageSquare className="w-4 h-4 mr-2" />
                Консультация
              </Button>
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-primary to-primary-glow text-white hover:opacity-90 shadow-lg">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Кабинет партнера
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Официальный партнер Telegram
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <Shield className="w-3 h-3 mr-1" />
                Лицензия №2024-TG-5847
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                <Award className="w-3 h-3 mr-1" />
                ТОП-1 в России 2024
              </Badge>
            </div>

            {/* Slider */}
            <div className="relative h-[300px] mb-12">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-10'
                  }`}
                >
                  <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{slide.highlight}</span>
                    <span className="text-sm text-muted-foreground">{slide.highlightText}</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-white hover:opacity-90 shadow-xl group">
                Попробовать бесплатно
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 shadow-lg">
                <Users className="w-5 h-5 mr-2" />
                Стать партнером (до 80% комиссии)
              </Button>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-primary/10"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <Layers className="w-3 h-3 mr-1" />
              15+ профессиональных сервисов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Все инструменты для роста в Telegram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Комплексная экосистема для автоматизации продаж, маркетинга и управления бизнесом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-card/80 backdrop-blur"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"
                     style={{ background: `linear-gradient(135deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` }} />
                
                <div className="p-6 relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {service.category}
                  </Badge>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                    <Button size="sm" variant="ghost" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Подробнее
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Target className="w-3 h-3 mr-1" />
              Преимущества платформы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают TelegramCPA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Проверенные решения для роста вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/20 mx-auto mb-4 flex items-center justify-center group-hover:from-primary group-hover:to-primary-glow transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200">
              <Award className="w-3 h-3 mr-1" />
              50,000+ довольных клиентов
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Отзывы наших партнеров
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="p-12 text-center bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы масштабировать бизнес?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Начните бесплатный тестовый период на 14 дней и убедитесь в эффективности наших решений
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-white hover:opacity-90 shadow-xl">
                <Rocket className="w-5 h-5 mr-2" />
                Начать бесплатно
              </Button>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
                  <Users className="w-5 h-5 mr-2" />
                  Войти в кабинет партнера
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                "✓ Без кредитной карты",
                "✓ 14 дней бесплатно",
                "✓ Техподдержка 24/7",
                "✓ Обучение включено",
              ].map((item, index) => (
                <span key={index} className="flex items-center gap-2 text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">TelegramCPA</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Официальный партнер Telegram для бизнеса. Лицензия №2024-TG-5847
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Продукты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">AI Боты</a>
                <a href="#" className="block hover:text-foreground transition-colors">Telegram Shop</a>
                <a href="#" className="block hover:text-foreground transition-colors">Аналитика</a>
                <a href="#" className="block hover:text-foreground transition-colors">CRM System</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Партнерам</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-foreground transition-colors">Условия партнерства</a>
                <a href="#" className="block hover:text-foreground transition-colors">Обучение</a>
                <a href="#" className="block hover:text-foreground transition-colors">API документация</a>
                <a href="#" className="block hover:text-foreground transition-colors">Маркетинг материалы</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📞 8 (800) 555-35-35</p>
                <p>📧 partners@telegramcpa.ru</p>
                <p>💬 @telegramcpa_support</p>
                <div className="flex gap-3 mt-4">
                  <Button size="sm" variant="outline">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 TelegramCPA. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
              <a href="#" className="hover:text-foreground transition-colors">Договор-оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}