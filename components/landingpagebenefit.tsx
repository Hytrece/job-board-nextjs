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
        title: "방대한 구인구직 게시판",
        description: "워킹홀리데이 참가자들을 위해 맞춤형 일자리 기회를 다양하게 탐색해보세요.",
        icon: <IconBriefcase2 />,
    },
    {
        title: "고급 검색 기능",
        description: "여러분의 능력에 맞는 기회를 찾을 수 있도록 카테고리별 맞춤 검색 도구를 제공합니다.",
        icon: <IconEyeSearch />,
    },
    {
        title: "종합 지원서 관리",
        description: "직관적인 추적 시스템으로 구직 지원 현황을 체계적으로 관리하세요.",
        icon: <IconTimeline />,
    },
    {
        title: "상세한 국가별 가이드",
        description: "취업 시장과 문화적 인사이트를 포함한 워킹홀리데이 필수 정보를 확인하세요.",
        icon: <IconGlobeFilled />,
    },
    {
        title: "단계별 신청 절차",
        description: "명확하고 포괄적인 가이드로 비자 신청 과정을 순조롭게 진행하세요.",
        icon: <IconAnalyze />,
    },
    {
        title: "맞춤형 일자리 추천",
        description: "선택한 국가와 선호도에 기반한 개인 맞춤형 일자리를 추천해드립니다.",
        icon: <IconMessage />,
    },
    {
        title: "사용자 친화적 경험",
        description: "효율적이고 스트레스 없는 구직 활동을 위한 최적화된 플랫폼을 경험하세요.",
        icon: <IconBounceRight />,
    },
    {
        title: "24시간 전문 지원",
        description: "여러분의 여정 동안 언제든 도움을 드릴 수 있는 지원팀이 대기하고 있습니다.",
        icon: <IconHeadset />,
    },
];

  return (
    <div className="w-full items-center mt-32 flex flex-col">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          워킹홀리데이 경험을 극대화하세요
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          해외에서의 성공적이고 보람찬 모험을 위한 맞춤형 기능을 활용해보세요.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-[1500px] mx-auto">
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
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
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