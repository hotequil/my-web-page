import { browser, by, element } from 'protractor';

export class E2E {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('hotequil-root .content span')).getText();
  }
}