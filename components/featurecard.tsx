"use client";
import { BackgroundGradient } from "./ui/background-gradient";
const FeatureCard = () => {
  return (
    <BackgroundGradient className="flex flex-col justify-center max-w-[200px] items-center rounded-[22px] sm:p-10 bg-white dark:bg-zinc-900 hover:scale-110">
      <h1 className="text-xl font-bold">Features</h1>
    </BackgroundGradient>
  );
};
export default FeatureCard;
