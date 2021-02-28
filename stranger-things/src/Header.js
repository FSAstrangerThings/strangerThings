import React from 'react'
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListIcon from '@material-ui/icons/List';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {

    return (

        <div className="header">
            <h1 className="header__title">Strangers Things</h1>

            <Link to="/home">
                <IconButton style={{ borderRadius: '40%' }}>
                    <HomeIcon fontSize="large" className="header__icon" style={{ color: blue[100] }}
                    />
                </IconButton>
            </Link>

            <Link to="/posts">
                <IconButton>
                    <ListIcon fontSize="large" className="header__icon" style={{ color: blue[100] }}
                    />
                </IconButton>
            </Link>

            <Link to="/profile">
                <IconButton>
                    <MailOutlineIcon fontSize="large" className="header__icon" style={{ color: blue[100] }} />
                </IconButton>
            </Link>
            <Link Link to="/">
                <IconButton>
                    <ExitToAppIcon fontSize="large" className="header__icon" style={{ color: blue[100] }}
                        onClick={() => localStorage.clear("token")}
                    />
                </IconButton>
            </Link>
        </div>

    )
}

export default Header