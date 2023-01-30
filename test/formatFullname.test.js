
const formatFullName = require('../utils/formatFullname.js');
const expect = require('chai').expect;

describe('formatFullName', () => {
    it('should return an error if "fullName" arg length is 0', () => {
        expect(formatFullName()).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not a string', () => {
        if(typeof fullName !== 'string') return 'Error';
        expect(formatFullName(undefined)).to.equal('Error');
        expect(formatFullName(20)).to.equal('Error');
        expect(formatFullName({})).to.equal('Error');
        expect(formatFullName([])).to.equal('Error');
        expect(formatFullName(function() {})).to.Equal('Error');
      });

      it('should return error if "fullName" if format of arguments is not <firstName> <lastName>', () => {
        expect(formatFullName('John Doe Test')).to.equal('Error');
        expect(formatFullName('John')).to.equal('Error');
      });
}); 