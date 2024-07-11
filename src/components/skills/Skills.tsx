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
    <div className="flex flex-col items-center justify-center mt-10">
      <ul
        className={`grid grid-cols-2 md:grid-cols-3 ${
          props.skills.length > 5 ? "lg:grid-cols-4" : "lg:grid-cols-5"
        } gap-5 justify-center`}
      >
        {props.skills.map((skill) => (
          <li key={skill.id} className="relative group">
            <p className="text-300 bg-primary p-2 rounded-sm text-center transition-opacity duration-500 group-hover:opacity-0 shadow-md">
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
