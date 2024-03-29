import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import Error from "./Error";
import Load from "./Load";
import Success from "./Success";

const Form = ({ handleSubmit, errors, isLoading, isSuccess }) => {
  return (
    <form
      className="flex flex-col items-center justify-center gap-3 bg-gray-800 p-6 rounded-xl shadow-lg w-80 mx-4"
      onSubmit={(e) => {
        e.preventDefault();
        const { fate, subject, message } = e.target.elements;
        handleSubmit({
          fate: fate.value,
          subject: subject.value,
          message: message.value,
        });
      }}
    >
      {isSuccess && <Success />}
      {errors && <Error>{errors}</Error>}
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
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Load /> : "Enviar"}
      </Button>
    </form>
  );
};

export default Form;
