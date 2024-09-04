import React from 'react'
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Title from './Title';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/direction-aware-hover';


export default function Projects() {

    const projects = [
        {
          title: "Personal Website",
          tech: [SiNextdotjs, SiReactquery, SiTypescript, SiCss3, SiTailwindcss],
          link: "https://localhost:3000",
          cover: "/Me.png",
          background: "bg-gray-500",  
        },

        {
          title: "Business Website",
          tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
          link: "https://localhost:3000",
          cover: "/porto.png",
          background: "bg-green-500",  
        },

        {
            title: "iDON Ecommence Web",
            tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
            link: "https://localhost:3000",
            cover: "/iDON.png",
            background: "bg-green-500",  
          },

          {
            title: "UCC Student Portal",
            tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
            link: "https://localhost:3000",
            cover: "/Student.png",
            background: "bg-gray-500",  
          },

          {
            title: "Gaffito's Inn Website",
            tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTypescript],
            link: "https://localhost:3000",
            cover: "/Gaffito.png",
            background: "bg-indigo-500",  
          },

          {
            title: "Dedicated Benz Web",
            tech: [SiHtml5, SiCss3,],
            link: "https://localhost:3000",
            cover: "/Benz.png",
            background: "bg-indigo-500",  
          },
   
    ]



  return (
    <div className="py-10 p-5 sm:p-0">
        <Title text="Projects" 
        className="flex flex-col items-center justify-center rotate-6 mt-5" />
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
            {projects.map((project, index) => {
                return <a href={project.link} key={index}>
                    <div className={cn("p-1 rounded-md", project.background)}>
                        <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                        
                        <div className="space-y-5">
                                <h1 className="text-2xl font-bold">{project.title}</h1>

                                <div className="flex items-center gap-5">
                                    {project.tech.map((Icon, index) => {
                                        return <Icon key={index}
                                        className="w-8 h-8" />
                                    })}
                                </div>
                            </div>        
                        </DirectionAwareHover>
                    </div>
                </a>; 
            })}
        </div>
    </div>
  );
}


