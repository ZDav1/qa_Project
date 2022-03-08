import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class JCP extends BasePage {

    //Benjamin's elements: Search, Location Selector, Login/Register
    searchBar: By = By.xpath('//input[@type="search"]')
    locationSelector: By = By.xpath('//div[@id="findStore"]')
    locationSearchBar: By = By.xpath('//input[@class="search-input"]')
    locationSearchButton: By = By.xpath('//button[@type="submit"]')
    myAccount: By = By.xpath('//div[@class="_1E7u2 _3w1jh"]')
    loginEmail: By = By.xpath('//input[@id="loginEmail"]')
    loginPassword: By = By.xpath('//input[@data-automation-id="passwrod_input"]')
    signInButton: By = By.xpath('//button[@data-automation-id="signin_button"]')
    createAccountButton: By = By.xpath('//button[@data-automation-id="create_account_button"]')

    //Clarissa's elements:
    
    //Zane's elements: 
    shoppingCart: By = By.xpath(`//div[@class="_2IWk1"]`);
    twitterLink: By = By.xpath(`//a[@aria-label="Twitter"]`);
    hyperLink: By = By.xpath(`//a[@href="/d/toys-and-games"]`);



    results: By = By.id('rso')
    constructor() {
        super({url: "https://www.jcpenney.com/"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}