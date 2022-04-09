import { fetchUser } from './services/rando_user';
import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import UserSummary from './components/UserSummary';

function App() {
  const [currentUser, setCurrentUser]= useState(null)

  useEffect(()=>{
    refreshUser()
  },[])

  const refreshUser =(e) => {
    // e.preventDefault()
    fetchUser().then(res=>{
      setCurrentUser(res)
      console.log('curr', currentUser)
    }).catch(err =>(err))
  }


  return (
    
    <div className="App">
      <Header/>
      <UserSummary userData = {currentUser}/>
      <div className="button">
        <button onClick={(e)=>refreshUser()}>RANDOM</button>
      </div>
    </div>
  );
}

export default App;
