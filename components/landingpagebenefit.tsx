import { cn } from "@/lib/utils";
import {
  IconBriefcase2,
  IconEyeSearch,
  IconTimeline,
  IconGlobeFilled,
  IconAnalyze,
  IconTextPlus,
  IconMessage,
  IconBounceRight,
  IconHeadset
} from "@tabler/icons-react";

export function BenefitSectionDemo() {
  const features = [
    {
        title: "Extensive Job Board Access",
        description: "Explore diverse job opportunities tailored for working holiday participants to find the right fit.",
        icon: <IconBriefcase2 />, // Replace with appropriate icon
    },
    {
        title: "Advanced Search Functionality",
        description: "Utilize category-specific search tools to connect with opportunities that match your skills.",
        icon: <IconEyeSearch />, // Replace with appropriate icon
    },
    {
        title: "Comprehensive Application Tracker",
        description: "Keep your job applications organized with our intuitive tracking system.",
        icon: <IconTimeline />, // Replace with appropriate icon
    },
    {
        title: "In-Depth Country Guides",
        description: "Access vital information about working holidays, including job markets and cultural insights.",
        icon: <IconGlobeFilled />, // Replace with appropriate icon
    },
    {
        title: "Step-by-Step Application Process",
        description: "Navigate the visa application process with clear, comprehensive guides.",
        icon: <IconAnalyze />, // Replace with appropriate icon
    },
    {
        title: "Tailored Job Recommendations",
        description: "Get personalized job suggestions based on your chosen country and preferences.",
        icon: <IconMessage />, // Replace with appropriate icon
    },
    {
        title: "User-Friendly Experience",
        description: "Enjoy a streamlined platform that makes your job search efficient and stress-free.",
        icon: <IconBounceRight />, // Replace with appropriate icon
    },
    {
        title: "24/7 Professional Support",
        description: "Our support team is available around the clock to assist you during your journey.",
        icon: <IconHeadset />, // Replace with appropriate icon
    },
];

  return (
    <div className="w-full items-center mt-32 flex flex-col">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Maximize Your Working Holiday Experience
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        Leverage our tailored features for a successful and fulfilling adventure abroad.
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-[1500px] mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
