export const Navbar = () => {
  const navbarList = ["Home", "About me", "Skills", "Work", "Contact"];
  return (
    <div class="flex justify-between border-2 border-green-500 h-1/10 px-30 w-full fixed top-0 left-0 bg-white z-10">
      <section class='flex flex-1 items-center border-2 border-red-500'>icon</section>
      <section class='flex flex-1 items-center justify-between border-2 border-red-500'>
        <section class="flex gap-10">
          {navbarList.map((item) => (
            <span class="text-base font-inter">{item}</span>
          ))}
        </section>
        <section>toggle</section>
      </section>
    </div>
  );
};
