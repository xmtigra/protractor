import {by, element} from 'protractor';
import {BasePo} from './base.po';

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

}

export const googlePo = new GooglePo();
