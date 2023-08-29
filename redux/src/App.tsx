import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
// import { countActionTypes } from './redux-old/count/actionsTypes'
import { decrement, increment } from './redux/counter/counter-slide'
import { useAppSelector } from './hooks/useAppSelector'

function App() {
  const { count } = useAppSelector((rootReducer) => rootReducer.count)

  const dispach = useDispatch()

  const handleAddClick = () => {
    // dispach({ type: countActionTypes.ADD })
    dispach(increment())
  }

  const handleRemoveClick = () => {
    // dispach({ type: countActionTypes.REMOVE })
    dispach(decrement())
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux</h1>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleRemoveClick}>Remove</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
