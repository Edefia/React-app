"use client";
import React from 'react'
import Title from './title';
import { HoverEffect } from '@/components/card-hover-effects';
import { SiCss3, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql, SiReact, SiTailwindcss } from 'react-icons/si';



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

    ]



  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title text="Skills" className="flex flex-col items-center justify-center -rotate-6" />  
      
      <HoverEffect  items={skills}/>
        
    </div>
  );
}

