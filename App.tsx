import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Crown, Sparkles } from 'lucide-react';

// Modular Luxury Components Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import Menu from './components/Menu';
import Chef from './components/Chef';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Simulate Initial Haute Loading State
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor Window Scroll For Active Section Identification & Back To Top Visibility
  useEffect(() => {
    const handleScroll = () => {
      // 1. Back To Top Visibility
      setShowScrollTop(window.scrollY > 600);

      // 2. Determine Which Section Is On Screen
      const sections = ['hero', 'about', 'featured-dishes', 'menu', 'chef', 'gallery', 'testimonials', 'reservation', 'contact'];
      const scrollPosition = window.scrollY + 160; // offset for nav heights

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToComponent = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(elementId);
    }
  };

  return (
    <div id="royal-shubh-workspace" className="min-h-screen bg-[#0B0B0B] text-[#F8F5F0] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#F7E7B4] relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* World-Class Preloader Screen */
          <motion.div
            key="preloader"
            id="app-luxury-preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-100 bg-[#0B0B0B] flex flex-col items-center justify-center"
          >
            <div id="loader-crest-wrapper" className="relative flex items-center justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-20 h-20 border border-[#D4AF37]/30 rounded-full flex items-center justify-center p-4 bg-[#1A1A1A]"
              >
                <Crown className="w-10 h-10 text-[#D4AF37] animate-pulse" />
              </motion.div>
              {/* Outer spin rings */}
              <motion.div
                className="absolute w-24 h-24 rounded-full border border-dashed border-[#F7E7B4]/25"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-28 h-28 rounded-full border border-dotted border-[#D4AF37]/15"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              />
            </div>
            
            {/* Branding Signatures */}
            <motion.div
              id="loader-branding"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display text-2xl sm:text-3xl tracking-[0.3em] text-[#F8F5F0] mb-2 font-normal">
                ROYAL SHUBH
              </h1>
              <div id="loader-branding-line" className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-3" />
              <span className="block font-mono text-[9px] tracking-[0.45em] text-[#D4AF37] uppercase">
                FINE DINING & INDIAN HERITAGE
              </span>
            </motion.div>
          </motion.div>
        ) : (
          /* High-Fidelity Luxury Interface */
          <motion.div
            key="luxury-interface"
            id="royal-shubh-viewport"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            {/* Transparent Floating Sticky Header Navigation */}
            <Navbar onScrollTo={handleScrollToComponent} activeId={activeSection} />

            {/* Main Single Page Document Scroll flow */}
            <main id="single-page-scroll-body" className="flex-grow">
              {/* 1. Cinematic Hero Fold */}
              <Hero onScrollTo={handleScrollToComponent} />

              {/* 2. Split-screen Experience Heritage Story */}
              <About />

              {/* 3. Chef's Specials Featured Dishes Showcase */}
              <FeaturedDishes />

              {/* 4. Master Signature Selection Menu List */}
              <Menu />

              {/* 5. Master Chef Biography fold */}
              <Chef />

              {/* 5b. Luxury Masonry Media Gallery */}
              <Gallery />

              {/* 6. Editorial Reviews Carousel Column */}
              <Testimonials />

              {/* 7. Sovereign Interactive Booking Station */}
              <Reservation />

              {/* 8. Coordinates, Locations & Interactive Radar Map */}
              <Contact />
            </main>

            {/* Elegant Gilded Footer */}
            <Footer onScrollTo={handleScrollToComponent} />

            {/* Back to Top Floating Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  id="back-to-top-luxury-btn"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => handleScrollToComponent('hero')}
                  className="fixed bottom-8 right-8 z-40 p-3 bg-[#1A1A1A] border border-[#D4AF37] text-[#D4AF37] hover:text-[#0B0B0B] hover:bg-[#D4AF37] transition-all rounded-full shadow-[0_4px_25px_rgba(212,175,55,0.25)] cursor-pointer focus:outline-none focus:ring-0 group"
                  aria-label="Scroll back to top"
                >
                  <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
