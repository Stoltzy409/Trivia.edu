module.exports = function(express){
  'use strict';
  let router = express.Router();

  router.get('/', function(req, res){
    res.status(200).json({test: 'user'});
  });

  return router;
};
