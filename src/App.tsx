import { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import MagneticButton from './components/MagneticButton';
import HeroSection from './sections/HeroSection';
import ExperienceSection from './sections/ExperienceSection';
import ServicesSection from './sections/ServicesSection';
import GallerySection from './sections/GallerySection';
import EventsSection from './sections/EventsSection';
import CarWashSection from './sections/CarWashSection';
import LocationSection from './sections/LocationSection';
import FooterSection from './sections/FooterSection';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Car Wash', href: '#carwash' },
    { label: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#">
        <div className="navbar__logo-text">
          Terraza <span>Bar</span>
        </div>
      </a>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              className="navbar__link"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <MagneticButton className="btn-orange navbar__cta" href="tel:8097788888">
            Reservar Mesa
          </MagneticButton>
        </li>
      </ul>

      <button
        className="navbar__mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <GallerySection />
      <EventsSection />
      <CarWashSection />
      <LocationSection />
      <FooterSection />
      <WhatsAppButton />
    </>
  );
}

export default App;
