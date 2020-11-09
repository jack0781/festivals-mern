import axios from 'axios';

const url = 'http://localhost:5000/festivals';


export const getFevcards = () => axios.get(url);
export const searchFevcards = (search) => {
console.log(search,'search')
const abc = axios.get(`${url}/${search}`);
console.log(abc,'res')
}




