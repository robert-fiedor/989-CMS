/**
 * Created by Rob on 11/26/2014.
 */

var expect = require('chai').expect,
    mathh = require('../src/mathh');

describe('add', function () {

    console.log('------------',mathh)

    it('should return 3 when passed the params (1, 2)', function () {


        //var g = new mathh();


        expect(mathh.add(1, 2)).to.equal(3);
    });
});

