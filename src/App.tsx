import React, { useEffect, useState } from 'react';
import { Menu, ArrowRight, Search, ShoppingBag, Play } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: "Haute Couture",
    title: "The Architecture of Desire",
    subtitle: "When structural engineering meets delicate silk.",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2787&auto=format&fit=crop",
    layout: "large"
  },
  {
    id: 2,
    category: "Runway",
    title: "Midnight in Milan",
    subtitle: "A retrospective on the darkness of the new season.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2788&auto=format&fit=crop",
    layout: "tall"
  },
  {
    id: 3,
    category: "Accessories",
    title: "Gold & Dust",
    subtitle: "The resurgence of brutalist jewelry design.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
    layout: "wide"
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FAFAF5] text-[#1A1A1A] min-h-screen font-sans selection:bg-[#C41E3A] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out px-6 py-4 flex justify-between items-center ${scrolled ? 'bg-[#FAFAF5]/90 backdrop-blur-md py-3' : 'bg-transparent'}`}>
        <div className="flex items-center gap-4">
          <button className="hover:opacity-60 transition-opacity">
            <Menu strokeWidth={1} className="w-6 h-6" />
          </button>
          <span className="hidden md:inline-block text-xs tracking-[0.2em] uppercase">Menu</span>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tighter cursor-pointer">ÉCLAT</h1>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:inline-block text-xs tracking-[0.2em] uppercase">Vol. 24</span>
          <Search strokeWidth={1} className="w-5 h-5 cursor-pointer hover:opacity-60" />
          <ShoppingBag strokeWidth={1} className="w-5 h-5 cursor-pointer hover:opacity-60" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[120vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2940&auto=format&fit=crop" 
            alt="Hero Fashion" 
            className="w-full h-full object-cover object-top opacity-95"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="absolute bottom-32 left-0 w-full px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
              The September Issue
            </p>
            <h2 className="text-white font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] mix-blend-difference mb-8 animate-fade-in-up delay-100">
              SILENT <br /> 
              <span className="italic font-light ml-12 md:ml-32">REVOLUTION</span>
            </h2>
            <div className="flex items-center gap-4 text-white animate-fade-in-up delay-200 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="tracking-widest text-xs uppercase">Watch The Film</span>
            </div>
          </div>
        </div>
      </header>

      {/* Ticker Tape */}
      <div className="border-y border-[#1A1A1A]/10 py-3 overflow-hidden whitespace-nowrap bg-[#FAFAF5]">
        <div className="animate-marquee inline-block">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-xs font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/60">
              — Paris Fashion Week — Fall/Winter 2024 — Exclusive Preview — The New Vanguard —
            </span>
          ))}
        </div>
      </div>

      {/* Editorial Grid */}
      <main className="px-6 md:px-12 py-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12 items-start">
          
          {/* Introduction Text */}
          <div className="md:col-span-4 md:col-start-1 md:sticky md:top-32 self-start">
            <h3 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Redefining <br/>
              <span className="text-[#C41E3A] italic">Modernity</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
              In a world obsessed with the new, we look back to look forward. This season is about the tension between heritage and innovation.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300 border-b border-black pb-1">
              Read Editor's Letter <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Articles */}
          <div className="md:col-span-8 flex flex-col gap-32">
            
            {/* Article 1 - Large */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/5]">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                <div>
                   <span className="text-[#C41E3A] text-xs font-bold tracking-widest uppercase mb-2 block">{articles[0].category}</span>
                   <h4 className="font-serif text-3xl md:text-4xl group-hover:opacity-70 transition-opacity">{articles[0].title}</h4>
                </div>
                <span className="text-xs text-gray-400 tracking-widest">01</span>
              </div>
            </div>

             {/* Article 2 - Offset Layout */}
             <div className="group cursor-pointer md:ml-24">
               <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                  <div className="md:w-1/3 text-right md:text-left">
                    <span className="text-[#C41E3A] text-xs font-bold tracking-widest uppercase mb-2 block">{articles[1].category}</span>
                    <h4 className="font-serif text-2xl md:text-3xl mb-4 leading-snug group-hover:opacity-70 transition-opacity">{articles[1].title}</h4>
                    <p className="text-gray-500 font-light text-sm">{articles[1].subtitle}</p>
                  </div>
                  <div className="md:w-2/3 overflow-hidden aspect-[3/4]">
                    <img 
                      src={articles[1].image} 
                      alt={articles[1].title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
               </div>
            </div>

             {/* Article 3 - Wide */}
             <div className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-video">
                <img 
                  src={articles[2].image} 
                  alt={articles[2].title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
               <div className="max-w-xl">
                   <span className="text-[#C41E3A] text-xs font-bold tracking-widest uppercase mb-2 block">{articles[2].category}</span>
                   <h4 className="font-serif text-3xl group-hover:opacity-70 transition-opacity">{articles[2].title}</h4>
                </div>
            </div>

          </div>
        </div>
      </main>

      {/* Statement Section */}
      <section className="bg-[#1A1A1A] text-[#FAFAF5] py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#C41E3A] text-xs tracking-[0.3em] uppercase mb-8">The Collection</p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-12">
            "Elegance is <br/> <span className="italic font-light text-gray-400">refusal</span>."
          </h2>
          <button className="px-12 py-4 border border-[#FAFAF5]/30 hover:bg-[#FAFAF5] hover:text-[#1A1A1A] transition-all duration-300 text-xs tracking-[0.2em] uppercase">
            Shop The Runway
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAFAF5] pt-24 pb-12 px-6 border-t border-[#1A1A1A]/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h1 className="font-serif text-2xl font-bold tracking-tighter mb-6">ÉCLAT</h1>
            <div className="flex gap-4">
              {['IG', 'TW', 'PI', 'YT'].map(social => (
                <a key={social} href="#" className="text-xs font-bold hover:text-[#C41E3A] transition-colors">{social}</a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h5 className="text-xs font-bold tracking-widest uppercase mb-6">Magazine</h5>
            <ul className="space-y-4 text-sm font-light text-gray-600">
              {['Current Issue', 'Archive', 'Subscribe', 'Stockists'].map(item => (
                <li key={item}><a href="#" className="hover:text-black transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
             <h5 className="text-xs font-bold tracking-widest uppercase mb-6">Legal</h5>
            <ul className="space-y-4 text-sm font-light text-gray-600">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(item => (
                <li key={item}><a href="#" className="hover:text-black transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h5 className="text-xs font-bold tracking-widest uppercase mb-6">Newsletter</h5>
            <div className="flex border-b border-black py-2">
              <input type="email" placeholder="Enter your email" className="bg-transparent w-full outline-none text-sm placeholder:text-gray-400 font-light" />
              <button className="text-xs uppercase tracking-widest hover:text-[#C41E3A]">Join</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto mt-24 flex justify-between items-end">
           <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 Éclat Magazine</p>
           <p className="text-[100px] leading-[0.8] font-serif opacity-5 hidden md:block select-none">ÉCLAT</p>
        </div>
      </footer>
    </div>
  );
}
