import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiX } from "react-icons/si";

export default function Navbar() {
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
      Link: "https://www.linkedin.com/in/dieudonne-235098289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      Label: "x",
      Icon: SiX,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
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