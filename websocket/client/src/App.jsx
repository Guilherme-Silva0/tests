import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

import "./App.css";

function App() {
  const [socket, setSocket] = useState();

  return (
    <BrowserRouter>
      <div className="contaier">
        <Routes>
          <Route path="/" exact element={<Join setSocket={setSocket} />} />
          <Route path="/chat" exact element={<Chat socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
