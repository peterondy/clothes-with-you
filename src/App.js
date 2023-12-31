import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Command from './components/Command/Command'
import Discover from './components/Discover/Discover'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Command/>
      <Discover/>
    </div>
  );
}

export default App;
