module.exports = function(express){
  "use strict";
  let router = express.Router();
  let mockData = [{
    qText : 'What is my name?',
    qType: 'mc',
    qPotentialAnswers: ['Zach', 'Blah', 'Filler Text']
  },
  {
    qText : 'What is my name?',
    qType: 'mc',
    qPotentialAnswers: ['Zach', 'Blah', 'Filler Text']
  },
  {
    qText : 'What is my name?',
    qType: 'mc',
    qPotentialAnswers: ['Zach', 'Blah', 'Filler Text']
  },
  {
    qText : 'What is my name?',
    qType: 'mc',
    qPotentialAnswers: ['Zach', 'Blah', 'Filler Text']
  }];

  router.get('/', function(req, res){
    res.status(200).json(mockData);
  });

  return router;
};