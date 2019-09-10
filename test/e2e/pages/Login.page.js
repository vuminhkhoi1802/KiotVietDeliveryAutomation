class LoginPage {
    open() {
        browser.url('/');
    }

    get headerLogin() {
        return $('.header-login');
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
            // eslint-disable-next-line no-magic-numbers
            browser.pause(2000);
            this.buttonSignIn.click();
            browser.pause(3000);
            // eslint-disable-next-line no-empty
        }
    }
}

export const loginPage = new LoginPage();
