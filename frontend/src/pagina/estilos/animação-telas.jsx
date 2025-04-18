// components/PageTransition.jsx
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
