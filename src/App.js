import fetchUser  from './services/rando_user';
import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import UserSummary from './components/UserSummary';

function App() {
  const [currentUser, setCurrentUser]= useState([])

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
//   async function refreshUser(){
//     // e.preventDefault()
//     const result = await fetchUser()
//     //console.log(result)
//     setCurrentUser(result) 
//     console.log('curr', currentUser)
//  }

  return (
    
    <div className="App">
      <Header/>
      <div className="button">
      <button onClick={(e)=>refreshUser()}>RANDOM</button>
      </div>
      <UserSummary userData = {currentUser}/>
      
    </div>
  );
}

export default App;
