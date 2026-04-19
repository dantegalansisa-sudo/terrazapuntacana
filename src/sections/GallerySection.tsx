import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&q=80', alt: 'Terraza bar de noche' },
  { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80', alt: 'Bar nocturno' },
  { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80', alt: 'Cócteles artesanales' },
  { src: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80', alt: 'DJ en vivo' },
  { src: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80', alt: 'Car wash profesional' },
  { src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80', alt: 'Noche de karaoke' },
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
              <div className="gallery-overlay">🔍</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
