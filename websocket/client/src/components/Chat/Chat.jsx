import { useEffect, useRef, useState } from "react";

const Chat = ({ socket }) => {
  const messageInput = useRef();
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => socket.off("receive_message");
  }, [socket]);

  const handleSubmit = () => {
    const message = messageInput.current.value;
    if (!message.trim()) return;
    socket.emit("message", message);
    clearInput();
  };

  const clearInput = () => {
    messageInput.current.value = "";
  };
  return (
    <div className="chat">
      <h1>Chat</h1>
      {messageList.map((message, index) => (
        <p key={index}>
          {message.author}:{message.text}
        </p>
      ))}
      <input
        type="text"
        ref={messageInput}
        placeholder="Digite uma mensagem..."
      />
      <button onClick={() => handleSubmit()}>Enviar</button>
    </div>
  );
};

export default Chat;
