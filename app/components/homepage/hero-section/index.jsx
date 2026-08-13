// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";

const socialLinks = [
  { href: personalData.github, label: "GitHub", Icon: BsGithub },
  { href: personalData.linkedIn, label: "LinkedIn", Icon: BsLinkedin },
];

const skillList = ["React", "NextJS", "Redux", "Express", "NextJS", "MongoDB"];
const coderStats = [
  { label: "hardWorker", value: true, type: "bool" },
  { label: "quickLearner", value: true, type: "bool" },
  { label: "problemSolver", value: true, type: "bool" },
  { label: "hireable", value: "function", type: "function" },
];
const hireableLogic = [
  { indent: "ml-12 lg:ml-24", label: "hardWorker", operator: "&&" },
  { indent: "ml-12 lg:ml-24", label: "problemSolver", operator: "&&" },
  { indent: "ml-12 lg:ml-24", label: "skills.length", operator: ">=" },
];

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className="text-pink-500">{personalData.name}</span>, I&apos;m a Professional
            <span className="text-[#16f2b3]"> {personalData.designation}</span>.
          </h1>

          <div className="my-8 flex flex-col gap-3 text-sm text-gray-200">
            <a href={`tel:${personalData.phone}`} className="text-pink-400 hover:text-pink-300 transition-colors">
              Contact: {personalData.phone}
            </a>
            <a href={`mailto:${personalData.email}`} className="text-pink-400 hover:text-pink-300 transition-colors">
              Email: {personalData.email}
            </a>
          </div>

          <div className="mb-8 flex items-center gap-5">
            {socialLinks.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
                aria-label={label}
              >
                <Icon size={30} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#projects"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <span className="block px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold">
                Projects
              </span>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>

          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
              <div className="h-3 w-3 rounded-full bg-green-200" />
            </div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">'</span>
                <span className="text-amber-300">{personalData.name}</span>
                <span className="text-gray-400">',</span>
              </div>

              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">['</span>
                {skillList.map((skill, index) => (
                  <span key={skill + index}>
                    <span className="text-amber-300">{skill}</span>
                    {index < skillList.length - 1 && <span className="text-gray-400">', '</span>}
                  </span>
                ))}
                <span className="text-gray-400">'],</span>
              </div>

              {coderStats.map(({ label, value, type }) => (
                <div key={label}>
                  <span className={`ml-4 lg:ml-8 mr-2 ${type === "function" ? "text-green-400" : "text-white"}`}>
                    {label}:
                  </span>
                  {type === "function" ? (
                    <>
                      <span className="text-orange-400">function</span>
                      <span className="text-gray-400">{'() {'}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-orange-400">{String(value)}</span>
                      <span className="text-gray-400">,</span>
                    </>
                  )}
                </div>
              ))}

              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">(</span>
              </div>
              {hireableLogic.map(({ indent, label, operator }) => (
                <div key={label}>
                  <span className={`${indent} text-cyan-400`}>this.</span>
                  <span className="mr-2 text-white">{label}</span>
                  {operator === ">=" ? (
                    <>
                      <span className="mr-2 text-amber-300">&gt;=</span>
                      <span className="text-orange-400">5</span>
                    </>
                  ) : (
                    <span className="text-amber-300">&amp;&amp;</span>
                  )}
                </div>
              ))}
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{"};"}</span>
              </div>
              <div>
                <span className="text-gray-400">{"};"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;