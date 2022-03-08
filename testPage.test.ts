import { Browser, until } from "selenium-webdriver";
import {JCP} from "./jcpPage"

const jcp = new JCP; 

test("do a test", async () => {
    await jcp.navigate();
    await jcp.driver.sleep(1500);
    await jcp.driver.manage().window().maximize();
    await jcp.click(jcp.hyperLink);
    await jcp.driver.wait(until.elementLocated(jcp.shoppingCart));
    await jcp.click(jcp.shoppingCart);
    await jcp.driver.sleep(3000);
    await jcp.click(jcp.twitterLink);
    await jcp.driver.sleep(3000);
    await jcp.driver.quit();

})