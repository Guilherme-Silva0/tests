import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { Wrapper } from "./components/Wrapper.style";
import { GlobalStyles } from "./GlobalStyles";
import { Button } from "./components/Button.style";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Wrapper>
        <h1>Eita</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit
          autem perspiciatis! Laborum veniam perspiciatis totam tempore dolorem
          eligendi dignissimos!
        </p>
        <Button onClick={() => themeToggle()}>
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
