import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';


// center all post and also add a box shadow on each element
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

function Post({title, price, seller, location, description}) {
  const classes = useStyles();  // <<< this is how you grab a function out of scope

  return (
    <Card className={classes.root} style = {{
        padding: '4%',
        marginBottom: '2%',
        marginRight: '25%',
        marginTop: '2%',
        boxShadow : '5px 8px 29px 2px rgba(36,250,255,0.88)',
        zIndex : '1'
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
      <CardActions>
      <Button
        variant="contained" // do theming on button to make it prettier
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      </CardActions>
    </Card>
  );
}



export default Post
