import { $$, browser, by, element } from 'protractor';
import { User } from '../data/user.data';
import { LOGIN, UI } from '../data/strings.data';

// verify url
// verify browser title
// verify click action
// verify css properties
// verify input value (attribute)
// verify button state
// verify element text

describe('Login', () => {

    const testUser = new User();

    beforeAll(async () => {
        await browser.get(LOGIN.URL, 3000);
    });

    it(`should be on the login page`, async () => {
        expect(await browser.getCurrentUrl()).toContain(LOGIN.URL_PART);
        expect(await browser.getTitle()).toEqual(LOGIN.TITLE);
    });

    it(`should see two login buttons`, async () => {
        await browser.sleep(3000);
        const loginButtons = $$('#gc_login_widget_container button');
        expect(await loginButtons.count()).toEqual(3);
    });

    it(`Verify text on the login buttons`, async () => {
        const loginButtons = $$('#gc_login_widget_container button');
        expect(await loginButtons.get(1).getText()).toEqual(LOGIN.BUTTON_1);
        expect(await loginButtons.get(2).getText()).toEqual(LOGIN.BUTTON_2);
    });

    it(`Verify css properties login buttons`, async () => {
        const loginButtons = $$('#gc_login_widget_container button');
        expect(await loginButtons.get(1).getCssValue('font-family')).toEqual(UI.PRIMARY_FONT);
        expect(await loginButtons.get(1).getCssValue('color')).toEqual(UI.WHITE_COLOR);
        expect(await loginButtons.get(1).getCssValue('height')).toEqual(UI.BUTTON_HEIGHT);
    });

    it(`click on first login button`, async () => {
        const loginButtons = $$('#gc_login_widget_container button');
        await loginButtons.get(1).click();
        expect(await element(by.name('gc_email')).isDisplayed()).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        const continueBtn = element(by.css('[type="submit"]'));
        expect(await continueBtn.isEnabled()).toEqual(false);
    });

    it(`type email ${testUser.email} on email field`, async () => {
        const emailField = element(by.name('gc_email'));
        await emailField.clear();
        await emailField.sendKeys(testUser.email);
        expect(await emailField.getAttribute('value')).toEqual(testUser.email);
    });

    it(`click on continue button`, async () => {
        const continueBtn = element(by.css('[type="submit"]'));
        await continueBtn.click();
        await browser.sleep(3000);
        const passwordField = element(by.name('gc_password'));
        expect(await passwordField.isDisplayed()).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        const continueBtn = element(by.css('[type="submit"]'));
        expect(await continueBtn.isEnabled()).toEqual(false);
    });

    it(`type password ${testUser.password} on password field`, async () => {
        const passwordField = element(by.name('gc_password'));
        await passwordField.clear();
        await passwordField.sendKeys(testUser.password);
        expect(await passwordField.getAttribute('value')).toEqual(testUser.password);
    });

    it(`click on continue button`, async () => {
        const continueBtn = element(by.css('[type="submit"]'));
        await continueBtn.click();
        await browser.sleep(1000);
        const firstNameField = element(by.name('gc_firstname'));
        const lastNameField = element(by.name('gc_lastname'));
        expect(await firstNameField.isDisplayed()).toEqual(true);
        expect(await lastNameField.isDisplayed()).toEqual(true);
    });

    it(`should continue button is disabled`, async () => {
        const continueBtn = element(by.css('[type="submit"]'));
        expect(await continueBtn.isEnabled()).toEqual(false);
    });

    afterAll(async () => {
        console.log('if you need, clear application data after test');
    });
});
