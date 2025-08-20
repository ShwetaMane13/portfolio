import classNames from "classnames";
import { easeInOut, motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { useFeatureStore } from "../../store";

export const FeatureTitle = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);

  useEffect(() => {
    if(isInView) setInViewFeature(id)
  }, [isInView, id, setInViewFeature]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ ease: easeInOut }}
      className="text-5xl py-16 font-inter text-black transition-colors"
    >
      {children}
    </motion.p>
  );
};
