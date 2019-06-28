import axios from 'axios';

const withAuth = () => {
 return axios.create({
  headers: {
   //    'Content-Type': 'application/json',
   Authorization: localStorage.getItem('userToken'),
  },
  baseURL: 'http://localhost:3333/api',
 });
};

export default withAuth;
