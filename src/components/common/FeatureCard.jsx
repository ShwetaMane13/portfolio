import classNames from "classnames";
import { useFeatureStore } from "../../store";

const FeatureCard = ({ gradient, children, id }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <div
      className={classNames(
        "absolute inset-0 bg-gradient-to-br flex justify-center items-center z-10 h-full lg:w-full rounded-2xl transition-opacity",
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const Todo = ({id}) => {
  return (
    <FeatureCard id={id} gradient="from-[#cdb4db] to-[#7b61ff]">
      <div className="text-xl md:text-5xl text-white text-center w-1/2">Pixel-Perfect Websites</div>
    </FeatureCard>
  );
};

export const TodoOne = ({id}) => {
  return (
    <FeatureCard id={id} gradient="from-[#d6b4fc] to-[#e673b7]">
      <div className="text-xl md:text-5xl text-white text-center w-1/2">Scalable Web Applications</div>
    </FeatureCard>
  );
};

export const TodoTwo = ({id}) => {
  return (
    <FeatureCard id={id} gradient="from-[#fbc687] to-[#f78da7]">
      <div className="text-xl md:text-5xl text-white text-center w-1/2">End-to-End Development</div>
    </FeatureCard>
  );
};

export const TodoThree = ({id}) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
      <span />
    </FeatureCard>
  );
};

export const TodoFour = ({id}) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      <span />
    </FeatureCard>
  );
};

export const TodoFive = ({id}) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <span />
    </FeatureCard>
  );
};
