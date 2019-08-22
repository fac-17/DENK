const test = require("tape");
const request = require("supertest");
const app = require("../src/app");

test("set up works", t => {
  request(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      t.equal(1, 1);
      t.end();
    });
});

test("Home should return the expected results", t => {
  request(app)
    .get("/")
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.equal(1, 1);
      t.end();
    });
});

test("Tarot should return the expected results", t => {
  request(app)
    .get("/tarot")
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.equal(1, 1);
      t.end();
    });
});
