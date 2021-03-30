import React, { useState, useEffect } from "react";
import Carousel from 'react-material-ui-carousel'
import { Container, AppBar, Typography, Grow, Grid, Paper, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  var items = [
    {
        name: "Share",
       // description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Upload",
        //description: "Hello World!"<p>{props.item.description}</p>
    }
]
function Item(props)
{
    return (
        <Paper>
            <h1 style={{alignSelf:'center', justifyContent:'center',size:'larger'}}>{props.item.name}</h1>
            

        </Paper>
    )
}

  useEffect(() => {
    console.log("useEffect triggered");
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Container maxWidth="lg">
       <Carousel className={classes.neon}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
              //<Item  item={item}/>
           }
        </Carousel>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
          className={classes.mainContainer}
            container
            justify="space-between"
            alignitem="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
