import { by, element } from 'protractor';
import { BasePo } from './base.po';

class LoginPo extends BasePo {

    get container() {
        return element(by.id('gc_login_widget_container'));
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

    public async isOpen(): Promise<boolean> {
        await this.waitForElementVisible(this.container);
        return this.isElementDisplayed(this.container);
    }

    public async goToPasswordScreen(): Promise<void> {
        await this.clickOnElement(this.continueBtn);
        await this.waitForElementVisible(this.passwordField);
    }

    public async goToLocationScreen(): Promise<void> {
        await this.clickOnElement(this.continueBtn);
        await this.waitForElementVisible(this.firstNameField);
    }

    public async fillEmailField(text: string | number): Promise<void> {
        await this.typeElementText(this.emailField, text);
    }

    public async fillPasswordField(text: string | number): Promise<void> {
        await this.typeElementText(this.passwordField, text);
    }

}

export const loginPo = new LoginPo();
