import { animate } from "motion";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

export const Skills = () => {
  const skills = [
    "NextJS",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "ES6",
    "TypeScript",
    "Redux",
    "Webpack",
    "Vite",
    "TailwindCSS",
    "Material UI",
    "HTML5",
    "CSS3",
    "SASS",
    "Motion",
  ];

  const xTranslate = useMotionValue(0);
  const duration = 20;

  useEffect(() => {
    let controls;

    const skillWidth = document.querySelector("#card-container");
    const skillWidthDiv = -skillWidth?.clientWidth / 2 - 8;

    controls = animate(xTranslate, [0, skillWidthDiv], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls?.stop;
  }, [xTranslate, duration]);

  return (
    <div className="relative border-2 border-[#f5f5f0] flex overflow-hidden">
      <div className="min-w-max">
        <motion.div
          id="card-container"
          className="flex"
          style={{ x: xTranslate }}
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div key={idx} className="w-[200px] h-[80px]">
              <p className="h-full flex items-center justify-center text-2xl lg:text-3xl border-2 border-[#f5f5f0]">
                {skill}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
