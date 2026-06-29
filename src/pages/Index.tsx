import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const COFFEE_IMG =
  'https://cdn.poehali.dev/projects/0a06cd5a-f821-4e9a-b05a-5446779b85b3/files/b2af9712-1ded-4dc6-ac6c-8b9ceb3d7d6c.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a120b] font-sans text-[#f3e9dd] antialiased">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#1a120b]/70 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-700 text-[#f3e9dd]">
              <Icon name="Coffee" size={20} />
            </div>
            <span className="font-display text-2xl font-bold tracking-wide">BREW</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[#f3e9dd]/60 md:flex">
            <a href="#" className="transition-colors hover:text-[#f3e9dd]">Автоматы</a>
            <a href="#" className="transition-colors hover:text-[#f3e9dd]">Меню</a>
            <a href="#" className="transition-colors hover:text-[#f3e9dd]">Контакты</a>
          </nav>
          <Button className="rounded-xl bg-amber-700 font-semibold text-[#f3e9dd] hover:bg-amber-600">
            Заказать
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-amber-800/30 blur-[140px] animate-glow" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-orange-900/30 blur-[140px] animate-glow" />
        <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up" style={{ opacity: 0 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-700/30 bg-amber-700/10 px-4 py-1.5 text-xs text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Премиальный кофе на каждый день
            </div>
            <h1 className="font-display text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
              Свежий
              <span className="block italic text-amber-500">эспрессо</span>
              в один клик
            </h1>
            <p className="mt-6 max-w-md text-lg text-[#f3e9dd]/60">
              Кофейные автоматы премиум-класса. Зёрна обжарки нашего ростера,
              насыщенная крема и аромат настоящего кофешопа — где угодно.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl bg-amber-700 px-7 font-semibold text-[#f3e9dd] hover:bg-amber-600">
                Попробовать
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-white/15 bg-transparent px-7 text-[#f3e9dd] hover:bg-white/5">
                Смотреть меню
              </Button>
            </div>
            <div className="mt-12 flex gap-10">
              {[
                ['12', 'видов кофе'],
                ['30 сек', 'до чашки'],
                ['100%', 'арабика'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-amber-400">{n}</div>
                  <div className="text-sm text-[#f3e9dd]/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-amber-700/20 to-orange-600/20 blur-2xl" />
            <img
              src={COFFEE_IMG}
              alt="Чашка свежего эспрессо"
              className="relative w-full animate-float rounded-[2rem] border border-white/10 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* БЛОК 2 — ПРОБЛЕМА */}
      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="container">
          <h2 className="text-center font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Это про <span className="italic text-amber-500">вас</span>?
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: '☕',
                title: 'Посетители просят кофе — а вы не кофейня',
                text: 'Офис, шиномонтаж, парикмахерская, магазин. Людям хочется кофе, но варить вручную некому и незачем.',
              },
              {
                emoji: '💸',
                title: 'Место есть — деньги не зарабатывает',
                text: 'Угол в торговом зале, коридор, зона ожидания — простаивают. А могли бы приносить 15 000–30 000 ₽ в месяц.',
              },
              {
                emoji: '🔧',
                title: 'Боитесь возни с техникой и поставщиками',
                text: 'Думаете: сломается — кто чинить будет? Где брать зерно? Кто заправлять? Всё это кажется сложным.',
              },
            ].map((c, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-amber-700/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-700/10 text-3xl transition-transform group-hover:scale-110">
                  {c.emoji}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 text-[#f3e9dd]/55">{c.text}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center font-display text-3xl font-medium leading-snug sm:text-4xl">
            Мы убираем все три проблемы.{' '}
            <span className="italic text-amber-500">Вы просто получаете деньги.</span>
          </p>
        </div>
      </section>

      {/* БЛОК 3 — РЕШЕНИЕ + ОФФЕР */}
      <section className="relative overflow-hidden border-t border-white/5 bg-white/[0.02] py-24">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-800/20 blur-[140px] animate-glow" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
              Три способа зарабатывать на кофе в{' '}
              <span className="italic text-amber-500">Находке</span>
            </h2>
            <p className="mt-5 text-lg text-[#f3e9dd]/60">
              Выбери формат под себя — мы подстроимся под вашу ситуацию:
            </p>
          </div>

          <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
            {[
              {
                emoji: '🤝',
                title: 'Партнёрство — вложений ноль',
                text: 'У вас есть место 60×60 см и розетка 220В. Мы ставим аппарат за свой счёт, загружаем зерно и обслуживаем. Вы получаете 20–35% с каждой чашки.',
                highlight: 'От 8 000 до 25 000 ₽ в месяц чистыми',
                price: '',
                cta: 'Хочу так',
                featured: true,
              },
              {
                emoji: '💼',
                title: 'Свой аппарат под ключ',
                text: 'Покупаете аппарат — мы находим место, запускаем, берём обслуживание на себя. Весь доход — ваш.',
                highlight: 'Окупаемость: 6–10 месяцев',
                price: 'От 180 000 ₽',
                cta: 'Рассчитать стоимость',
                featured: false,
              },
              {
                emoji: '🏢',
                title: 'Корпоративный кофе для офиса',
                text: 'Хотите кофе для сотрудников без найма баристы? Аренда аппарата + полное обслуживание. Сотрудники пьют кофе по 35–50 ₽ — вы ничего не тратите.',
                highlight: 'Аренда от 2 500 ₽/мес',
                price: '',
                cta: 'Узнать подробнее',
                featured: false,
              },
            ].map((c, i) => (
              <div
                key={i}
                className={`flex flex-col rounded-3xl border p-8 transition-all ${
                  c.featured
                    ? 'border-amber-600/50 bg-amber-700/10 shadow-2xl shadow-amber-900/30'
                    : 'border-white/10 bg-white/[0.03] hover:border-amber-700/40 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-700/15 text-3xl">
                  {c.emoji}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 flex-grow text-[#f3e9dd]/55">{c.text}</p>

                <div className="mt-6 rounded-xl border border-amber-700/30 bg-amber-700/10 px-4 py-3 font-medium text-amber-300">
                  {c.highlight}
                </div>

                {c.price && (
                  <div className="mt-4 font-display text-2xl font-bold text-amber-400">{c.price}</div>
                )}

                <Button
                  className={`mt-6 h-12 w-full rounded-xl font-semibold ${
                    c.featured
                      ? 'bg-amber-600 text-[#1a120b] hover:bg-amber-500'
                      : 'bg-white/5 text-[#f3e9dd] hover:bg-white/10'
                  }`}
                >
                  {c.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="h-16 rounded-2xl bg-amber-600 px-10 text-lg font-bold text-[#1a120b] shadow-2xl shadow-amber-900/40 transition-transform hover:scale-105 hover:bg-amber-500"
            >
              Получить бесплатный расчёт для моей точки
              <Icon name="ArrowRight" size={22} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* БЛОК 4 — СОЦИАЛЬНЫЕ ДОКАЗАТЕЛЬСТВА */}
      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="container">
          <h2 className="text-center font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Уже работают в Находке и{' '}
            <span className="italic text-amber-500">Приморье</span>
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                text: 'Поставили автомат в зону ожидания нашего шиномонтажа. Клиенты довольны, мы получаем около 18 000 ₽ в месяц — просто так, пока люди ждут машину. Ни разу не пожалели.',
                name: 'Сергей Д.',
                role: 'шиномонтаж «Колесо», Находка',
              },
              {
                text: 'Взяли аппарат в аренду для офиса на 25 человек. Сотрудники счастливы, никаких очередей на кухне. Кофе обходится в 40 ₽ за чашку — дешевле, чем покупать в кофейне.',
                name: 'Наталья В.',
                role: 'HR-директор, логистическая компания, Находка',
              },
              {
                text: 'Хотел пассивный доход, но не знал с чего начать. Пришёл на консультацию — через неделю аппарат уже стоял в торговом центре. Первый месяц — 22 000 чистыми.',
                name: 'Алексей М.',
                role: 'предприниматель, Находка',
              },
            ].map((r, i) => (
              <div
                key={i}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-amber-700/40 hover:bg-white/[0.05]"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="Star" size={18} className="fill-amber-400" />
                  ))}
                </div>
                <p className="mt-5 flex-grow text-lg italic leading-relaxed text-[#f3e9dd]/80">
                  «{r.text}»
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="font-display text-xl font-semibold text-amber-300">{r.name}</div>
                  <div className="text-sm text-[#f3e9dd]/50">{r.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:grid-cols-4">
            {[
              ['38 +', 'точек в Приморье'],
              ['4 года', 'на рынке Находки'],
              ['от 6 мес', 'окупаемость аппарата'],
              ['0 ₽', 'вложений по схеме партнёрства'],
            ].map(([n, l]) => (
              <div key={l} className="bg-[#1a120b] px-6 py-10 text-center">
                <div className="font-display text-4xl font-bold text-amber-400 sm:text-5xl">{n}</div>
                <div className="mt-2 text-sm text-[#f3e9dd]/55">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;