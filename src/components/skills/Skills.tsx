import { Title } from "../title/Title";
import jsLogo from "../../assets/icons8-javascript.svg";
import tsLogo from "../../assets/icons8-texto-datilografado.svg";
import htmlLogo from "../../assets/icons8-html.svg";
import cssLogo from "../../assets/icons8-css.svg";
import javaLogo from "../../assets/icons8-logo-java-coffee-cup.svg";
import reactLogo from "../../assets/react.svg";
import nodeLogo from "../../assets/icons8-nó-js.svg";
import androidStudioLogo from "../../assets/icons8-android-studio.svg";
import expoLogo from "../../assets/icons8-exposição.svg";
import gitLogo from "../../assets/icons8-git.svg";
import githubLogo from "../../assets/icons8-github.svg";
import viteLogo from "../../assets/icons8-rapidamente.svg";
import tailwindLogo from "../../assets/icons8-tailwindcss.svg";
import vercelLogo from "../../assets/vercel-svgrepo-com.svg";

export const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      logo: jsLogo,
    },
    {
      id: 2,
      name: "TypeScript",
      logo: tsLogo,
    },
    {
      id: 3,
      name: "HTML",
      logo: htmlLogo,
    },
    {
      id: 4,
      name: "CSS",
      logo: cssLogo,
    },
    {
      id: 5,
      name: "Java",
      logo: javaLogo,
    },
    {
      id: 6,
      name: "React",
      logo: reactLogo,
    },
    {
      id: 7,
      name: "React Native",
      logo: reactLogo,
    },
    {
      id: 8,
      name: "Node.js",
      logo: nodeLogo,
    },
    {
      id: 9,
      name: "Android Studio",
      logo: androidStudioLogo,
    },
    {
      id: 10,
      name: "Expo",
      logo: expoLogo,
    },
    {
      id: 11,
      name: "Git",
      logo: gitLogo,
    },
    {
      id: 12,
      name: "GitHub",
      logo: githubLogo,
    },
    {
      id: 13,
      name: "Vite",
      logo: viteLogo,
    },
    {
      id: 14,
      name: "Tailwind CSS",
      logo: tailwindLogo,
    },
    {
      id: 15,
      name: "Vercel",
      logo: vercelLogo,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="flex items-center justify-center">
        <Title size="3xl">Skills</Title>
      </div>
      <div className="mt-5">
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <li key={skill.id} className="w-[10.9%] relative group">
              <p className="text-[#E9E0D9] bg-primary p-2 rounded-sm text-center transition-opacity duration-300 group-hover:opacity-0">
                {skill.name}
              </p>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <img
                  src={skill?.logo}
                  alt={skill.name}
                  className="max-h-full max-w-full"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
