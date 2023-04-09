import "./global.css";
import { useState } from "react";
import * as Yup from "yup";
import Form from "./components/Form";
import { useApi } from "./hooks";

const schema = Yup.object().shape({
  fate: Yup.string()
    .email("Digite um email válido")
    .required("Todos os campos são obrigatórios")
    .trim(),
  subject: Yup.string().required("Todos os campos são obrigatórios").trim(),
  message: Yup.string().required("Todos os campos são obrigatórios").trim(),
});

const App = () => {
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (values) => {
    try {
      await schema.validate(values);
      setIsLoading(true);
      setErrors("");
      const api = useApi();
      const res = await api.send({
        to: values.fate,
        subject: values.subject,
        message: values.message,
      });
      setIsLoading(false);
      if (res) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        setErrors("Ouve um erro no sistema.");
      }
    } catch (err) {
      setErrors(err.errors);
    }
  };
  return (
    <Form
      handleSubmit={handleSubmit}
      errors={errors}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  );
};

export default App;
