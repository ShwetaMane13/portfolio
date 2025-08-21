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
        "Use your calendar as a todo list one Use your calendar as a todo list one",
      id: "todo-list",
      card: Todo,
    },
    {
      title:
        "Use your calendar as a todo list one Use your calendar as a todo list one Use your calendar as a todo list one",
      id: "todo-list-one",
      card: TodoOne,
    },
    {
      title: "Use your calendar as a todo list one Use your calendar as a todo list one",
      id: "todo-list-two",
      card: TodoTwo,
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

  return (
    <div className="flex flex-col">
      <section className="text-4xl md:text-5xl text-center font-inter px-6 md:px-12 py-12">
        I Can Help You With
      </section>
      <div className="px-6 md:px-12 lg:px-50 flex flex-col md:flex-row w-full items-start">
        <div className="w-full md:w-1/2 sticky top-20 md:top-10 flex md:h-screen items-center order-1 md:order-2">
          <div className="w-full relative aspect-square rounded-2xl">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 py-12 md:py-[40vh] order-2 md:order-1">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="h-screen">more room to scroll</div> */}
    </div>
  );
};
