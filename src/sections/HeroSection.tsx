import { motion, useScroll, useTransform } from 'framer-motion';
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

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          Terraza Bar
        </motion.h1>
        <motion.h1
          className="hero-title hero-title--accent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          & Car Wash
        </motion.h1>
        <motion.p
          className="hero-title hero-title--sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Lava tu carro, disfruta el momento — lo tenemos todo en un solo lugar
        </motion.p>

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
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          Bar · Car Wash · DJ en Vivo · Karaoke · Cócteles
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
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
          transition={{ delay: 1.7, duration: 0.6 }}
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
