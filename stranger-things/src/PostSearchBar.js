import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';

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
        {position: 'fixed', marginTop : '1.8%', backgroundColor : 'white', width : '100%', height: '10%', 
        zIndex: '500'}
        }>
        <div style = {{display : 'flex', marginTop: '1%', justifyContent : 'center'}}>
            <SearchIcon fontSize="large" style={
            {fill: "#3D9970" , display: 'flex',
            marginTop : '1%',
            paddingLeft: '5%'
            }}/>

        <form className={classes.root}>
            <TextField label="Search Posts!"
            id="standard-size-normal"
            style = {{marginTop: '0'}}
            />
        </form>
        </div>
    </div>
    )
}

export default PostSearchBar
