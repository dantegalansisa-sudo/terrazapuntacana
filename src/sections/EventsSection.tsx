import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import { HeadphonesIcon, MicIcon, CocktailIcon, MusicIcon } from '../components/Icons';

const events = [
  {
    day: 'Viernes',
    title: 'DJ Night',
    desc: 'Los mejores DJs de Punta Cana. Electrónica, reggaetón y lo mejor del momento.',
    icon: <HeadphonesIcon size={28} />,
    time: 'Desde las 8:00 PM',
    badge: 'Cada Viernes',
    image: '/images/Screenshot 2026-04-19 171811.png',
  },
  {
    day: 'Sábado',
    title: 'Sábado de Karaoke',
    desc: 'Tu noche, tu voz. Karaoke en vivo con premios y diversión para todos.',
    icon: <MicIcon size={28} />,
    time: 'Desde las 7:00 PM',
    badge: 'Cada Sábado',
    image: '/images/karahoke.png',
  },
  {
    day: 'Domingo',
    title: 'DJ Yankee Live',
    desc: '@djyankee_rd llega a Terraza Bar poniendo tus discos favoritos para bailar, gozar y pasarla duro.',
    icon: <MusicIcon size={28} />,
    time: 'Desde las 6:00 PM',
    badge: 'Cada Domingo',
    image: '/images/dj.png',
  },
  {
    day: 'Diario',
    title: 'Happy Hour',
    desc: 'Bebidas a precio especial mientras lavas tu carro. La mejor combinación.',
    icon: <CocktailIcon size={28} />,
    time: '4:00 PM – 7:00 PM',
    badge: 'Todos los días',
    image: '/images/cocteles.jpeg',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

export default function EventsSection() {
  return (
    <section className="events" id="eventos">
      <div className="section-container">
        <span className="label-tag" style={{ color: 'var(--gold)' }}>
          Agenda
        </span>

        <RevealText
          tag="h2"
          className="section-title"
          style={{ color: 'var(--text-white)' }}
          delay={0.1}
        >
          Noches que No Olvidarás
        </RevealText>

        <motion.div
          className="events__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {events.map((event) => (
            <motion.div
              key={event.title}
              className="event-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="event-card__img-wrap">
                <img className="event-card__img" src={event.image} alt={event.title} />
              </div>
              <div className="event-card__body">
                <span className="event-card__badge">{event.badge}</span>
                <span className="event-card__icon">{event.icon}</span>
                <h3 className="event-card__day">{event.day}</h3>
                <h4 className="event-card__title">{event.title}</h4>
                <p className="event-card__desc">{event.desc}</p>
                <span className="event-card__time">{event.time}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
