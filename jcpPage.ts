import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class JCP extends BasePage {

    //Benjamin's elements: Search, Location Selector, Login/Register
    searchBar: By = By.xpath('//input[@type="search"]')
    locationSelector: By = By.xpath('//div[@id="findStore"]')
    locationSearchBar: By = By.xpath('//input[@class="search-input"]')
    locationSearchButton: By = By.xpath('//button[@type="submit"]')
    myAccount: By = By.xpath('(//div[@class="_2IWk1 flex flex-row mt-1"])')
    manualFlorida: By = By.xpath('(//a[@class="Directory-listLink"])[9]')
    manualTampa: By = By.xpath('(//a[@class="Directory-listLink"])[38]')
    loginEmail: By = By.xpath('//input[@id="loginEmail"]')
    loginPassword: By = By.xpath('//input[@data-automation-id="passwrod_input"]')
    signInButton: By = By.xpath('//button[@data-automation-id="signin_button"]')
    createAccountButton: By = By.xpath('//button[@data-automation-id="create_account_button"]')

    loginButtonName: By = By.xpath('(//p[@data-automation-id="acc-user-name"])')
    constructor() {
        super({url: "https://www.jcpenney.com/"});
    }
    async userName() {
        return this.getText(this.loginButtonName)
    }

    locationsList: By = By.xpath('(//div[@class="col-md-6"])')
    async listOfLocations() {
        return this.getText(this.locationsList)
    }



    //Clarissa's elements:
    
    //Zane's elements: 


    results: By = By.id("containerWidthIris")
   
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}