const getRandomCardQuery = require("../model/database/queries/getRandomCard");
exports.tarot = (req, res) => {
  getRandomCardQuery()
  .then(result => {
    console.log(result);
    res.render("tarot",{tarot:result.rows[0]});
  }).catch(err=>{
    res.render("error",{
      statusCode:500,
      errorMessage:"DB error"
    })
  })
};
