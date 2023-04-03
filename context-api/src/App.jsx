import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme === "dark" ? "dark-theme" : ""}`}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
