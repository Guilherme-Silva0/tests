import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const Join = ({ setSocket }) => {
  const nameInput = useRef();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userName = nameInput.current.value;
    if (!userName.trim()) return;
    const socket = await io.connect("http://localhost:3001");
    socket.emit("set_username", userName);
    setSocket(socket);
    navigate("/chat");
  };

  return (
    <div className="join">
      <h1>Join</h1>
      <input type="text" placeholder="Nome de usuário..." ref={nameInput} />
      <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  );
};

export default Join;
