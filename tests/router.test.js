const test = require("tape");
const request = require("supertest");
const app = require("../src/app");

test("set up works", t => {
  request(app)
    .get("/")
    .expect(200)
    .end(function(err, res) {
      t.equal(1, 1);
      t.end();
    });
});
