import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>Página inicial</h1>
      <button onClick={toggleTheme}>Alterar tema</button>
      <p>O tema atual é: {theme}</p>
    </>
  );
};

export default Home;
