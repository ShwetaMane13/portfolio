import pfp from "../assets/pfp.jpg";

export const Home = () => {
  return (
    <div class="h-120 border-blue-500 mx-50 flex items-center ">
      <div className="flex flex-col justify-center gap-6 flex-1 border-black h-64">
        <section>
          <img
            className="size-16 rounded-full ml-1"
            src={pfp}
            alt="profile picture"
          />
        </section>
        <section className="text-6xl font-inter">
          Hello! I am Shweta Mane
        </section>
      </div>
      <div className="flex flex-col justify-center flex-1 h-64 border-black">
        <section className="flex flex-col gap-8">
          {" "}
          <section className="text-3xl font-inter border-blue-400 w-2/3">
            A Fullstack Developer based in Mumbai, India.
          </section>
          <section className="text-base font-inter text-[#808080]">
            Passionate creating great experiences for digital product
          </section>
        </section>
        <section className="flex gap-8 mt-10">
          <button className="px-6 py-3 bg-black text-white font-inter rounded-2xl border border-black">
            See my work
          </button>
          <button className="px-6 py-3 font-inter rounded-2xl border-2 border-[#f5f5f0]">
            Resume
          </button>
        </section>
      </div>
    </div>
  );
};
