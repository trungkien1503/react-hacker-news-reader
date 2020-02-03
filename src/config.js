// const dev = {
//   API_URL: 'http://localhost:3001'
// };

const config = {
  API_URL: 'https://iwa-hacker-news.herokuapp.com'
};
// const config = process.env.NODE_ENV === 'production'
//   ? prod
//   : dev;

export default {
  ...config
};
