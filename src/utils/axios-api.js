import axios from 'axios';
import app from '../main'; // import the instance

// https://github.com/axios/axios#interceptors

const instance = axios.create({
  baseURL: 'https://products-db.now.sh/',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {

  }
});

instance.interceptors.request.use(config => {
  app.$Progress.start(); // for every request start the progress
  app.$store.dispatch('toggleLoading')
  return config;
}, (error) => {
  app.$Progress.fail()
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  app.$Progress.finish(); // finish when a response is received
  app.$store.dispatch('toggleLoading')
  return response;
}, (error) => {
  app.$Progress.fail()
  return Promise.reject(error);
});


export default instance; // export axios instace to be imported in your app