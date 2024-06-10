import { useState } from "react";
import { Input } from "../input/Input";
import emailjs from "@emailjs/browser";

export const SendEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    try {
      await emailjs.send(
        "service_ne2y8cg",
        "template_dyrlql8",
        templateParams,
        "raY70rOPVtpvmlfjY"
      );
    } catch (error) {
      console.log("Erro ao enviar email", error);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSendEmail}>
      <Input title="Nome" type="text" onInputChange={setName} value={name} />
      <Input
        title="Email"
        type="email"
        onInputChange={setEmail}
        value={email}
      />
      <div>
        <p>Mensagem</p>
        <textarea
          title="Mensagem"
          className="rounded-md p-2 w-[700px] h-64"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-primary text-[#E9E0D9] p-2 rounded-md w-36 transition-transform duration-300 transform hover:-translate-y-1">
          Enviar
        </button>
      </div>
    </form>
  );
};
