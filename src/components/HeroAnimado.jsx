import { motion } from "framer-motion";

export default function HeroAnimado() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center"
    >
      <h1 className="text-6xl md:text-8xl font-serif">
        Cocinemos algo <span className="italic text-brand-orange">increíble</span>
      </h1>
    </motion.div>
  );
}