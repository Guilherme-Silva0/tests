import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  return <Counter count={count} setCount={setCount} />;
};

export default App;
