import TypingEffect from './components/TypingEffect'

function App() {
  const words = [
    'Eu sou o Guilherme!',
    'Tenho 18 anos!',
    'Sou programador fullstack!',
    'Trabalho com React, Next e Node!',
  ]

  return (
    <main className="h-full p-28">
      <h1 className="text-zinc-200 text-6xl font-semibold leading-relaxed">
        Olá pessoal! <br /> <TypingEffect words={words} />
      </h1>
    </main>
  )
}

export default App
