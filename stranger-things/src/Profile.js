import React from 'react'
import { fetchProfile } from './api'

function Profile({loginToken, storeloginUser}) {
    const handleClick = () => {
        localStorage.getItem(`${storeloginUser}-Token`, loginToken);
        console.log(loginToken)
        fetchProfile(loginToken).then((data) => { 
                console.log(data);
                

        })
        }
        

    return (
        <div>
            <button onClick = {handleClick} ></button>
            <h1>Maps through all personal sent and recieved post and messages</h1>
        </div>

    )
}

export default Profile
