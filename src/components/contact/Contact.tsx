import { Element } from "react-scroll";
import background from "../../assets/jpeg/bg-brown.jpg";
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
        className="w-full shadow-sm hidden lg:block lg:h-[650px]"
        alt=""
      />
      <img
        src={background}
        className="shadow-sm lg:hidden block h-screen sm:h-[600px] sm:w-full "
        alt=""
      />
      <div className="bg-[#e9e0d9ea] absolute rounded-md sm:p-3 lg:p-3 p-3 sm:mt-14 mt-20 shadow-xl flex flex-col items-center justify-center sm:gap-1 lg:gap-3 gap-5">
        <div className="p-0">
          <Title size="5xl">Me contate</Title>
        </div>
        <SendEmail />
      </div>
    </Element>
  );
};
