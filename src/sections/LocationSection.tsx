import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const chips = [
  'Asientos en terraza',
  'Música en vivo',
  'Karaoke',
  'Car Wash',
];

export default function LocationSection() {
  return (
    <section className="location" id="ubicacion">
      <div className="section-container">
        <span className="label-tag">Encuéntranos</span>

        <RevealText tag="h2" className="section-title" delay={0.1}>
          Ven a Visitarnos
        </RevealText>

        <div className="location__grid">
          <motion.div
            className="location__map"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123!2d-68.3816!3d18.5601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzM2LjQiTiA2OMKwMjInNTMuOCJX!5e0!3m2!1ses!2sdo!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Terraza Bar Paseo de Las Palmas"
            />
          </motion.div>

          <motion.div
            className="location__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="loc-item">
              <div className="loc-item__icon">📍</div>
              <div className="loc-item__text">
                <h4>Dirección</h4>
                <p>Calle Feliz Sánchez, Camino Ciudad La Palma, Punta Cana 23302</p>
              </div>
            </div>

            <div className="loc-item">
              <div className="loc-item__icon">📞</div>
              <div className="loc-item__text">
                <h4>Teléfono</h4>
                <p><a href="tel:8097788888">(809) 778-8888</a></p>
              </div>
            </div>

            <div className="loc-item">
              <div className="loc-item__icon">🕐</div>
              <div className="loc-item__text">
                <h4>Horario</h4>
                <p>Todos los días hasta las 12:00 AM</p>
              </div>
            </div>

            <div className="loc-item">
              <div className="loc-item__icon">📸</div>
              <div className="loc-item__text">
                <h4>Instagram</h4>
                <p>
                  <a
                    href="https://www.instagram.com/terrazabarpaseo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @terrazabarpaseo
                  </a>
                </p>
              </div>
            </div>

            <div className="loc-item">
              <div className="loc-item__icon">⭐</div>
              <div className="loc-item__text">
                <h4>Rating</h4>
                <p>5.0 ⭐ en Google</p>
              </div>
            </div>

            <div className="location__chips">
              {chips.map((chip) => (
                <span key={chip} className="loc-chip">{chip}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
