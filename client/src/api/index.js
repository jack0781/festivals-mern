import axios from 'axios';

const url = 'http://localhost:5000/festivals';

export const getPosts = () => axios.get(url);
export const searchPosts = (search) => axios.get(`http://localhost:5000/festivals/`, search);


