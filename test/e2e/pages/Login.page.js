const interval = 3000;
class LoginPage {
    open() {
        browser.url('/');
    }

    get inputEmail() {
        return $('body #UserName');
    }

    get inputPassword() {
        return $('body #Password');
    }

    get buttonSignIn() {
        return $('body #loginNewSale');
    }

    get userLoggedIn() {
        return $('.lk-user-name');
    }

    login(user) {
        if (this.buttonSignIn.isExisting()){
            this.inputEmail.setValue(user.login);
            this.inputPassword.setValue(user.password);
            browser.pause(interval);
            this.buttonSignIn.click();
            browser.pause(interval);
        }
    }
}

export const loginPage = new LoginPage();
