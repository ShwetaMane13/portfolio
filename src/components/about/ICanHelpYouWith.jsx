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


import { useEffect, useRef } from "react";
import {
  Todo,
  TodoFive,
  TodoFour,
  TodoOne,
  TodoThree,
  TodoTwo,
} from "../common/FeatureCard";
import { FeatureTitle } from "../common/FeatureTitle";
import { useFeatureStore } from "../../store";

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
      id: "todo-list-two", // <-- ensure this id exists
      card: TodoTwo,
    },
  ];

  // Collect refs for each title so we can choose the one closest to center
  const itemRefs = useRef({});
  const registerRef = (id, el) => {
    if (el) itemRefs.current[id] = el;
    else delete itemRefs.current[id];
  };

  const setInViewFeature = useFeatureStore((s) => s.setInViewFeature);

  useEffect(() => {
    let raf = null;

    const evaluate = () => {
      raf = null;
      const entries = Object.entries(itemRefs.current);
      if (!entries.length) return;

      const viewportCenter = window.innerHeight / 2;
      let bestId = null;
      let bestDist = Infinity;

      for (const [id, el] of entries) {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }
      if (bestId) setInViewFeature(bestId);
    };

    const onScrollOrResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(evaluate);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    evaluate(); // initial

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [setInViewFeature]);

  return (
    <div className="flex flex-col">
      <section className="text-4xl md:text-5xl text-center font-inter px-6 md:px-12 py-12">
        I Can Help You With
      </section>

      {/* original responsive layout */}
      <div className="px-6 md:px-12 lg:px-50 flex flex-col md:flex-row w-full items-start md:gap-4">
        {/* Card: sticky on desktop, on top on mobile */}
        <div className="w-full md:w-1/2 sticky top-20 md:top-10 flex md:h-screen items-center order-1 md:order-2">
          <div className="w-full relative aspect-square rounded-2xl">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>

        {/* Titles: below on mobile, left column on desktop */}
        <div className="w-full md:w-1/2 py-12 md:py-[40vh] order-2 md:order-1">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id} registerRef={registerRef}>
                  {feature.title}
                </FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
