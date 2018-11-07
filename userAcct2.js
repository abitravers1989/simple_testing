module.exports = class UserAccountService {
    fetchData() {
        try {
            var getUser = this.getData();
            var getAccount = this.getData();
            var getBalance = this.getData();
        } catch (e) {
            return new Error("data issue")
        }

        if (getUser && getAccount && getBalance) {
            return true;
        }

        return false;
    }

    getData() {
        return true;
    }
}