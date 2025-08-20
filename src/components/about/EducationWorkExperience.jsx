import { easeOut, motion, useInView } from "motion/react";
import { useRef } from "react";

export const EducationWorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });
  return (
    <div
      ref={ref}
      className="h-120 flex px-50 items-center bg-[#f5f5f0] border-blue-300"
    >
      <div className="flex-1 flex flex-col border-red-500">
        <section className="font-inter text-[40px] border-black">
          Work Experience
        </section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="flex flex-col gap-1 font-inter border-black py-4"
        >
          <section className="text-xl">
            Full Stack Developer at NewOwl AI
          </section>
          <section className="text-base text-[#7f7f7f]">
            Oct 2023 - Sept 2024, Remote
          </section>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
          className="flex flex-col gap-1 font-inter border-black py-4"
        >
          <section className="text-xl">
            Associate Software Engineer at Tricog Health
          </section>
          <section className="text-base text-[#7f7f7f]">
            Mar 2022 - Jul 2023, Bengaluru
          </section>
        </motion.section>
      </div>

      <div className="flex-1 flex flex-col border-red-500">
        <section className="font-inter text-[40px] border-black">
          Education
        </section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          className="flex flex-col gap-1 font-inter border-black py-4"
        >
          <section className="text-xl">Full Stack Development Bootcamp</section>
          <section className="text-base text-[#7f7f7f]">
            Jul 2021 - Mar 2022, Remote
          </section>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
          className="flex flex-col gap-1 font-inter border-black py-4"
        >
          <section className="text-xl">B.E. Mechatronics</section>
          <section className="text-base text-[#7f7f7f]">
            Jun 2015 - Nov 2020, Navi Mumbai
          </section>
        </motion.section>
      </div>
    </div>
  );
};
