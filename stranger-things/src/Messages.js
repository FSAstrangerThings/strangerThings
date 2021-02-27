import React from 'react'
import { createMessage } from './api';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import { makeStyle } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});



const Messages = (props) => {
    const { message, setMessage, loginToken, postId, title, price, seller, location, description } = props

    console.log(props)
    const classes = useStyles();

    const sendMessage = async (event) => {
        event.preventDefault();
        try {
            const data = await createMessage(postId, loginToken, message);
            console.log(data);
            setMessage("");
            console.log(postId);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Card className={classes.root} style={{
                padding: '4%',
                marginBottom: '2%',
                marginRight: '25%',
                marginTop: '2%',
                boxShadow: '5px 8px 29px 2px rgba(0,0,0,.5)',
                zIndex: '1'
            }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        {description}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Box fontWeight='fontWeightBold' display="inline"> Price : </Box> {price}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Box fontWeight='fontWeightBold' display="inline">Seller : </Box> {seller}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Box fontWeight='fontWeightBold' display="inline"> Location : </Box> {location}
                    </Typography>
                </CardContent>
            </Card>
            <h2>Message User About This Post</h2>
            <form onSubmit={sendMessage}>
                <TextField
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    id="filled-full-width"
                    label=""
                    style={{ margin: 8 }}
                    placeholder="Enter Message"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    type="submit"
                    variant="contained" // do theming on button to make it prettier
                    color="primary"
                    className={classes.button}
                    style={{ color: "#E9F1F7" }}> Send Message
                </Button>

            </form>
        </div>
        //<form onSubmit={sendMessage}>
        //       <input */}
        //         type="text"
        //         placeholder="Type Your Message Here"
        //         value={message}
        //         onChange={(event) => setMessage(event.target.value)}
        //         required
        //     />
        //     <button type="submit">
        //         Send Message
        // </button>
        // </form>
    );
}
export default Messages;