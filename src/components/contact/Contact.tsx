import background from "../../assets/jpeg/backgrond-2.jpg";
import { Input } from "../input/Input";
import { SendEmail } from "../sendEmail/SendEmail";
import { Title } from "../title/Title";

export const Contact = () => {
  return (
    <div className="relative mt-48 flex flex-col justify-center items-center">
      <img src={background} className="w-full shadow-sm" alt="" />
      <div className="bg-[#e9e0d9c0] absolute rounded-md p-5  flex flex-col items-center justify-center gap-10">
        <div className="p-5">
          <Title size="5xl">Me contate</Title>
        </div>
        <SendEmail />
      </div>
    </div>
  );
};
