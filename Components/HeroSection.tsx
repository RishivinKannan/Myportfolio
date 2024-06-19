import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const HeroSection = () => {
  return (
    <div className="pt-36 pb-20">
      <div className="">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />

        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className=" left-80  top-28 h-[80vh] w-[50vw]  "
          fill="blue"
        />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] 
      bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
         dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>
      </div>

      <div className="flex relative z-10 justify-center my-5 md:translate-x-12">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full">
          <div className="flex flex-col col-span-2 gap-4 justify-center items-center px-4 md:col-span-1">
            <TextGenerateEffect
              className="text-center  text-[40px] md:text-3xl lg:text-[2.6rem]"
              words="Hey, I'm Rishivin Kannan. I build things for Web "
            />
            <p className="mb-2 text-sm text-center md:tracking-wider md:text-lg lg:text-xl">
              {"A Full Stack Developer | NextJS | ReactJS | Express"}
            </p>

            <div className="flex gap-8 justify-center">
              {/* Yet to add Resume */}
              <a
                download="Rishivin's Resume"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex justify-center items-center px-3 py-1 w-full h-full text-sm font-medium text-white rounded-full backdrop-blur-3xl cursor-pointer bg-slate-800">
                  Download CV
                </span>
              </a>
              <a
                href="https://github.com/RishivinKannan"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex justify-center items-center px-3 py-1 w-full h-full text-sm font-medium text-black bg-white rounded-full backdrop-blur-3xl cursor-pointer">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          <div className="flex col-span-2 justify-center items-center -order-3 md:col-span-1 md:order-1">
            <Image alt="Photo" src={"/Profile.png"} width={350} height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
