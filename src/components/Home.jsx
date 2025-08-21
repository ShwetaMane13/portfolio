import pfp from "../assets/pfp.jpg";

export const Home = ({ sections }) => {
  const handleScroll = (section) => {
    console.log(section);
    sections[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="pt-10 lg:pt-18">
      <div class="h-auto lg:h-100 m-12 lg:mx-50 flex flex-col gap-10 items-center lg:flex-row lg:gap-0">
        <div className="flex flex-col justify-center gap-6 flex-1 h-auto lg:h-64">
          <section>
            <img
              className="size-36 sm:size-48 lg:size-16 rounded-full mx-auto lg:ml-1"
              src={pfp}
              alt="profile picture"
            />
          </section>
          <section className="text-4xl font-inter flex text-center sm:text-5xl lg:text-left lg:text-6xl">
            Hello! I am Shweta Mane
          </section>
        </div>
        <div className="flex flex-col justify-center flex-1 h-64 border-black">
          <section className="flex flex-col gap-4 lg:gap-8">
            {" "}
            <section className="text-xl lg:text-3xl font-inter flex text-center lg:text-left border-blue-400 lg:w-2/3">
              A Fullstack Developer based in Mumbai, India.
            </section>
            <section className="text-base font-inter flex text-center lg:text-left text-[#808080]">
              Passionate creating great experiences for digital product
            </section>
          </section>
          <section className="flex gap-8 mt-10">
            <button
              onClick={() => handleScroll("Work")}
              className="px-6 py-3 bg-black text-sm md:text-base text-white font-inter rounded-2xl border border-black cursor-pointer"
            >
              See my work
            </button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1_H9C6hSfXYAyfObfS7v-sCcCRlYVMDj-/view?usp=sharing"
            >
              <button className="px-6 py-3 font-inter text-sm md:text-base rounded-2xl border-2 border-[#f5f5f0] cursor-pointer">
                Resume
              </button>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
