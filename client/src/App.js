import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid, CardHeader } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import SearchBar from "material-ui-search-bar";
import Fevcards from './components/Fevcards/Fevcards';
import Header from './components/header';
import Footer from './components/footer';
import { getFevcards } from './actions/fevcards';
import useStyles from './styles';
import memories from './images/memories.png';
import './index.css'; 


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getFevcards());
  }, [currentId, dispatch]);

  
  return (
    <div>
    <Header position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Festivals</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
    </Header>
        <br></br>
    <Container>
      <br></br>
      <Grow in>
        <Container>
            <Grid item xs={12} sm={7}>
              <Fevcards setCurrentId={setCurrentId} />
            </Grid>
        </Container>
      </Grow>
    </Container>
    <Footer position="static" color="inherit"><Typography className={classes.heading} variant="h2" align="center">Festivals</Typography>
       </Footer>
    </div>
  );
};

export default App;
