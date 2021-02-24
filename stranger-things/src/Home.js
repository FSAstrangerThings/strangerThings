import React from 'react'

function Home({storeloginUser}) {
    localStorage.getItem(`${storeloginUser}`)
    return (
        
        <div>
            <h1>Welcome to Strangers things, {storeloginUser} click here to view your profile!</h1>
        </div>
    )
}

export default Home
