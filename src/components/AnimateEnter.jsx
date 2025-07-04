import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimateEnter({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateEnter2({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={isInView ? { opacity: 1, y: 0} : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

