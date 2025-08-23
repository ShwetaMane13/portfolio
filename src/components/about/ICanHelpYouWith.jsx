// import {
//   Todo,
//   TodoFive,
//   TodoFour,
//   TodoOne,
//   TodoThree,
//   TodoTwo,
// } from "../common/FeatureCard";
// import { FeatureTitle } from "../common/FeatureTitle";

// export const ICanHelpYouWith = () => {
//   const features = [
//     {
//       title:
//         "Clean, responsive, and visually consistent designs turned into high-quality code. Every detail matches your vision across all devices.",
//       id: "todo-list",
//       card: Todo,
//     },
//     {
//       title:
//         "From front-end interactions to back-end logic, I build apps that are fast, secure, and easy to maintain as your business grows.",
//       id: "todo-list-one",
//       card: TodoOne,
//     },
//     {
//       title: "Full-stack support — from initial concept to deployment. I handle both design integration and backend systems so you get a complete product.",
//       card: TodoTwo,
//     },
//     // {
//     //   title: "Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one",
//     //   id: "todo-list-three",
//     //   card: TodoThree,
//     // },
//     // {
//     //   title: "Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one",
//     //   id: "todo-list-four",
//     //   card: TodoFour,
//     // },
//     // {
//     //   title: "Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one",
//     //   id: "todo-list-five",
//     //   card: TodoFive,
//     // },
//   ];

//   return (
//     <div className="flex flex-col">
//       <section className="text-4xl md:text-5xl text-center font-inter px-6 md:px-12 py-12">
//         I Can Help You With
//       </section>
//       <div className="px-6 md:px-12 lg:px-50 flex flex-col md:flex-row w-full items-start md:gap-4">
//         <div className="w-full md:w-1/2 sticky top-20 md:top-10 flex md:h-screen items-center order-1 md:order-2">
//           <div className="w-full relative aspect-square rounded-2xl">
//             {features.map((feature) => (
//               <feature.card id={feature.id} key={feature.id} />
//             ))}
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 py-12 md:py-[40vh] order-2 md:order-1">
//           <ul>
//             {features.map((feature) => (
//               <li key={feature.id}>
//                 <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* <div className="h-screen">more room to scroll</div> */}
//     </div>
//   );
// };

import { useEffect, useRef, useState } from "react";
import {
  Todo,
  TodoFive,
  TodoFour,
  TodoOne,
  TodoThree,
  TodoTwo,
} from "../common/FeatureCard";
import { FeatureTitle } from "../common/FeatureTitle";

export const ICanHelpYouWith = () => {
  const features = [
    {
      title:
        "Clean, responsive, and visually consistent designs turned into high-quality code. Every detail matches your vision across all devices.",
      id: "todo-list",
      card: Todo,
    },
    {
      title:
        "From front-end interactions to back-end logic, I build apps that are fast, secure, and easy to maintain as your business grows.",
      id: "todo-list-one",
      card: TodoOne,
    },
    {
      title:
        "Full-stack support — from initial concept to deployment. I handle both design integration and backend systems so you get a complete product.",
      card: TodoTwo,
      id: "todo-list-two",
    },
    // {
    //   title: "Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one",
    //   id: "todo-list-three",
    //   card: TodoThree,
    // },
    // {
    //   title: "Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one",
    //   id: "todo-list-four",
    //   card: TodoFour,
    // },
    // {
    //   title: "Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one",
    //   id: "todo-list-five",
    //   card: TodoFive,
    // },
  ];

  // new code
  const snapRef = useRef(null);
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  //new code
useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (snapRef.current) observer.observe(snapRef.current);
    return () => observer.disconnect();
  }, []);

  //new code
  // lock/unlock body scroll depending on section
  useEffect(() => {
    if (active && currentIndex < features.length - 1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active, currentIndex, features.length]);

  //new code
  // track which card is in view
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const height = window.innerHeight;
    const index = Math.round(scrollTop / height);
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Desktop experience (unchanged) */}
      <section
        ref={snapRef}
        onScroll={handleScroll} // new code
        className="hidden md:block text-4xl md:text-5xl text-center font-inter px-6 md:px-12 py-12"
      >
        I Can Help You With
      </section>
      <div className="hidden lg:flex px-50 gap-6 w-full items-start">
        <div className="w-full py-[40vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sticky top-10 flex h-screen items-center">
          <div className="w-full relative aspect-square rounded-2xl">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile experience with scroll snapping */}
      <section className="lg:hidden text-4xl md:text-5xl text-center font-inter px-6 md:px-12 pt-12">
        I Can Help You With{" "}
      </section>
      <div className="lg:hidden h-screen snap-y snap-mandatory overflow-y-scroll">
        {features.map((feature, i) => (
          <section
            key={feature.id}
            className="h-screen w-full flex flex-col items-center justify-center snap-start relative"
          >
            <div className="relative w-4/5 aspect-square rounded-2xl overflow-hidden">
              <feature.card id={feature.id} forceVisible />
            </div>
            <h2 className="text-2xl font-inter text-gray-500 text-justify pt-10 px-10">
              {feature.title}
            </h2>
            {/* new code */}
            {/* Show hint only on last card */}
            {i === features.length - 1 && (
              <div className="absolute bottom-6 text-gray-400 text-sm">
                Continue ↓
              </div>
            )}
          </section>
        ))}
      </div>
    </>
  );
};
