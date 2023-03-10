import { useState } from "react";
import axios from "axios";

function App() {
  const [ip, setIp] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getIP = async () => {
    setIsLoading(true);
    const res = await axios.get("https://get-ip.guilhermesil189.repl.co");
    setIsLoading(false);
    setIp(res.data.ip);
  };
  return (
    <div className="container">
      {ip ? <h1>Seu ip é: {ip}</h1> : ""}
      <button onClick={() => getIP()}>
        {isLoading ? "Carregando..." : "Qual meu ip?"}
      </button>
    </div>
  );
}

export default App;
