import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const VENDING_IMG =
  'https://cdn.poehali.dev/projects/0a06cd5a-f821-4e9a-b05a-5446779b85b3/files/d6382de4-5c9f-404e-a83e-307a41f54603.jpg';

const Index = () => {
  const [tab, setTab] = useState<'day' | 'week' | 'month'>('week');

  const stats = {
    day: { revenue: '14 280 ₽', sales: 187, machines: 12, growth: '+8%' },
    week: { revenue: '96 540 ₽', sales: 1243, machines: 12, growth: '+12%' },
    month: { revenue: '412 900 ₽', sales: 5318, machines: 12, growth: '+21%' },
  }[tab];

  const bars = [42, 58, 35, 71, 64, 88, 76];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased dark">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black">
              <Icon name="Boxes" size={20} />
            </div>
            <span className="font-display text-lg font-extrabold tracking-tight">VendCore</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#cabinet" className="transition-colors hover:text-foreground">Личный кабинет</a>
            <a href="#features" className="transition-colors hover:text-foreground">Возможности</a>
            <a href="#contacts" className="transition-colors hover:text-foreground">Контакты</a>
          </nav>
          <Button className="rounded-xl bg-lime-400 font-semibold text-black hover:bg-lime-300">
            Войти
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-lime-500/20 blur-[120px] animate-glow" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px] animate-glow" />
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up" style={{ opacity: 0 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-lime-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
              Умный вендинг нового поколения
            </div>
            <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Доход в каждом
              <span className="block text-lime-400">автомате</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Современные вендинговые аппараты с личным кабинетом. Следите за продажами
              и доходами в реальном времени — из любой точки мира.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl bg-lime-400 px-7 font-semibold text-black hover:bg-lime-300">
                Открыть кабинет
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-white/15 bg-transparent px-7 hover:bg-white/5">
                Узнать подробнее
              </Button>
            </div>
            <div className="mt-12 flex gap-10">
              {[
                ['1 200+', 'аппаратов'],
                ['24/7', 'мониторинг'],
                ['99.9%', 'аптайм'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold">{n}</div>
                  <div className="text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-lime-400/20 to-teal-400/20 blur-2xl" />
            <img
              src={VENDING_IMG}
              alt="Вендинговый автомат VendCore"
              className="relative w-full animate-float rounded-[2rem] border border-white/10 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CABINET / DASHBOARD */}
      <section id="cabinet" className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Личный кабинет
            </h2>
            <p className="mt-4 text-muted-foreground">
              Полная картина бизнеса: продажи, доходы и статус каждого аппарата на одном экране.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-card/40 p-6 backdrop-blur sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-glow rounded-full bg-lime-400" />
                <span className="text-sm font-medium">Данные в реальном времени</span>
              </div>
              <div className="flex gap-1 rounded-xl border border-white/10 bg-background/50 p-1 text-sm">
                {(['day', 'week', 'month'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`rounded-lg px-4 py-1.5 transition-all ${
                      tab === t ? 'bg-lime-400 font-semibold text-black' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {t === 'day' ? 'День' : t === 'week' ? 'Неделя' : 'Месяц'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-4">
              {[
                { icon: 'Wallet', label: 'Доход', value: stats.revenue, accent: true },
                { icon: 'ShoppingBag', label: 'Продаж', value: stats.sales },
                { icon: 'Boxes', label: 'Аппаратов', value: stats.machines },
                { icon: 'TrendingUp', label: 'Рост', value: stats.growth },
              ].map((c) => (
                <div
                  key={c.label}
                  className={`rounded-2xl border p-5 ${
                    c.accent ? 'border-lime-400/30 bg-lime-400/10' : 'border-white/10 bg-background/40'
                  }`}
                >
                  <Icon name={c.icon} size={20} className={c.accent ? 'text-lime-400' : 'text-muted-foreground'} />
                  <div className="mt-4 font-display text-2xl font-bold">{c.value}</div>
                  <div className="text-sm text-muted-foreground">{c.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-background/40 p-6">
              <div className="mb-4 text-sm font-medium text-muted-foreground">Динамика продаж</div>
              <div className="flex h-40 items-end justify-between gap-3">
                {bars.map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-lime-400/40 to-lime-400 transition-all hover:from-lime-300 hover:to-lime-200"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{['Пн','Вт','Ср','Чт','Пт','Сб','Вс'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: 'Activity', title: 'Аналитика 24/7', text: 'Следите за продажами и доходами каждого аппарата в любой момент.' },
              { icon: 'Bell', title: 'Уведомления', text: 'Узнавайте о пустых ячейках и сбоях раньше клиентов.' },
              { icon: 'CreditCard', title: 'Любая оплата', text: 'Карты, СБП, наличные — принимайте платежи без ограничений.' },
            ].map((f) => (
              <div key={f.title} className="group rounded-3xl border border-white/10 bg-card/40 p-8 transition-all hover:border-lime-400/30 hover:bg-white/[0.04]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition-transform group-hover:scale-110">
                  <Icon name={f.icon} size={24} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="border-t border-white/5 bg-white/[0.02] py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Свяжитесь с нами
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Расскажем, как установить вендинговый аппарат и подключить личный кабинет
              под ваш бизнес.
            </p>
            <div className="mt-10 space-y-5">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (800) 555-35-35' },
                { icon: 'Mail', label: 'Почта', value: 'hello@vendcore.ru' },
                { icon: 'MapPin', label: 'Офис', value: 'Москва, ул. Тверская, 1' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-lime-400/10 text-lime-400">
                    <Icon name={c.icon} size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-card/40 p-8 backdrop-blur">
            <div className="space-y-4">
              <Input placeholder="Ваше имя" className="h-12 rounded-xl border-white/10 bg-background/50" />
              <Input placeholder="Телефон или e-mail" className="h-12 rounded-xl border-white/10 bg-background/50" />
              <Textarea placeholder="Сообщение" rows={4} className="rounded-xl border-white/10 bg-background/50" />
              <Button className="h-12 w-full rounded-xl bg-lime-400 font-semibold text-black hover:bg-lime-300">
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime-400 text-black">
              <Icon name="Boxes" size={16} />
            </div>
            <span className="font-display font-bold text-foreground">VendCore</span>
          </div>
          <span>© 2026 VendCore. Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
