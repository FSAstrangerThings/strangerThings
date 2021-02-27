import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Link as RouterLink, Switch } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 400

        }
    }
}));

function PostSearchBar() {

    const classes = useStyles();

    return (
    <div style = {
        {position: 'fixed', top: "3rem", backgroundColor : 'white', width : '100%', height: '6.5rem', 
        zIndex: '500'}
        }>
        <div style = {{display : 'flex', marginTop: '1%', justifyContent : 'center', alignItems: "center", 
        boxShadow: "5px 5px 15px 5px grey",paddingBottom: "1rem", paddingTop: ".5rem"}}>
            <SearchIcon fontSize="large" style={
            {fill: "#3D9970" , display: 'flex',
            marginTop : '1%',
            paddingLeft: '5%',
            zIndex: '1000'
            }}/>

        <form className={classes.root}>
            <TextField label="Search Posts!"
            id="standard-size-normal"
            style = {{marginTop: '0'}}
            />
        </form>
          <Switch>
          <RouterLink  to="/posts/add">
              <AddBoxIcon className={classes.icon} />
              Add a post!
          </RouterLink>
          </Switch>
        </div>
        </div>
    )
}

export default PostSearchBar