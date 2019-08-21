const getRandomCardQuery = require('../model/database/queries/getRandomCard')
exports.tarot = (req, res) => {
  console.log({getRandomCardQuery})
getRandomCardQuery().then(result=>{
  console.log(result.rows)
})
  res.render('tarot');
};
