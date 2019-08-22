const test=require("tape");

test("We are in test environment",t=>{
    t.equals(process.env.NODE_ENV,"test")
    t.end();
})