import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const requestRegister = async formData => {
  const { data } = await phonebookInstance.post('/users/signup', formData);

  return data;
};
