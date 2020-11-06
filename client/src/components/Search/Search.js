import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import SearchBar from "material-ui-search-bar";

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Search = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ search: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const handleChange = e => this.setState({ [e.target.name]: e.target.value });
  const clear = () => {
    setCurrentId(0);
    setPostData({ search: ''});
  };

  return (
    <Paper className={classes.paper}>
     
      <form autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleChange}>
      <SearchBar name="search" fullWidth value={postData.searchresult} onChange={this.handleChange}
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
