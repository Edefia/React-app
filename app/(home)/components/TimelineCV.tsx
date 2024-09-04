import React from "react";
import { Timeline } from "@/components/timeline";
import Title from "./Title";
import Image from 'next/image';
import Benz from "@/images/Benz.png"
import Gaffito from "@/images/Gaffito.png"
import iDON from "@/images/iDON.png"
import NETFLIX from "@/images/NETFLIX.png"
import Student from "@/images/Student.png"
import UG from "@/images/UG.png"
import Project from "@/images/Project.png"
import porto from "@/images/porto.png"
import Boot from "@/images/Boot.png"
import Data from "@/images/Data.png"
import Javas from "@/images/Javas.png"
import JavaScript from "@/images/JavaScript.png"
import may from "@/images/may.png"
import Rea from "@/images/Rea.png"
import Me from "@/images/Me.png"



export default function TimelineCV() {
      const data = [
        {
          title: "2024",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm written font-normal mb-8">
                Built and deployed my own Portfolio Website from scratch.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src= {Project}
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full md:w-full lg:w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src={porto}
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Early 2024",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 written text-xs md:text-sm font-normal mb-4">
                Studied More about Frontend and Backend to acquire the following certifications
              </p>
              <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 written dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Professional Certificate in React Development
                </div>
                <div className="flex gap-2 items-center text-neutral-700 written dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Professional Certificate in Bootstrap Framework
                </div>
                <div className="flex gap-2 items-center text-neutral-700 written dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Professional Certificate in Advanced Javascript Programming
                </div>
                <div className="flex gap-2 items-center text-neutral-700 written dark:text-neutral-300 text-xs md:text-sm">
                  ✅  Professional Certificate in Javascript Programming
                </div>
                <div className="flex gap-2 items-center text-neutral-700 written dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Professional Certificate in MongoDB
                </div>
                <div className="flex gap-2 items-center text-neutral-700 written dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Professional Certificate in Algorithms
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
              <Image
              src={Rea}
              alt="Benz"
              width={500}
              height={500}
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
                <Image
                  src={Boot}
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src={JavaScript}
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src={Javas}
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src={may}
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src={Data}
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Early 2023",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs written md:text-sm font-normal mb-8">
                I usually run out of copy, but when I see nice contents, I try to
                clone them to sharpen my skills.
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs written md:text-sm font-normal mb-8">
                Lorem ipsum is for people who are too lazy to copy. But we are
                not. Here are some more example of beautiful designs I built.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={Student}
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src={UG}
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src={NETFLIX}
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src={Benz}
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        
      ];


      return (
        <div className="w-full">
          <Title text="Personal Timeline" className="flex flex-col items-center justify-center rotate-6 py-10"  />
          <Timeline data={data} />
        </div>
      );
    
    
}


