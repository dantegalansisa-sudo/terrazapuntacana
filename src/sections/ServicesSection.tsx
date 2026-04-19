import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { CocktailIcon, CarIcon, HeadphonesIcon, MicIcon } from '../components/Icons';

const services = [
  {
    icon: <CocktailIcon size={26} />,
    title: 'Terraza Bar',
    desc: 'Cócteles artesanales, bebidas nacionales e internacionales. Asientos en terraza con la mejor vibra de Punta Cana.',
    features: ['Cócteles Premium', 'Bebidas Nacionales', 'Ambiente Exclusivo'],
    image: '/images/contel.jpeg',
  },
  {
    icon: <CarIcon size={26} />,
    title: 'Car Wash',
    desc: 'Lava tu carro mientras disfrutas de la terraza. Servicio profesional de lavado y detailing.',
    features: ['Lavado Exterior', 'Detailing Interior', 'Aspirado Incluido'],
    image: '/images/carww.jpeg',
  },
  {
    icon: <HeadphonesIcon size={26} />,
    title: 'DJ en Vivo',
    desc: 'Los mejores DJs de la región animan tu noche con lo mejor de la música electrónica, salsa y reggaetón.',
    features: ['DJs Residentes', 'Música en Vivo', 'Noches Temáticas'],
    image: '/images/dj.png',
  },
  {
    icon: <MicIcon size={26} />,
    title: 'Karaoke',
    desc: 'Noches de karaoke donde tú eres la estrella. Amplio repertorio en español e inglés.',
    features: ['Sábados de Karaoke', 'Repertorio Amplio', 'Premios Especiales'],
    image: '/images/karahoke.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="services" id="servicios">
      <div className="section-container">
        <span className="label-tag">Nuestros Servicios</span>

        <RevealText tag="h2" className="section-title" delay={0.1}>
          Todo en un Solo Lugar
        </RevealText>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="service-card__img-wrap">
                <img
                  className="service-card__img"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="service-card__body">
                <span className="service-card__icon">{service.icon}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <div className="service-card__features">
                  {service.features.map((f) => (
                    <span key={f} className="feature-chip">{f}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
