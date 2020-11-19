import {by, element} from 'protractor';
import {BasePo} from './base.po';
import {googleResultPo} from "./googleResult.po";

class GooglePo extends BasePo {

    get searchInput() {
        return element(by.css('.gLFyf.gsfi'));
    }

    get logoEl() {
        return element(by.css('#hplogo'));
    }

    get submitButtons() {
        return element.all(by.css('.gNO89b'));
    }

    get countryEl() {
        return element(by.css('.Q8LRLc'));
    }


    constructor() {
        super();
    }

    public async isOpen(): Promise<boolean> {
        return this.isElementDisplayed(this.searchInput);
    }

    async sendForm() {
        await this.waitForElementVisible(this.submitButtons.get(0));
        await this.clickOnElement(this.submitButtons.get(0));
        await googleResultPo.isOpen();
    }

    async fillSearchInput(text: string) {
        await googlePo.typeElementText(googlePo.searchInput, text);
    }
}

export const googlePo = new GooglePo();
