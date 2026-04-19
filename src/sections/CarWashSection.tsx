import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

const carWashServices = [
  { icon: '🚗', title: 'Lavado Exterior', desc: 'Lavado completo a presión' },
  { icon: '🧹', title: 'Aspirado Interior', desc: 'Limpieza profunda interior' },
  { icon: '✨', title: 'Detailing', desc: 'Acabado brillante premium' },
  { icon: '🪟', title: 'Vidrios', desc: 'Cristales impecables' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

export default function CarWashSection() {
  return (
    <section className="carwash" id="carwash">
      <div className="section-container">
        <span className="label-tag">Car Wash</span>

        <RevealText tag="h2" className="section-title" delay={0.1}>
          Tu Carro Reluciente, Tú Relajado
        </RevealText>

        <div className="carwash__grid">
          <motion.div
            className="carwash__image"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=700&q=85"
              alt="Car Wash profesional"
            />
          </motion.div>

          <div className="carwash__info">
            <p className="carwash__desc">
              La combinación perfecta: deja tu carro en nuestras manos
              y siéntate en la terraza a disfrutar. Cuando termines tu
              trago, tu carro estará como nuevo.
            </p>

            <motion.div
              className="carwash__services"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {carWashServices.map((service) => (
                <motion.div
                  key={service.title}
                  className="cw-service"
                  variants={itemVariants}
                >
                  <span className="cw-service__icon">{service.icon}</span>
                  <div className="cw-service__text">
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <MagneticButton
              className="btn-outline"
              href="https://wa.me/18097788888?text=Hola%2C%20quiero%20consultar%20precios%20del%20Car%20Wash"
            >
              Consultar Precios →
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
