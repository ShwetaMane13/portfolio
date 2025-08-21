import { useRef } from "react";
import projectOne from "../assets/work.jpg";
import { motion, useScroll, useTransform } from "motion/react";

export const Works = () => {
  const projects = [
    {
      title: "Struktura",
      description: "A project made by yours truly",
      img: projectOne,
    },
    {
      title: "Struktura",
      description: "A project made by yours truly",
      img: projectOne,
    },
    {
      title: "Struktura",
      description: "A project made by yours truly",
      img: projectOne,
    },
  ];

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["end center", "end start"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, -1400]);

  return (
    <div className="md:h-screen flex flex-col bg-[#f5f5f0] overflow-hidden">
      <div className="text-4xl md:text-5xl text-center py-8 md:px-50 md:py-12">Selected Works</div>
      <div ref={scrollRef} className="hidden md:block">
        <motion.div className="z-6 relative" style={{ translateX: xTransform }}>
          <div className="ml-120 m-8 p-2 flex gap-8 absolute">
            {projects.map((project) => (
              <div className="bg-white w-[600px] px-4 py-4 rounded-2xl">
                <img
                  className="h-2/3 w-full rounded-2xl"
                  src={project.img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>


      <div className="md:hidden h-auto">
          <div className="p-8 flex flex-col gap-8">
            {projects.map((project) => (
              <div className="bg-white md:w-[600px] px-4 py-4 rounded-2xl">
                <img
                  className="md:h-2/3 w-full rounded-2xl"
                  src={project.img}
                  alt=""
                />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};
