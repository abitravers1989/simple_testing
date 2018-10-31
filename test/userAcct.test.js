const userAccount = require('../userAcct')
const { should, expect } = require('chai')
const sinon = require('sinon');


//We want to know more this time so as we can see how many times the getsData method has been called on this userAccountsService
describe("userAccount", () => {
    let sandbox;

    beforeEach(() => {
        console.log(sandbox)
        sandbox = sinon.createSandbox();
    })

    afterEach(() => {
        console.log(sandbox)
        sandbox.restore()
    })
    it('When userAccount is given two emails getData is called twice ', () => {
        //Arrange 
        const spy = sandbox.spy(getData)
        const email1 = "test@test.com"
        const email2 = "testtwo@test.com"

        //Act
        const userAccount = userAccount(email1);
        userAccount.getData();
        const userAccount2 = userAccount(email2);
        userAccount2.getData();

        //Assert
        assert(spy.calledWith(email1));
        expect(spy.getCall(2))
        expect(spy).toHaveBeenCalled();
        expect(spy.callCount).toEqual(2)
    })
})