import axios from 'axios';

const endpoints = {
  getUser: {
    type: 'get',
    url: '/users/12',
  },
};

const ApiService = (endpoint: keyof typeof endpoints, params: {}) => {
  const url = endpoints[endpoint].url;
  if (endpoints[endpoint].type == 'get') {
    return axios.get(`http://localhost:3000${url}`).then(response => {
      return 'YOLO';
    });
  }
};

export default ApiService;
