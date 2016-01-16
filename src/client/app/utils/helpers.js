const axios = require('axios');

function getQuestions(){
  return axios.get('/api/questions');
}
function getUserProfile(){
  return axios.get('/api/users');
}

let helpers = {
  getQuestions: getQuestions,
  getUserProfile: getUserProfile
};
module.exports = helpers;
