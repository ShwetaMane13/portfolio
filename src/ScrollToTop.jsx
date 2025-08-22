import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="scrolltop"
            onClick={scrollToTop}
            className="relative p-3 rounded-full text-white shadow-lg focus:outline-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #d6b4fc, #e673b7)",
              }}
              animate={{
                background: [
                  "linear-gradient(135deg, #d6b4fc, #e673b7)",
                  "linear-gradient(135deg, #fbc687, #f78da7)",
                  "linear-gradient(135deg, #cdb4db, #7b61ff)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
            <FaArrowUp className="relative z-10" size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
