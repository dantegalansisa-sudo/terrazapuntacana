import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const galleryImages = [
  { src: '/images/heros.png', alt: 'Terraza Bar exterior' },
  { src: '/images/contel.jpeg', alt: 'Cócteles artesanales' },
  { src: '/images/karaoke-live-1.png', alt: 'Karaoke en vivo' },
  { src: '/images/carww.jpeg', alt: 'Car wash Porsche' },
  { src: '/images/coct.jpeg', alt: 'Cócteles tropicales' },
  { src: '/images/karaoke-live-2.png', alt: 'Noche de karaoke' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="section-container">
        <span className="label-tag">Galería</span>

        <RevealText tag="h2" className="section-title" delay={0.1}>
          Momentos que Quedan
        </RevealText>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {galleryImages.map((img, i) => (
            <motion.div key={i} className="gallery-item" variants={itemVariants}>
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
