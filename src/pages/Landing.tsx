import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
} from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: Bot,
      title: "Боты-модераторы",
      description: "Автоматическая модерация контента в Telegram каналах 24/7",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Brain,
      title: "Нейрокомментинг",
      description: "ИИ-генерация вовлекающих комментариев для повышения активности",
      gradient: "from-accent to-accent-glow",
    },
    {
      icon: ChartBar,
      title: "Аналитика",
      description: "Детальная статистика по всем метрикам в реальном времени",
      gradient: "from-secondary to-secondary-glow",
    },
    {
      icon: UserCheck,
      title: "Привлечение подписчиков",
      description: "Автоматизированное привлечение целевой аудитории",
      gradient: "from-primary-glow to-accent",
    },
  ];

  const stats = [
    { value: "10K+", label: "Активных партнеров" },
    { value: "50M+", label: "Конверсий в месяц" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "24/7", label: "Поддержка" },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Высокие выплаты",
      description: "До 80% от дохода с привлеченных клиентов",
    },
    {
      icon: Zap,
      title: "Моментальные выплаты",
      description: "Вывод средств на карту или крипто без задержек",
    },
    {
      icon: Shield,
      title: "Надежность",
      description: "Защищенная платформа с гарантией выплат",
    },
    {
      icon: Globe,
      title: "Глобальный охват",
      description: "Работайте с любой точки мира",
    },
  ];

  const offers = [
    { name: "Bot Moderator Pro", epc: "12.5", cr: "42%", type: "RevShare" },
    { name: "AI Comments Master", epc: "8.3", cr: "38%", type: "CPA" },
    { name: "Channel Growth Pack", epc: "15.7", cr: "45%", type: "Hybrid" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
        
        {/* Navigation */}
        <nav className="relative z-10 border-b border-border/50 backdrop-blur-sm bg-background/80">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  TelegramCPA
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <Link to="/dashboard">
                  <Button variant="outline" className="border-primary/20 hover:border-primary/40">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Личный кабинет
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button className="bg-gradient-primary text-white hover:opacity-90">
                    Начать зарабатывать
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Экосистема Telegram-сервисов
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Монетизируйте
              </span>
              <br />
              <span className="text-foreground">
                Telegram трафик
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-100">
              Единая CPA-сеть с 10+ инновационными сервисами для Telegram.
              <br />
              Высокие конверсии, моментальные выплаты, премиум поддержка.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 group">
                  Стать партнером
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
                <MessageSquare className="w-4 h-4 mr-2" />
                Telegram чат
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Zap className="w-3 h-3 mr-1" />
              Продукты экосистемы
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Инновационные сервисы для Telegram
            </h2>
            <p className="text-lg text-muted-foreground">
              Продвигайте передовые решения для автоматизации и роста каналов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Offers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              <TrendingUp className="w-3 h-3 mr-1" />
              Топ офферы
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Лучшие предложения месяца
            </h2>
            <p className="text-lg text-muted-foreground">
              Высокая конверсия и максимальные выплаты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary">{offer.type}</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{offer.name}</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">EPC</div>
                      <div className="text-2xl font-bold text-primary">${offer.epc}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">CR</div>
                      <div className="text-2xl font-bold text-accent">{offer.cr}</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-primary text-white hover:opacity-90">
                    Получить ссылку
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40">
                Смотреть все офферы
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Target className="w-3 h-3 mr-1" />
              Преимущества
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground">
              Лучшие условия для партнеров в индустрии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="bg-gradient-primary text-white p-12 text-center border-0">
            <h2 className="text-4xl font-bold mb-4">
              Готовы начать зарабатывать?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к лидерам рынка CPA в Telegram
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Users className="w-4 h-4 mr-2" />
                  Регистрация партнера
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <BarChart3 className="w-4 h-4 mr-2" />
                Посмотреть статистику
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                "Без скрытых комиссий",
                "Персональный менеджер",
                "API для автоматизации",
                "Еженедельные выплаты",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TelegramCPA
              </span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="hover:text-foreground transition-colors">Условия</a>
              <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
              <a href="#" className="hover:text-foreground transition-colors">API</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 TelegramCPA. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}