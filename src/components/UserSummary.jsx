import React from 'react';

const UserSummary = (props) => {
   console.log ('props',props)
   const userData = props.userData;
    return (
        <div className='userData'>
            {
                userData ?
                userData.map((user)=>{
                    return<div className='userData' key={user.id.value}>
                    <h4 >{`${user.name.title} ${user.name.first} ${user.name.last} `}</h4>
                    <h5 >{user.email}</h5>
                   <button>SHOW MORE</button>
                    </div> 
                }): 'There is no data'
            }
        </div>
    );
};

export default UserSummary;