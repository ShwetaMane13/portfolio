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
    { title: "Use your calendar as a todo list", id: "todo-list", card: Todo },
    {
      title: "Use your calendar as a todo list one",
      id: "todo-list-one",
      card: TodoOne,
    },
    {
      title: "Use your calendar as a todo list two",
      id: "todo-list-two",
      card: TodoTwo,
    },
    {
      title: "Use your calendar as a todo list three",
      id: "todo-list-three",
      card: TodoThree,
    },
    {
      title: "Use your calendar as a todo list-four",
      id: "todo-list-four",
      card: TodoFour,
    },
    {
      title: "Use your calendar as a todo list-five",
      id: "todo-list-five",
      card: TodoFive,
    },
  ];

  return (
    <>
      <div className="px-50 flex w-full border-blue-300 bg-blue-0 items-start">
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
          <div className="w-full relative aspect-square rounded-2xl bg-gray-300">
           {features.map(feature => (
            <feature.card id={feature.id} key={feature.id} />
           ))}
          </div>
        </div>
      </div>

      <div className="h-screen">more room to scroll</div>
    </>
  );
};
