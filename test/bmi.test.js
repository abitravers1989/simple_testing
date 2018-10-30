const bmi = require('../bmi')
const assert = require('assert');

describe('BMI', () => {
    it('should return 24.9 when given a height of 1.90 and weight of 90k', () => {
        //Arrange 
        const height = 1.9;
        const weight = 90;
        const expectedResult = 24.9;

        //Act
        const calBMI = bmi.calculateBMI(height, weight)

        //Assert
        assert.equal(calBMI, expectedResult)
    })
})