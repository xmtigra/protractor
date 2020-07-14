import { $$, by, element } from 'protractor';
import { BasePo } from './base.po';

class LoginPo extends BasePo {

    get loginButtons() {
        return $$('#gc_login_widget_container button');
    }

    get emailField() {
        return element(by.name('gc_email'));
    }

    get passwordField() {
        return element(by.name('gc_password'));
    }

    get continueBtn() {
        return element(by.css('[type="submit"]'));
    }

    get firstNameField() {
        return element(by.name('gc_firstname'));
    }

    get lastNameField() {
        return element(by.name('gc_lastname'));
    }

    constructor() {
        super();
    }


}

export const loginPo = new LoginPo();
