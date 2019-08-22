const tape = require("tape");
const runDbBuild = require("../src/model/database/db_build");
const getRandomCard = require("../src/model/database/queries/getRandomCard");

tape("getRandomCard", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    getRandomCard()
    .then(result => {
    t.equals(Array.isArray(result.rows), true)
    t.end();
  });
});
});
