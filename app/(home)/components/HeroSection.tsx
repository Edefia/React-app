// import { MovingBorderBtn } from "@/components/hover-border-gradient";
import React from "react";
import Title from "./Title";
import { FlipWords } from "@/components/flip-words";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import Image from 'next/image'
import IMG_0295 from "@/images/IMG_0295.jpg"

export default function HeroSection(){
    const words = ["Wordpress Developer", "Mongo DB Admin", "PostgreSQL DB Admin", "Full Stack Developer", "Tech Enthusiast", "Freelancer"];
    return (
        <div className="min-h-[60vh] flex flex-col-reverse gap-15 sm:gap-20 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
            <div className="space-y-10 text-center lg:text-left text-container">
                <h1 className="text-4xl lg:text-7xl written font-bold">
                    Nice to Meet You!
                    <br /> <span className="underline underline-offset-8 decoration-green-500">{"I am Hebra."}</span>
                </h1>
                <div className="md:w-96 text-lg text-gray-300 flex written flex-wrap">
                    Based in Ghana, I am a<FlipWords words={words} /> passionate about building a modern web application that users love.
                </div>
                <a href={"mailto:hebradalton@gmail.com"} className="inline-block group">
                    <Title text="Contact Me"/>
                </a>
            </div>

            <div className="relative sm:py-20 md:py-10 ">
                <div className="w-80 h-80 space-y-2 border-white-[2px]  relative">
                <div>
                    <Image
                    src={IMG_0295}
                    alt="Hebra Dalton"
                    className="rounded-full object-cover h-60 md:h-120 lg:h-150 w-60 md:w-120 lg:w-150 circ"
                    />
                </div>
                </div>
                <div className="absolute bottom-5 sm:bottom-14 written left-0 sm:-left-10">
                    <HoverBorderGradient
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 rounded-md"
                    >
                        
                        <p>Availlable For Work</p>
                    </HoverBorderGradient>
                    
                </div>
            </div>
        </div>

    );
}