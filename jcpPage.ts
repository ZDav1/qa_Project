import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class JCP extends BasePage {
    searchBar: By = By.name("q");
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