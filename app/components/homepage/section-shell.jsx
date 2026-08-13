import Image from "next/image";

export default function SectionShell({
  id,
  title,
  left,
  right,
  leftClassName = "w-full h-full",
  rightClassName = "",
}) {
  return (
    <section id={id} className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {title}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {left ? (
            <div className="flex justify-center items-start">
              <div className={leftClassName}>{left}</div>
            </div>
          ) : null}

          {right ? <div className={rightClassName}>{right}</div> : null}
        </div>
      </div>
    </section>
  );
}
