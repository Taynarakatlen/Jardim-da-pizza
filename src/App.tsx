import { useEffect, useRef, useState, type ReactNode } from 'react';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  ChevronRight, 
  UtensilsCrossed, 
  Flame, 
  ChefHat,
  X,
  MessageCircle,
  Menu as MenuIcon
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from './lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial Reveal
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      });

      gsap.from('.hero-image', {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      });

      // Parallax for Hero Image
      gsap.to('.hero-image', {
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: 100,
        scale: 1.2
      });

      // Section Titles Reveal
      const sections = ['#especialidades', '#info'];
      sections.forEach(section => {
        gsap.from(`${section} .section-title`, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Special Pizza Images Reveal
      gsap.from('.special-pizza', {
        scrollTrigger: {
          trigger: '#especialidades',
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Menu Cards Stagger
      gsap.from('.menu-card', {
        scrollTrigger: {
          trigger: '#menu',
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Info Cards Stagger
      gsap.from('.info-card', {
        scrollTrigger: {
          trigger: '#info',
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const whatsappNumber = "5581982588939";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido.`;

  return (
    <div className="min-h-screen selection:bg-brand-imperial-red selection:text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 py-0 h-[80px] px-6 lg:px-[60px] flex justify-between items-center border-b border-white/5 bg-brand-rich-black/80 backdrop-blur-md transition-all duration-300">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-[1px] uppercase whitespace-nowrap">
            JARDIM <span className="text-brand-imperial-red">DA</span> PIZZA
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-[32px] text-[13px] font-medium uppercase tracking-[1.5px] text-white/60">
          <a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a>
          <a href="#info" className="hover:text-white transition-colors">Localização</a>
        </nav>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block px-[28px] py-[12px] bg-brand-imperial-red text-white rounded-[4px] font-bold text-[14px] uppercase tracking-wider hover:bg-brand-selective-yellow hover:text-brand-rich-black transition-all duration-300 shadow-[0_0_20px_rgba(230,57,70,0.4)] active:scale-95"
        >
          Pedir Agora
        </a>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 top-[80px] bg-brand-rich-black z-40 flex flex-col p-10 gap-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}>
          <a 
            href="#especialidades" 
            className="text-4xl font-serif font-bold uppercase tracking-tighter"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Especialidades
          </a>
          <a 
            href="#info" 
            className="text-4xl font-serif font-bold uppercase tracking-tighter"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Localização
          </a>
          <div className="pt-10 mt-auto border-t border-white/10">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-6 bg-brand-imperial-red text-white rounded-xl font-bold uppercase tracking-widest"
            >
              <Phone className="w-5 h-5" /> Fazer Pedido
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[calc(100vh-80px)] lg:min-h-screen grid grid-cols-1 lg:grid-cols-[55%_45%] overflow-hidden pt-[80px]">
        {/* Left Side Content */}
        <div className="p-6 md:p-[60px] flex flex-col justify-center gap-8 relative z-10 hero-content">
          <div className="pill w-fit border-brand-selective-yellow text-brand-selective-yellow">
            Piedade • Jaboatão dos Guararapes
          </div>
          
          <h1 className="title-fluid font-black text-balance">
            A Arte de Transformar <br />
            <span className="text-brand-imperial-red italic">Massa</span> e <span className="text-brand-selective-yellow">Fogo</span> <br />
            em Emoção.
          </h1>

          {/* Mobile Image (shown only on mobile/tablet) */}
          <div className="lg:hidden relative w-full aspect-square max-w-[350px] mx-auto overflow-hidden rounded-full shadow-[0_0_80px_rgba(230,57,70,0.2)] border-2 border-white/5 my-4">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200" 
              alt="Pizza Artesanal Mobile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-base md:text-lg text-white/60 max-w-[480px] leading-relaxed font-light">
            No coração de Piedade, a Jardim Da Pizza une a tradição artesanal ao sabor que sua noite merece.
          </p>

          <div className="flex flex-wrap gap-6 md:gap-10 items-center">
            <div className="flex flex-col gap-1">
              <div className="flex text-brand-selective-yellow">
                <Star fill="currentColor" className="w-4 h-4" />
                <Star fill="currentColor" className="w-4 h-4" />
                <Star fill="currentColor" className="w-4 h-4" />
                <Star fill="currentColor" className="w-4 h-4" />
                <Star fill="currentColor" className="w-4 h-4" />
              </div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[1px] opacity-50 font-bold text-nowrap">5.0 Estrelas no Google</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold">Terça a Domingo</span>
              <span className="text-xs opacity-60">A partir das 18h00</span>
            </div>
          </div>

          <div className="mt-5 p-6 border border-white/10 rounded-xl bg-white/[0.02] flex items-center gap-4 max-w-[400px]">
            <div className="h-10 w-10 rounded-full bg-brand-basil-green flex items-center justify-center text-lg">
              📍
            </div>
            <div className="text-sm leading-snug">
              <strong className="block mb-1">Endereço Principal</strong>
              <span className="opacity-70">Rua São Sebastião, 1176</span>
            </div>
          </div>
        </div>

        {/* Right Side Visuals */}
        <div className="hidden lg:flex relative bg-[radial-gradient(circle_at_center,#2d0a0d_0%,#1a0507_100%)] flex-col justify-center p-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5),0_0_40px_rgba(230,57,70,0.2)] hero-image">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200" 
              alt="Pizza Artesanal" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="mt-auto grid gap-4 relative z-10">
            <div className="bg-brand-surface border border-white/5 p-5 rounded-xl flex justify-between items-center hover:border-white/10 transition-all cursor-pointer">
              <span className="font-serif text-xl">As Clássicas</span>
              <span className="text-[12px] uppercase text-brand-imperial-red font-bold">Ver Seleção →</span>
            </div>
            <div className="bg-brand-surface border border-white/5 p-5 rounded-xl flex justify-between items-center hover:border-white/10 transition-all cursor-pointer">
              <span className="font-serif text-xl">Especiais da Casa</span>
              <span className="text-[12px] uppercase text-brand-selective-yellow font-bold">Exclusivas →</span>
            </div>
            <div className="bg-brand-surface border border-white/5 p-5 rounded-xl flex justify-between items-center hover:border-white/10 transition-all cursor-pointer">
              <span className="font-serif text-xl">Doces Irresistíveis</span>
              <span className="text-[12px] uppercase text-brand-basil-green font-bold">Sobremesas →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Especialidades Section */}
      <section id="especialidades" className="py-24 bg-brand-rich-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="section-title">
              <span className="text-brand-selective-yellow font-bold uppercase tracking-widest text-sm mb-4 block">Favoritos da Casa</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
                NOSSAS <br /> ESPECIALIDADES
              </h2>
            </div>
            <p className="text-white/40 max-w-md text-sm leading-relaxed text-balance">
              Uma seleção dos preparos mais amados, onde a massa artesanal encontra o equilíbrio perfeito de sabores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pizza 1 */}
            <div className="special-pizza group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800"
                alt="Pizza Jardim"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-rich-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <span className="text-brand-imperial-red text-[10px] font-bold uppercase tracking-widest mb-1 block">Assinatura</span>
                <h3 className="text-xl font-serif font-bold uppercase tracking-wide">Pizza Jardim</h3>
              </div>
            </div>

            {/* Pizza 3 */}
            <div className="special-pizza group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800"
                alt="Napolitana"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-rich-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <span className="text-brand-basil-green text-[10px] font-bold uppercase tracking-widest mb-1 block">Clássica</span>
                <h3 className="text-xl font-serif font-bold uppercase tracking-wide">Napolitana</h3>
              </div>
            </div>

            {/* Pizza 4 */}
            <div className="special-pizza group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
                alt="Três Queijos"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-rich-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <span className="text-brand-selective-yellow text-[10px] font-bold uppercase tracking-widest mb-1 block">Premium</span>
                <h3 className="text-xl font-serif font-bold uppercase tracking-wide">Três Queijos</h3>
              </div>
            </div>

            {/* Pizza 5 */}
            <div className="special-pizza group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&q=80&w=800"
                alt="Portuguesa"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-rich-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <span className="text-brand-selective-yellow text-[10px] font-bold uppercase tracking-widest mb-1 block">Tradicional</span>
                <h3 className="text-xl font-serif font-bold uppercase tracking-wide">Portuguesa</h3>
              </div>
            </div>

            {/* Pizza 6 */}
            <div className="special-pizza group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800"
                alt="Frango Catupiry"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-rich-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <span className="text-brand-basil-green text-[10px] font-bold uppercase tracking-widest mb-1 block">Sucesso</span>
                <h3 className="text-xl font-serif font-bold uppercase tracking-wide">Frango com Catupiry</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Horários Section */}
      <section id="info" className="py-16 md:py-24 relative overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-imperial-red/5 mask-radial pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="section-title">
                <span className="text-brand-basil-green font-bold uppercase tracking-widest text-sm mb-4 block">Planeje sua Visita</span>
                <h2 className="text-3xl md:text-6xl font-black uppercase leading-tight text-white mb-6">
                  ESTAMOS NO <br />
                  <span className="text-brand-basil-green italic">CORAÇÃO</span> DE PIEDADE
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="info-card flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl glass hover:border-brand-basil-green/30 transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-basil-green/20 flex items-center justify-center text-brand-basil-green">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-brand-basil-green transition-colors">Endereço</h3>
                    <p className="text-white/60 text-xs md:text-sm mb-3">Rua São Sebastião, 1176 — Piedade, Jaboatão dos Guararapes</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rua+São+Sebastião+1176+Piedade" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase font-black tracking-widest text-brand-basil-green border-b border-brand-basil-green"
                    >
                      Abrir no Google Maps
                    </a>
                  </div>
                </div>

                <div className="info-card flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl glass hover:border-brand-selective-yellow/30 transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-selective-yellow/20 flex items-center justify-center text-brand-selective-yellow">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-brand-selective-yellow transition-colors">Horários</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] md:text-[10px] uppercase text-white/40 block">Terça a Quinta</span>
                        <span className="text-xs md:text-sm font-medium">18:00 — 23:00</span>
                      </div>
                      <div>
                        <span className="text-[9px] md:text-[10px] uppercase text-white/40 block">Sexta a Domingo</span>
                        <span className="text-xs md:text-sm font-medium">18:00 — 23:30</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-card flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl glass hover:border-brand-imperial-red/30 transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-imperial-red/20 flex items-center justify-center text-brand-imperial-red">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-brand-imperial-red transition-colors">Contato</h3>
                    <p className="text-white/60 text-xs md:text-sm">+55 (81) 98258-8939</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=1000" 
                  alt="Nossa Cozinha" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 md:-top-10 -right-6 md:-right-10 w-32 h-32 md:w-40 md:h-40 bg-brand-selective-yellow rounded-full z-0 flex items-center justify-center text-brand-rich-black text-center p-4 md:p-6 animate-spin-slow">
                <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest leading-tight">
                  Tradição Artesanal • Massa de Fermentação Lenta • 
                </span>
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-brand-imperial-red p-6 md:p-8 rounded-2xl z-20 shadow-xl">
                <div className="text-3xl md:text-4xl font-serif font-black mb-1 italic">9.8</div>
                <div className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Satisfação Média</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-[40px] bg-brand-rich-black border-t border-white/5 flex items-center justify-center text-[10px] uppercase tracking-[1px] opacity-40">
        © 2026 Jardim Da Pizza • Vibe Studio • Todos os direitos reservados
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-brand-basil-green text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <div className="absolute inset-0 bg-brand-basil-green rounded-full animate-ping opacity-20 group-hover:animate-none" />
        <Phone className="w-8 h-8 rotate-90" />
        <span className="absolute right-20 bg-brand-basil-green text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 hidden md:block">
          Peça pelo WhatsApp
        </span>
      </a>
    </div>
  );
}

function MenuCard({ title, desc, image, icon, accent }: { title: string, desc: string, image: string, icon: ReactNode, accent: 'red' | 'yellow' | 'green' }) {
  const accentColors = {
    red: 'border-brand-imperial-red/20 hover:border-brand-imperial-red/50',
    yellow: 'border-brand-selective-yellow/20 hover:border-brand-selective-yellow/50',
    green: 'border-brand-basil-green/20 hover:border-brand-basil-green/50'
  };

  const textColors = {
    red: 'text-brand-imperial-red',
    yellow: 'text-brand-selective-yellow',
    green: 'text-brand-basil-green'
  };

  return (
    <div className={cn("group menu-card relative overflow-hidden rounded-2xl bg-brand-surface/50 border border-white/5 transition-all duration-500 hover:-translate-y-1", accentColors[accent])}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface to-transparent opacity-60" />
      </div>
      <div className="p-8">
        <div className={cn("inline-flex mb-4", textColors[accent])}>
          {icon}
        </div>
        <h3 className="text-xl font-bold uppercase mb-2 font-serif">{title}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
          {desc}
        </p>
        <button className={cn("text-[11px] font-bold uppercase tracking-widest flex items-center gap-1", textColors[accent])}>
          Ver Opções <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
