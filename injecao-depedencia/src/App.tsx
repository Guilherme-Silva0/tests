import Header from './components/Header'

function App() {
  const getLocalItem = (key: string) => {
    return localStorage.getItem(key)!
  }

  return (
    <main>
      <Header name={getLocalItem('name')} email={getLocalItem('email')} />
    </main>
  )
}

export default App
