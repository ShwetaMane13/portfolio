import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = ({ sections }) => {
  const footerList = ["Home", "About", "Skills", "Work"];

  const handleScroll = (section) => {
    sections[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[380px]">
      <div className="w-full bg-white flex items-center justify-center gap-12 md:gap-24 py-8 md:py-0">
        <section className="flex flex-col gap-4 text-center md:text-left">
          <section className="text-4xl md:text-5xl font-inter">
            Shweta Mane
          </section>
          <section className="text-base font-inter">
            Full Stack Developer
          </section>
        </section>
        <section className="flex flex-col gap-6">
          {footerList.map((item) => (
            <span
              onClick={() => handleScroll(item)}
              className="text-base text-gray-700 hover:text-black cursor-pointer"
            >
              {item}
            </span>
          ))}
        </section>
      </div>
      <div className="w-full bg-black flex flex-col justify-center items-center md:items-start pl-0 md:pl-40 gap-4 text-white font-inter py-8 md:py-0">
        <section className="text-lg md:text-xl">Have a project?</section>
        <section className="text-3xl md:text-5xl font-semibold">
          Let's talk
        </section>
        <section className="mt-6 flex gap-6">
          <a
            href="https://www.linkedin.com/in/shwetamane13/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FaLinkedin className="text-2xl hover:text-white transition-colors" />
            </span>
          </a>
          <a
            href="https://github.com/ShwetaMane13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FaGithub className="text-2xl hover:text-white transition-colors" />
            </span>
          </a>
        </section>
        <section className="mt-6 text-sm text-gray-400">
          © 2025 Shweta Mane
        </section>
      </div>
    </div>
  );
};
