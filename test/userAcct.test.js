const userAccount = require('../userAcct')
const { should, expect } = require('chai')
const sinon = require('sinon');
const assert = require('assert');


//We want to know more this time so as we can see how many times the getsData method has been called on this userAccountsService
describe("userAccountsService", () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    })

    afterEach(() => {
        sandbox.restore()
    })
    it('When userAccount is given two emails getData is called twice ', () => {
        //Arrange 
        const userAccount = require('../userAcct')
        const spy = sandbox.spy(userAccount.getData)

        const email1 = "test@test.com"
        const email2 = "testtwo@test.com"

        //Act
        //console.log(userAccount)
        const user = userAccount.userAccountsService("test@test.com");
        console.log(userAccount.getData())
        // userAccount.getData();
        // const userAccount2 = userAccount.userAccountsService(email2);
        // userAccount2.getData();

        //Assert
        assert(spy.calledWith(email1));
        expect(spy.getCall(2))
        expect(spy).toHaveBeenCalled();
        expect(spy.callCount).toEqual(2)
    })
})