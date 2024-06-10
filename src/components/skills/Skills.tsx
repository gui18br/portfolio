import { Title } from "../title/Title";

export interface Skill {
  id: number;
  name: string;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
}

export const Skills = (props: SkillsProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="flex items-center justify-center">
        <Title size="3xl">Skills</Title>
      </div>
      <div className="mt-5">
        <ul className="flex flex-wrap justify-center gap-4">
          {props.skills.map((skill) => (
            <li key={skill.id} className="w-[10.9%] relative group">
              <p className="text-[#E9E0D9] bg-primary p-2 rounded-sm text-center transition-opacity duration-300 group-hover:opacity-0 shadow-md">
                {skill.name}
              </p>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <img
                  src={skill?.icon}
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
