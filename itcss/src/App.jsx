import { useState } from "react";
import Title from "./objects/Title";
import Button from "./objects/Button";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Counter className="counter">
      <Title>{count === 0 ? "Eita" : `Eita ${count}X`}</Title>
      <Button className="button" onClick={() => setCount(count + 1)}>
        Adcionar
      </Button>
    </Counter>
  );
};

export default App;
