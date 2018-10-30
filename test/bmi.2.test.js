//chai
const bmi = require('../bmi')
const { should, expect } = require('chai')

describe('BMI test', () => {
    it('should return 24.9 when given a height of 1.90 and weight of 90k', () => {
        //Arrange 
        const height = 1.9;
        const weight = 90;
        const expectedResult = 24.9;

        //Act
        const actual = bmi.calculateBMI(height, weight)

        //Assert
        expect(actual).to.deep.equal(expectedResult)

    })
})