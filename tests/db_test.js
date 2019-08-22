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

tape("counting fields in database", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    getRandomCard()
    .then(result => {
    t.equals(result.fields.length, 4, "should be equal to 4 fields");
    t.end();
  });
  });
});

tape("rowCount is equal to 1", t => {
  runDbBuild((err, res) => {
    t.error(err, "No error");
    getRandomCard()
    .then(result => {
      t.equals(result.rowCount, 1, "should be equal to 1");
      t.end();
    })
  });
});
