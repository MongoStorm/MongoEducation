'use strict';

var Course = require('../models/index').Course;

describe('Course', function() {
  describe('#page(pageSize,pageIndex,callback)', function() {

    it('should return correct result', function () {
      Course.page(1,1,function(result) {
        //console.log(result);
        //expect(result).toEqual('a');
      });
    });

  });

});
