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
    </div>
  );
};

export default Index;
