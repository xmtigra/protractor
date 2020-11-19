import {by, element} from 'protractor';
import {BasePo} from './base.po';

class GoogleResultPo extends BasePo {

    get firstSiteURL() {
        return element(by.css('[data-hveid="CAIQAA"] .iUh30.Zu0yb.tjvcx'))
    }

    constructor() {
        super();
    }

}

export const googleResultPo = new GoogleResultPo();
