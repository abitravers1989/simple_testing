module.exports = {
    userAccountsService: (email) => {
        let currentUser = { name: "Test", email: email };
        let accountDetails = { balance: "£44.99", user: currentUser }

        this.getData = () => {
            return accountDetails.balance
        }
    }
}