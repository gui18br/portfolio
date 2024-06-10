import background from "../../assets/jpeg/backgrond-2.jpg";
import { Input } from "../input/Input";
import { Title } from "../title/Title";

export const Contact = () => {
  return (
    <div className="relative mt-48 flex flex-col justify-center items-center">
      <img src={background} className="w-full shadow-sm" alt="" />
      <div className="bg-[#e9e0d9c0] absolute rounded-md p-5  flex flex-col items-center justify-center gap-10">
        <div className="p-5">
          <Title size="5xl">Contact</Title>
        </div>
        <form className="flex flex-col gap-5">
          <Input title="Nome" type="text" />
          <Input title="Email" type="email" />
          <div>
            <p>Mensagem</p>
            <textarea
              title="Mensagem"
              className="rounded-md p-2 w-[700px] h-64"
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="bg-primary text-[#E9E0D9] p-2 rounded-md w-36 transition-transform duration-300 transform hover:-translate-y-1">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
