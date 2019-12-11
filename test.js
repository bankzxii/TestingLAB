const assert = require("assert");
const math = require('./math');
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

describe('file math',()=>{
    context('function add1',()=>{
        it('should do add1', ()=>{
            assert.equal(math.add1(1,2),3);
        });
    });
    context('function add2',()=>{
        it('should do add2', ()=>{
            assert.equal(math.add2(5,5),10);
        });
    });

});