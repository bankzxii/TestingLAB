const chai = require('chai');
const expect = chai.expect;
const math = require('./math');

describe('test-chai' , ()=>{
    it('should compare somethings by expect', ()=>{
        expect(1).to.equal(1);
    });
    it('should compare another things by expect', ()=>{
        expect(5>8).to.be.false;
        expect({name: 'kob'}).to.deep.equal({name: 'kob'});
        expect({name: 'kob'}).to.have.property('name').to.equal('kob');
        expect({}).to.be.a('object');
        expect(1).to.be.a('number');
        expect('kob').to.be.a('string');
        expect('kob'.length).to.equal(3);
        expect('kob').lengthOf(3);
        expect([1,2,3,]).lengthOf(3);
        expect(null).to.be.null;
        expect(undefined).to.not.exist;
        expect(1).to.exist;

    });
});

describe('Math Module', ()=>{
    context('function add1',()=>{
        it('ควรส่งค่ากลับเป็นตัวเลข',()=>{
            expect(math.add1(1,1)).to.be.a('number');
        });
        it('add(1,1) ควรส่งค่ามาเป็น 2',()=>{
            expect(math.add1(1,1)).to.equal(2);
        });
    });
});