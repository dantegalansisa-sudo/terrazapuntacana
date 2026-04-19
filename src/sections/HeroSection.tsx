import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { ClockIcon, MapPinIcon, StarIcon, PhoneIcon } from '../components/Icons';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="hero">
      <motion.div className="hero__bg" style={{ scale }}>
        <img
          src="/images/heros.png"
          alt="Terraza Bar & Car Wash Paseo de Las Palmas"
        />
        <div className="hero__overlay" />
      </motion.div>

      <div className="hero__bokeh">
        <div className="bokeh bokeh--1" />
        <div className="bokeh bokeh--2" />
        <div className="bokeh bokeh--3" />
      </div>

      <motion.div className="hero__content section-container" style={{ opacity }}>
        <motion.span
          className="label-tag"
          style={{ color: 'var(--gold)', marginBottom: 28, display: 'block' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Punta Cana · República Dominicana
        </motion.span>

        <RevealText tag="h1" className="hero-title" delay={0.2}>
          Donde el Ambiente
        </RevealText>
        <RevealText tag="h1" className="hero-title hero-title--accent" delay={0.35}>
          Es la Experiencia
        </RevealText>

        <motion.div
          className="hero__line"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          Terraza Bar · Car Wash · DJ en Vivo · Karaoke
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <MagneticButton className="btn-orange" href="tel:8097788888">
            <PhoneIcon size={18} color="white" /> Reservar Mesa
          </MagneticButton>
          <MagneticButton className="btn-ghost-white" href="#servicios">
            Explorar →
          </MagneticButton>
        </motion.div>

        <motion.div
          className="hero__info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div className="info-item">
            <ClockIcon size={16} color="rgba(255,250,244,0.7)" />
            <span>Hasta las 12:00 AM</span>
          </div>
          <div className="info-sep" />
          <div className="info-item">
            <MapPinIcon size={16} color="rgba(255,250,244,0.7)" />
            <span>Camino Ciudad La Palma, Punta Cana</span>
          </div>
          <div className="info-sep" />
          <div className="info-item">
            <StarIcon size={16} color="#D4A853" />
            <span>5.0 en Google</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="scroll-line" />
        <span
          className="label-tag"
          style={{ fontSize: 9, color: 'rgba(255,250,244,0.5)' }}
        >
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
