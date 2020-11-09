import axios from 'axios';

const url = 'http://localhost:5000/festivals';


export const getFevcards = () => axios.get(url);
export const searchFevcards = (search) => axios.get(`http://localhost:5000/festivals/:${searchresult}`, search);


