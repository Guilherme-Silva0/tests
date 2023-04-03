import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h1>Contact</h1>
      <p>O tema atual é: {theme}</p>
    </>
  );
};

export default Contact;
