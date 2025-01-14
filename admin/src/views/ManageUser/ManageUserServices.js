import axios from 'axios';
import { API_PATH } from 'src/AppConst';

const headers = {
  'Authorization': 'Bearer ' + localStorage.getItem('token')
}

export const getAllUser = () => {
  return axios.get(API_PATH + '/accounts', { headers });
};

export const insertUser = (payload) => {
  return axios.post(API_PATH + '/insertUser', payload);
};

export const updateGenre = (payload) => {
  return axios.put(API_PATH + '/updateGenre', payload);
};

export const deleteUser = (id) => {
  return axios.delete(API_PATH + '/accounts/' + id, { headers });
};
