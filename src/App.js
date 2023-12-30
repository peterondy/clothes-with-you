import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Command from './components/Command/Command'
import Discover from './components/Discover/Discover'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Command/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
