import { Button } from "../button/Button";
import { Skill, Skills } from "../skills/Skills";
import { SkillsProject } from "../skillsProject/SkillsProject";
import { Title } from "../title/Title";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

interface BodyProjectProps {
  imgs: string[];
  about: string;
  website: string;
  github: string;
  skills: Skill[];
}

export const BodyProject = (props: BodyProjectProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    setTimeout(() => {
      instanceRef.current?.update();
    }, 1000);
  }, [instanceRef]);

  const handleButtonClick = (url: string) => {
    if (url !== "") {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center mt-32 mb-16">
      <div className="w-[88%]">
        <div className="flex flex-col justify-center items-center hover:cursor-grab active:cursor-grabbing">
          <div ref={sliderRef} className="keen-slider ">
            {props.imgs.map((img) => (
              <div className="keen-slider__slide flex justify-center">
                <img
                  src={img}
                  alt=""
                  className="w-[70%] rounded-md shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="flex flex-col mt-24 gap-8">
          <div className="flex flex-col items-start">
            <Title size="3xl">Descrição do Projeto</Title>
          </div>
          <p className="text-lg text-justify">{props.about}</p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-start">
            <Title size="3xl">Tecnologias utilizadas</Title>
          </div>
          <Skills skills={props.skills} />
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-start">
            <Title size="3xl">Ver projeto</Title>
          </div>
          <div className="flex justify-start gap-10 p-4 mt-5">
            <Button
              style="elevation"
              onClick={() => handleButtonClick(props.website)}
            >
              WebSite
            </Button>
            <Button
              style="border"
              onClick={() => handleButtonClick(props.github)}
            >
              Repositório
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
