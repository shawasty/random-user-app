import { useState } from "react"

function UserSummary(props){

    const [showMore, setShowMore] = useState(false)
    //console.log(props.userData)
    const user = props.userData[0]
    console.log(user)

    const toggleToShowMore = () =>{
        setShowMore(prevState => !prevState)
    }
    return(
       <div className="container">
           <div className="miniInfo">
           { (user != null) ? 
           <div className="name">
               <h3><span>Name: </span> {user.name.title} {user.name.first} {user.name.last}</h3>
               <h3><span>Email: </span>{user.email}</h3>
           </div>
          : "There is no User Data!" } 
          </div>

          <button onClick={(e) => toggleToShowMore(e)}>More Info</button>
          { showMore ? 
          <div className="moreInfo">
              <img src={user.picture.medium} alt=""/>
              <h3><span>Name: </span>{user.name.first}</h3>
              <h3><span>Street: </span>{user.location.street.name}</h3>
              <h3><span>City: </span>{user.location.city}</h3>
              <h3><span>State: </span>{user.location.state}</h3>
              <h3><span>User Name: </span>{user.login.username}</h3>
           </div> : (user != null) ? 
           <div className="showMore">
               <h3><span>Name: </span>{user.name.first} {user.name.last}</h3>
               <h3><span>Email: </span>{user.email}</h3>
           </div>
          : "There is no User Data!" }          
        </div>
        
    )
}

export default UserSummary