const interval = 5000;

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
            this.buttonSignIn.click();
            browser.waitUntil(() => {
                return this.userLoggedIn.getText() === 'shiptest';
            }, interval);
        }
    }


}

export const loginPage = new LoginPage();
