import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home({ storeloginUser }) {
    localStorage.getItem(`${storeloginUser}`)

    return (

        <div>
            <h1>Welcome to Strangers things, {storeloginUser} click here to view your profile! <Link to="./profile">
                <IconButton style={{ borderRadius: '40%' }}>
                    <AccountCircleIcon fontSize="large" style={{
                        fontSize: "50",
                        fill: '#6dcca1',
                    }}
                    />
                </IconButton>
            </Link></h1>
        </div>
    )
}

export default Home

