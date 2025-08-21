import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "motion/react";

export const Navbar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarList = ["Home", "About", "Skills", "Work", "Contact"];

  const handleScroll = (section) => {
    sections[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between h-20 lg:h-1/10 px-10 lg:px-30 w-full fixed top-0 left-0 bg-white z-10">
     <section className="flex flex-1 items-center">
  <motion.div
    className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg text-white"
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
  >
    S
  </motion.div>
</section>
      <section className="flex flex-1 items-center justify-end">
        <section className="hidden md:flex items-center gap-10">
          {navbarList.map((item) => (
            <span
              className="text-base font-inter cursor-pointer"
              onClick={() => handleScroll(item)}
            >
              {item}
            </span>
          ))}
        </section>
        {/* <section>toggle</section> */}
      </section>

      {/* Mobile Hamburger */}
      <section className="md:hidden flex items-center">
        {isOpen ? (
          <FiX
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FiMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </section>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-lg md:hidden"
        >
          {navbarList.map((item) => (
            <span
              key={item}
              className="text-lg font-inter cursor-pointer hover:text-gray-600 transition"
              onClick={() => handleScroll(item)}
            >
              {item}
            </span>
          ))}
        </motion.section>
      )}
    </div>
  );
};
