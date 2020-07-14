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

    public async goToPasswordScreen(): Promise<void> {
        await this.clickOnElement(loginPo.continueBtn);
        await this.wait(1000);
    }

    public async goToLocationScreen(): Promise<void> {
        await this.clickOnElement(loginPo.continueBtn);
        await this.wait(1000);
    }

    public async fillEmailField(text: string | number): Promise<void> {
        await this.typeElementText(this.emailField, text);
    }

    public async fillPasswordField(text: string | number): Promise<void> {
        await this.typeElementText(this.passwordField, text);
    }


}

export const loginPo = new LoginPo();
