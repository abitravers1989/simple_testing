module.exports = {
    userAccountsService: function (email) {
        this.email = email;
        this.currentUser = { name: "Test", email: this.email };
        this.accountDetails = { balance: "£44.99", user: this.currentUser }

        if (email) {
            this.getData = function () {
                return this.accountDetails.balance
            }
            return this.getData();
        }
    }
}



