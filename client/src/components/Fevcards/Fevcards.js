import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SearchBar from "material-ui-search-bar";
import Fevcard from './Fevcard/Fevcard'
import useStyles from './styles';
import { useDispatch } from 'react-redux';

const Fevcards = ({ setCurrentId }) => {
  const fevcards = useSelector((state) => state.fevcards);
  const [searchData,setsearchData] =  useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();
  const updateSearchQuery = (search) => {
  axios.get(`http://localhost:5000/festivals/${search}`).then((res)=>{
      const data = res.data.data.userData
      setsearchData(data)
    })
  }

  return (
      <Grid className={classes.container} >
          <SearchBar name="search" fullWidth  onChange={(e) => updateSearchQuery(e) } style={{ margin: '0 auto', maxWidth: 400 }} />
          <br></br>
          <Grid  item xs={12} sm={6} md={6}>
            <Fevcard fevcard={fevcards} setCurrentId={setCurrentId} searchData={searchData} />
          </Grid>
      </Grid>
  );
};

export default Fevcards;
