import Title from "./../../objects/Title";
import Button from "./../../objects/Button";

import "./styles.css";

const Counter = ({ count, setCount }) => {
  return (
    <div className="counter">
      <Title>{count === 0 ? "Eita" : `Eita ${count}X`}</Title>
      <Button onClick={() => setCount(count + 1)}>Adicionar</Button>
    </div>
  );
};

export default Counter;
