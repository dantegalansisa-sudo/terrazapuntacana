import { motion } from 'framer-motion';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton() {
  return (
    <motion.a
      className="whatsapp-float"
      href="https://wa.me/18097788888?text=Hola%2C%20vengo%20desde%20su%20p%C3%A1gina%20web%20terrazapuntacana.vercel.app%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20%C2%A1Gracias!"
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
