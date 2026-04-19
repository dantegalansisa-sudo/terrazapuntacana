import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { number: 5, suffix: '.0', label: 'Rating en Google' },
  { number: 1161, suffix: '+', label: 'Seguidores Instagram' },
  { number: 7, suffix: ' días', label: 'Abierto toda la semana' },
];

export default function ExperienceSection() {
  return (
    <section className="experience" id="experiencia">
      <div className="section-container">
        <span className="label-tag">La Experiencia</span>

        <RevealText tag="h2" className="section-title" delay={0.1}>
          Más que un Bar, un Destino
        </RevealText>

        <div className="experience__grid">
          <div className="experience__text">
            <p className="exp__body">
              En Paseo de Las Palmas encontrarás el lugar perfecto para
              relajarte después de un largo día. Nuestra terraza te recibe
              con buena música, cócteles artesanales y un ambiente que te
              hace sentir en casa.
            </p>
            <p className="exp__body">
              Y mientras disfrutas, nosotros nos encargamos de dejar tu
              carro reluciente. Así de simple, así de perfecto.
            </p>

            <div className="experience__stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat__number">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </span>
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="experience__image"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <img
              src="/images/coct.jpeg"
              alt="Cócteles artesanales en Terraza Bar"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
