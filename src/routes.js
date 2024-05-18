import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Replace with your backend server's URL and port

const api = axios.create({
  baseURL,
});

const routes = {
  tasksPath: () => `${baseURL}/api/tasks`,
  taskPath: (id) => `${baseURL}/api/tasks/${id}`,
  cardsPath: () => `${baseURL}/api/cards`,
  cardPath: (id) => `${baseURL}/api/cards/${id}`,
};

export { api, routes };