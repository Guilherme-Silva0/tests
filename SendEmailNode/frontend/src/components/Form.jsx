import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-3 bg-gray-800 p-6 rounded-xl shadow-lg mx-4">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="fate" className="text-gray-200 font-medium">
          Destinatario
        </label>
        <Input
          type="email"
          placeholder="digite o email de destino..."
          id="fate"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="subject" className="text-gray-200 font-medium">
          Assunto
        </label>
        <Input type="text" placeholder="digite o assunto..." id="subject" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="message" className="text-gray-200 font-medium">
          Mensagem
        </label>
        <TextArea placeholder="digite a mensagem..." id="message" />
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default Form;
