import { fetchUser } from './services/rando_user';
import './App.css';
import Header from './components/Header';

function App() {

  const refreshUser =(e) => {
    console.log('clicked')
    
  }


  return (
    <div className="App">
      <Header/>
      <div className="button">
        <button onClick={(e)=>refreshUser()}>RANDOM</button>
      </div>
    </div>
  );
}

export default App;
