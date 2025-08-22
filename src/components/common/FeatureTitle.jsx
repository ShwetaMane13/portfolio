import { easeInOut, motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { useFeatureStore } from "../../store";

export const FeatureTitle = ({ children, id }) => {
  const ref = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

   const isInView = useInView(ref, isMobile ? { amount: 0.6 } : { margin: "-40% 0px -40% 0px" });

  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ ease: easeInOut }}
      className="text-2xl md:text-4xl py-40 md:py-40 font-inter text-gray-500 transition-colors"
    >
      {children}
    </motion.p>
  );
};
