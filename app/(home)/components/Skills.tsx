"use client";
import React from 'react'
import Title from './Title';
import { HoverEffect } from '@/components/card-hover-effects';
import { SiCplusplus, SiCss3, SiGit, SiHtml5, SiJavascript, SiJquery, SiMongodb, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';



export default function skills() {
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },

        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },

        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },

        {
            text: "MongoDB",
            Icon: SiMongodb,
        },

        {
            text: "Postgres",
            Icon: SiPostgresql,
        },

        {
            text: "Git",
            Icon: SiGit,
        },

        {
            text: "CSS",
            Icon: SiCss3,
        },

        {
            text: "HTML",
            Icon: SiHtml5,
        },

        {
            text: "JavaScript",
            Icon: SiJavascript,
        },

        {
            text: "JQuery",
            Icon: SiJquery,
        },

        {
            text: "C++",
            Icon: SiCplusplus,
        },

        {
            text: "TypeScript",
            Icon: SiTypescript,
        },

    ]



  return (
    <div className="max-w-5xl mx-auto px-8 group-hover:text-green-500 transition-all duration-500">
      <Title text="Skills" className="flex flex-col items-center justify-center -rotate-6" />  
      
      <HoverEffect  items={skills}/>
        
    </div>
  );
}

