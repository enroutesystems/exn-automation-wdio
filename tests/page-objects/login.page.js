import Page from './page';

class LoginPage extends Page {

    constructor() {
        super();
    }

    get usernameInput() {
        return $('.username');
    }

    get passwordInput() {
        return $('.password');
    }

    get loginButton() {
        return $('#Login');
    }
}

export default new LoginPage();
