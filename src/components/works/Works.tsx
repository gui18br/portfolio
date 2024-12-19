import { Title } from "../title/Title";
import vcaLogo from "../../assets/jpeg/vca-sistemas.jpeg";
import compassLogo from "../../assets/jpeg/compass_uol_logo.jpeg";
import sgiLogo from "../../assets/png/logo_sgi_70.png";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

const works = [
  {
    id: 1,
    logo: sgiLogo,
    link: "https://app.sgidesigner.com.br/",
    title: "SGI Solution",
    date: "07/2024 - Atual",
    description:
      "Atuo como desenvolvedor mobile Fullstack, utilizando Dart com Flutter para aplicações Android e PHP com Laravel no backend para criação de APIs que integram bancos de dados SQL. Além disso, sou responsável por manter e implementar funcionalidades em módulos específicos de sistemas baseados em Laravel.",
  },
  {
    id: 2,
    logo: vcaLogo,
    link: "",
    title: "VCA Sistemas",
    date: "03/2024 - 05/2024",
    description:
      "Um dos meus principais projetos foi ser responsável por dar manutenção e adicionar funcionalidades a uma aplicação de moto frentista legada em React Native e NestJS. O aplicativo se utilizava de componentes de classes e apresentava grande lentidão no seu uso no dia a dia. Dando a manutenção devida, refatorei trechos do código e adicionei funcionalidades tanto no APP quanto no backend, com isso recebi importantes feedbacks de melhoria no desempenho do mesmo pelos clientes.",
  },
  {
    id: 3,
    logo: compassLogo,
    link: "https://compass.uol/",
    title: "Compass UOL",
    date: "07/2023 - 12/2023",
    description:
      "Atuei como estagiário no Programa de Bolsas fornecido pela empresa. Neste programa fui responsável por estudar diversas tecnologias e as pôr em prática através de provas e desafios tanto individuais quanto em grupos. Tais tecnologias estudas foram GIT, JavaScript, TypeScript, HTML, CSS, React, React Native e o sistema AWS. Além disso apliquei e pus em prática metologias ágeis como Agile, Scrum e Kanban.",
  },
];

export const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 2,
      },
      breakpoints: {
        "(max-width: 1020px)": {
          slides: {
            perView: 1,
          },
        },
      },
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
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

  return (
    <div className="mt-10">
      <div className="flex lg:justify-start justify-center mb-10">
        <Title size="3xl">Experiência</Title>
      </div>
      <div ref={ref} className="keen-slider cursor-grab">
        {works.map((work) => (
          <div key={work.id} className="keen-slider__slide">
            <div className="flex">
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src={work.logo}
                    className="w-10 h-10 rounded-sm"
                    alt=""
                  />
                  <a href={work.link} target="_blank">
                    <Title size="xl">{work.title}</Title>
                  </a>
                  <p className="">{work.date}</p>
                </div>
              </div>
            </div>
            <p className="text-justify ml-2 xl:w-[550px] lg:w-[450px]">
              {work.description}
            </p>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex p-10 pb-24 justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};
