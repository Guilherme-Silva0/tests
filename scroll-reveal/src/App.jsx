import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Box from "./components/Box";

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({ reset: true });
    sr.reveal(".opacity", { duration: 1000 });
    sr.reveal(".reveal-left", {
      duration: 1000,
      origin: "left",
      distance: "200px",
    });
    sr.reveal(".reveal-right", {
      duration: 1000,
      origin: "right",
      distance: "200px",
    });
    sr.reveal(".rotate", {
      duration: 1000,
      rotate: { x: 0, y: 60, z: 0 },
    });
    sr.reveal(".scale", {
      duration: 1000,
      scale: 0.6,
    });
  }, []);

  return (
    <div className="flex flex-col gap-2 bg-gray-900 items-center justify-center p-2 ">
      <Box additionalClass="opacity" />
      <Box additionalClass="opacity" />
      <Box additionalClass="opacity" />
      <Box additionalClass="opacity" />
      <Box additionalClass="opacity" />
      <Box additionalClass="reveal-left" />
      <Box additionalClass="reveal-right" />
      <Box additionalClass="reveal-left" />
      <Box additionalClass="reveal-right" />
      <Box additionalClass="rotate" />
      <Box additionalClass="rotate" />
      <Box additionalClass="rotate" />
      <Box additionalClass="rotate" />
      <Box additionalClass="scale" />
      <Box additionalClass="scale" />
      <Box additionalClass="scale" />
      <Box additionalClass="scale" />
    </div>
  );
};

export default App;
