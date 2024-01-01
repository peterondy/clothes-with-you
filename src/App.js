import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import walpaper from './images/walpaper.jpg'
function App() {
  return (
    <div className="App"
      style={{ 
        height: 'calc(100vh - 112px)', 
        backgroundImage: `url(${walpaper})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    }}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
