import { Element } from "react-scroll";
import background from "../../assets/jpeg/backgrond-2.jpg";
import { SendEmail } from "../sendEmail/SendEmail";
import { Title } from "../title/Title";

export const Contact = () => {
  return (
    <Element
      name="contato"
      className="relative mt-48 flex flex-col justify-center items-center"
    >
      <img
        src={background}
        className="w-full lg:h-full h-[600px] shadow-sm"
        alt=""
      />
      <div className="bg-[#e9e0d9c0] absolute rounded-md p-5 shadow-xl flex flex-col items-center justify-center gap-10">
        <div className="p-3">
          <Title size="5xl">Me contate</Title>
        </div>
        <SendEmail />
      </div>
    </Element>
  );
};
