// const userAccount = require('../userAcct') Not getting into describe.
const { expect } = require('chai')
const sinon = require('sinon');



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
        const user = userAccount.userAccountsService(email1);
        console.log(`user ${user}`)
        const user2 = userAccount.userAccountsService(email2);


        //Assert
        expect(spy.getCall(2))
        expect(user2).to.equal("£44.99")
        //expect(spy.callCount).equal(2)
    })
})