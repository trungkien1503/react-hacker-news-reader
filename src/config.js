const dev = {
  API_URL: 'http://localhost:3001'
};

const prod = {
  API_URL: 'https://iwa-hacker-news.herokuapp.com'
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {
  ...config
};
