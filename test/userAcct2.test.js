const { expect, should } = require('chai')
const sinon = require('sinon');

const UserAccountService = require('../userAcct2');

describe("userAccountsService", () => {
    it("Gets users data", () => {
        const email1 = "test@test.com";
        const email2 = "testtwo@test.com";

        const accountService = new UserAccountService();

        const mockAccountService = sinon.mock(accountService);

        mockAccountService.expects('getData').exactly(3);

        accountService.fetchData()

        mockAccountService.verify()
    })
})