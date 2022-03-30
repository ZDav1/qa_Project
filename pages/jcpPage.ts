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

    async userName() {
        return this.getText(this.loginButtonName)
    }

    locationsList: By = By.xpath('(//div[@class="col-md-6"])')
    async listOfLocations() {
        return this.getText(this.locationsList)
    }



    //Clarissa's elements:
    contactUs: By = By.xpath(`//a[@aria-label="Contact Us"]`)
    giftCardsFooter: By = By.xpath(`//a[@aria-label="Gift Cards"]`) 
    mensTab: By = By.xpath(`//div[@class="_1X0S7"]`)
    juniorTab: By = By.xpath(`//li[@class="_2C7xX _1ONJ2"]`)
    emailEntry: By = By.xpath(`//input[@class="_1InWD _3TMEL"]`)
    signUp: By = By.xpath('//button[@data-automation-id="marketing-button"]')

    successfulDealSignUp: By = By.xpath(`//div[@class="_28FXB _2tboe"]`)
    
    async confirmSignUp() {
        return this.getText(this.successfulDealSignUp)
    }

    
    //Zane's elements: 
    shoppingCart: By = By.xpath(`//div[@class="_2IWk1"]`);
    twitterLink: By = By.xpath(`//a[@aria-label="Twitter"]`);
    hyperLink: By = By.xpath(`//a[@href="/d/toys-and-games"]`);
    twitterLogo: By = By.css(`[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]`)
    kidsToys: By = By.xpath(`//a[@href="/g/toys-and-games/all-toys-and-games/toys-for-0-24-months?id=cat11100001516&cm_re=ZB-_-DEPARTMENT-TOYS-AND-GAMES-_-LF-_-TOYS-AGEGROUP-_-0-24-MONTHS_1"]`);



    results: By = By.id("containerWidthIris")
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