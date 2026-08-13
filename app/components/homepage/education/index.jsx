// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import SectionShell from "../section-shell";

function Education() {
  const left = (
    <div className="w-3/4 h-3/4">
      <AnimationLottie animationPath={lottieFile} />
    </div>
  );

  const right = (
    <div className="flex flex-col gap-6">
      {educations.map((education) => (
        <GlowCard key={education.id} identifier={`education-${education.id}`}>
          <div className="p-3 relative text-white">
            <Image
              src="/blur-23.svg"
              alt="Education background"
              width={1080}
              height={200}
              className="absolute bottom-0 opacity-80"
            />
            <div className="flex justify-center">
              <p className="text-xs sm:text-sm text-[#16f2b3]">
                {education.duration}
              </p>
            </div>
            <div className="flex items-center gap-x-8 px-3 py-5">
              <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                <BsPersonWorkspace size={36} />
              </div>
              <div>
                <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                  {education.title}
                </p>
                <p className="text-sm sm:text-base">{education.institution}</p>
                {education.percentage && (
                  <p className="text-sm sm:text-base text-[#16f2b3] mt-2">
                    Percentage: {education.percentage}
                  </p>
                )}
              </div>
            </div>
          </div>
        </GlowCard>
      ))}
    </div>
  );

  return (
    <SectionShell
      id="education"
      title="Educations"
      left={left}
      right={right}
      leftClassName="w-3/4 h-3/4"
    />
  );
}

export default Education;