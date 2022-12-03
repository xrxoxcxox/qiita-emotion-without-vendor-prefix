import reactLogo from './assets/react.svg'
import './App.css'
import { css } from '@emotion/react'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 css={title}>Vite + React</h1>
    </div>
  )
}

const title = css`
  display: flex;
  justify-content: center;
`

export default App
