// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import SectionShell from "../section-shell";

function Experience() {
  const left = <AnimationLottie animationPath={experience} />;

  const right = (
    <div className="flex flex-col gap-6">
      {experiences.map((experienceItem) => (
        <GlowCard key={experienceItem.id} identifier={`experience-${experienceItem.id}`}>
          <div className="p-3 relative">
            <Image
              src="/blur-23.svg"
              alt="Experience background"
              width={1080}
              height={200}
              className="absolute bottom-0 opacity-80"
            />
            <div className="flex justify-center">
              <p className="text-xs sm:text-sm text-[#16f2b3]">
                {experienceItem.duration}
              </p>
            </div>
            <div className="flex items-center gap-x-8 px-3 py-5">
              <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                <BsPersonWorkspace size={36} />
              </div>
              <div>
                <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                  {experienceItem.title}
                </p>
                <p className="text-sm sm:text-base">
                  {experienceItem.company}
                </p>
                {experienceItem.description && (
                  <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
                    {experienceItem.description}
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
      id="experience"
      title="Experiences"
      left={left}
      right={right}
      leftClassName="w-full h-full"
    />
  );
}

export default Experience;