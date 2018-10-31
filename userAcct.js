module.exports = {
    UserAccountsService: function (email) {
        this.email = email;
        this.currentUser = { name: "Test", email: this.email };
        this.accountDetails = { balance: "£44.99", user: this.currentUser }

        this.getData = function () {
            return this.accountDetails.balance
        }
    }
}



const user = new UserAccountsService("test@test.com");
console.log(user.getData())