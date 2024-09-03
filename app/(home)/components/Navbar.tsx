import { cn } from "@/lib/utils";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";


export default function Navbar({className}:{className?:string}) {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/dieudonne-235098289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      Link: "https://www.github.com/dieudonne", 
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://www.instagram.com/daltonhebra?igsh=aXN4OXB5dXRjZnU3", 
      Label: "Instagram",
      Icon: SiInstagram,
    },
    {
      Link: "https://x.com/DaltonHebra?t=T7OigjBE3jAMSFnR7OUJJQ&s=09", 
      Label: "x",
      Icon: SiX,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
      <h1 className="text-2xl font-bold underline-offset-8 decoration-green-500 -rotate-2 hover:text-green-400">Hebra Dalton</h1>
      <div className="flex items-center gap-5 hover:green">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <a
              href={social.Link}
              key={index}
              aria-label={social.Label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </a>
          );
        })}
      </div>
    </nav>
  );
}