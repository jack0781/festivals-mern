import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SearchBar from "material-ui-search-bar";
import Fevcard from './Fevcards/Fevcard';
import useStyles from './styles';

const Fevcards = ({ setCurrentId }) => {
  const fevcards = useSelector((state) => state.fevcards);
  const classes = useStyles();
  
  return (
      <Grid className={classes.container} >
        <SearchBar name="search" 
     style={{ margin: '0 auto', maxWidth: 400 }}
  />
  <br></br>
          <Grid  item xs={12} sm={6} md={6}>
            <Fevcard fevcard={fevcards} setCurrentId={setCurrentId} />
          </Grid>
      </Grid>
  );
};

export default Fevcards;
