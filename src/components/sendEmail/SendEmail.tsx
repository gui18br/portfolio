import { useState } from "react";
import { Input } from "../input/Input";
import emailjs from "@emailjs/browser";
import { Button } from "../button/Button";

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
        "service_oznsnfm",
        "template_dyrlql8",
        templateParams,
        "raY70rOPVtpvmlfjY"
      );
      setEmail("");
      setName("");
      setMessage("");
      alert("Email enviado com sucesso");
    } catch (error) {
      console.log("Erro ao enviar email", error);
    }
  };

  return (
    <form
      className="flex flex-col sm:gap-5 lg:gap-3 gap-3 p-1"
      onSubmit={handleSendEmail}
    >
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
          className="rounded-md p-2 lg:w-[600px] w-[300px] sm:h-28 lg:h-32 h-32"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>
      <div className="w-full flex justify-end">
        <Button style="elevation" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};
