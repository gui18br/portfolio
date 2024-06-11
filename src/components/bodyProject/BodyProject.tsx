import { Button } from "../button/Button";
import { Skill } from "../skills/Skills";
import { SkillsProject } from "../skillsProject/SkillsProject";
import { Title } from "../title/Title";

interface BodyProjectProps {
  img: string;
  skills: Skill[];
}

export const BodyProject = (props: BodyProjectProps) => {
  return (
    <div className="flex flex-col items-center mt-32 mb-16">
      <div className="w-[88%]">
        <div className="flex flex-col justify-center items-center">
          <img
            src={props.img}
            alt=""
            className="w-[70%] rounded-md shadow-xl"
          />
        </div>
      </div>
      <div className="w-[50%]">
        <div className="flex flex-col mt-24 gap-8">
          <div className="flex flex-col items-start">
            <Title size="3xl">Descrição do Projeto</Title>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vehicula, libero nec tincidunt tincidunt, nisl nunc rhoncus purus,
            nec ultricies lectus nunc ut purus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Sed
            condimentum, libero nec tincidunt tincidunt, nisl nunc rhoncus
            purus, nec ultricies lectus nunc ut purus.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-start">
            <Title size="3xl">Tecnologias utilizadas</Title>
          </div>
          <SkillsProject skills={props.skills} />
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-start">
            <Title size="3xl">Ver projeto</Title>
          </div>
          <div className="flex justify-start gap-10 p-4 mt-5">
            <Button style="elevation">WebSite</Button>
            <Button style="border">Repositório</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
