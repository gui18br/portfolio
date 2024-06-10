export interface Skill {
  id: number;
  name: string;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
}

export const SkillsProject = (props: SkillsProps) => {
  return (
    <div className=" mt-8">
      <ul className="flex  gap-5 justify-center">
        {props.skills.map((skill) => (
          <li key={skill.id} className="w-28 relative group">
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
  );
};
