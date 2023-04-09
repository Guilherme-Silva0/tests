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

  const handleSubmit = async (values) => {
    try {
      await schema.validate(values);
      setErrors("");
      const api = useApi();
      const res = await api.send({
        to: values.fate,
        subject: values.subject,
        message: values.message,
      });
      if (res) {
        console.log(res);
      } else {
        console.log(res);
      }
    } catch (err) {
      setErrors(err.errors);
    }
  };
  return <Form handleSubmit={handleSubmit} errors={errors} isLoading />;
};

export default App;
