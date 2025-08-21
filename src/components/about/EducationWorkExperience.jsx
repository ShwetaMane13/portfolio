import { easeOut, motion, useInView } from "motion/react";
import { useRef } from "react";

export const EducationWorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8, once: true });
  return (
    <div
      ref={ref}
      className="h-auto pb-8 lg:pb-0 lg:h-120 flex flex-col gap-6 lg:flex-row px-12 lg:px-50 items-start lg:items-center bg-[#f5f5f0]"
    >
      <div className="flex-1 flex flex-col">
        <section className="font-inter mt-8 lg:mt-0 text-3xl lg:text-[40px]">
          Work Experience
        </section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="flex flex-col gap-1 font-inter pt-4 lg:py-4"
        >
          <section className="text-base lg:text-xl">
            Full Stack Developer at NewOwl AI
          </section>
          <section className="text-sm lg:text-base text-[#7f7f7f]">
            Oct 2023 - Sept 2024, Remote
          </section>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
          className="flex flex-col gap-1 font-inter py-4"
        >
          <section className="text-base lg:text-xl">
            Associate Software Engineer at Tricog Health
          </section>
          <section className="text-sm lg:text-base text-[#7f7f7f]">
            Mar 2022 - Jul 2023, Bengaluru
          </section>
        </motion.section>
      </div>

      <div className="flex-1 flex flex-col">
        <section className="font-inter text-3xl lg:text-[40px]">
          Education
        </section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="flex flex-col gap-1 font-inter border-black py-4"
        >
          <section className="text-base lg:text-xl">Full Stack Development Bootcamp</section>
          <section className="text-sm lg:text-base text-[#7f7f7f]">
            Jul 2021 - Mar 2022, Remote
          </section>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
          className="flex flex-col gap-1 font-inter border-black py-4"
        >
          <section className="text-base lg:text-xl">B.E. Mechatronics</section>
          <section className="text-sm lg:text-base text-[#7f7f7f]">
            Jun 2015 - Nov 2020, Navi Mumbai
          </section>
        </motion.section>
      </div>
    </div>
  );
};
