import React from 'react'
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListIcon from '@material-ui/icons/List';
import { blue } from '@material-ui/core/colors';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';




function Header() {
    return (
        
        <div className = "header">
            <h1 className = "header__title">Strangers Things</h1>
        
            <IconButton style = {{ borderRadius : '40%'}}>
            <HomeIcon fontSize = "large" className = "header__icon" style={{ color: blue[100] }}
            />
            </IconButton>

            <IconButton>
            <ListIcon fontSize = "large" className = "header__icon" style={{ color: blue[100] }}
                
            />
            </IconButton>

            <IconButton>
            <MailOutlineIcon fontSize = "large" className = "header__icon" style={{ color: blue[100] }}/>
            </IconButton>
       

        </div>
       
    )
}

export default Header