const assert = require("assert");
describe("file to be tested" , ()=> {
    context("fuction to be tested", ()=>{
        it("should do something", ()=>{
            assert.equal(1,1);
        });
        it("should do another things", ()=>{
            assert.deepEqual([1,2,3],[1,2,3]);
            assert.deepEqual({name: 'kob'}, {name: 'kob'});
        });
    });
});