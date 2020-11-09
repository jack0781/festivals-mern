import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from "material-ui-search-bar";
import useStyles from './styles';
import ReactDOM from "react-dom";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

const Search = ({ currentId, setCurrentId }) => {
  const [cardData, setCardData] = useState({ search: ''});
  const fevcard = useSelector((state) => (currentId ? state.fevcards.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    if (fevcard) setCardData(fevcard);
  }, [fevcard]);
  const handleChange = e => this.setState({ [e.target.name]: e.target.value });
  const clear = () => {
    setCurrentId(0);
    setCardData({ search: ''});
  };

  return (
    <Paper className={classes.paper}>
     
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleChange}>
      <SearchBar name="search" fullWidth value={cardData.searchresult} onChange={this.handleChange}
     style={{
       margin: '0 auto',
       maxWidth: 400
     }}
  />
      </form>
    </Paper>
  );
};

export default Search;
