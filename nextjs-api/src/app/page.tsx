"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string | undefined>();
  const [slug, setSlug] = useState();

  const handleSend = async () => {
    const res = await fetch(`http://localhost:3000/api/post/${input}`);
    const slug = await res.json();
    setSlug(slug);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Hello word</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-b-2 border-blue-500"
      />
      <button onClick={handleSend} className="bg-blue-500 p-2 ml-2 rounded-lg">
        Enviar
      </button>
      <pre>{JSON.stringify(slug)}</pre>
    </>
  );
}
