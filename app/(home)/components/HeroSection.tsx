import { MovingBorderBtn } from "@/components/moving-border";
import React from "react";

export default function HeroSection(){
    return (
        <div className=" min-h-[60vh] flex flex-col-reverse gap-15 lg:gap-0 lg:flex-row items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Nice to Meet You!
                    <br /> <span className="underline underline-offset-8 decoration-green-500">{"I am Hebra."}</span>
                </h1>
                <p className="md:w-96 text-lg text-gray-300">
                    {"Based in Ghana, I am a Fullstack developer passionate about building a modern web application that users love."}
                </p>
                <a href={"mailto:hebradalton@gmail.com"} className="inline-block group">
                    <div>
                        <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">Contact Me</h1>

                        <div className="w-40 h-2 bg-green-500 rounded-full group-hover:bg-green-500 transition-125 "></div>

                        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2 group-hover:bg-indigo-500 "></div>
                    </div>
                </a>
            </div>

            <div className="relative">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg]  relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                        
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
                </div>
                <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
                    <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
                        <p>Availlable For Work</p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>

    );
}