import { motion } from 'framer-motion';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton() {
  return (
    <motion.a
      className="whatsapp-float"
      href="https://wa.me/18097788888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
    >
      <WhatsAppIcon size={28} color="white" />
    </motion.a>
  );
}
