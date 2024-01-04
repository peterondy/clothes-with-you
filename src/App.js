import './App.css'
import Main from './components/Main/Main'
import Discover from './components/Discover/Discover'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={Main}/>
            <Route exact path="/discover-ai" Component={Discover}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
