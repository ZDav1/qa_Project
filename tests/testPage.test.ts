import { Actions, Browser, Key, until, By } from "selenium-webdriver";
import { Driver } from "selenium-webdriver/chrome";
import {JCP} from "../pages/jcpPage"

const jcp = new JCP; 

test("do a test", async () => {
    // navigating to jcpenny website
    await jcp.navigate();
    await jcp.driver.sleep(1500);
    await jcp.driver.manage().window().maximize();
// clicking on the toys hyperlink
    await jcp.click(jcp.hyperLink);
    await jcp.driver.sleep(1500);
    await jcp.click(jcp.kidsToys);
    let stitch = await jcp.driver.findElement(By.xpath(`//a[@class="font-open-sans-semibold overflow-hidden text-gray-600 text-small SuQAn"]`));
    await stitch.click();
    let addCart = await jcp.driver.findElement(By.xpath(`//button[@type="button"]`));
// switching to the shopping cart page
    await jcp.driver.wait(until.elementLocated(jcp.shoppingCart));
    await jcp.click(jcp.shoppingCart);
    await jcp.driver.sleep(3000);
    // switching to the twitter link
    await jcp.click(jcp.twitterLink);
    await jcp.driver.sleep(3000);
    let myTabs = await jcp.driver.getAllWindowHandles();
    await jcp.driver.switchTo().window(myTabs[1]);
    let myUrl = await jcp.driver.getCurrentUrl();
    await jcp.driver.close();
    await jcp.driver.switchTo().window(myTabs[0]);
    myUrl = await jcp.driver.getCurrentUrl();
    // console.log(myUrl);
    await jcp.driver.sleep(1500);
    

})

//Benjamin's Tests


test("Search Bar Test", async () => {
    await jcp.navigate();
    await jcp.driver.manage().window().maximize();
    await jcp.search("pants");
    expect(await jcp.getResults()).toContain("pants")
})
    

test("Complex Search Bar Test", async () => {
    await jcp.navigate();
    await jcp.search("men's big and tall long-sleeve flannel shirts")
    expect(await jcp.getResults()).toContain("men")
    expect(await jcp.getResults()).toContain("Big and Tall")
    expect(await jcp.getResults()).toContain("Long-Sleeve")
    expect(await jcp.getResults()).toContain("Flannel")
})


test("User Login Test", async () => {
    await jcp.navigate();
    await jcp.click(jcp.myAccount);
    await jcp.click(jcp.loginEmail);
    await jcp.setInput(jcp.loginEmail,"devmounttest.1@yahoo.com");
    await jcp.click(jcp.loginPassword);
    await jcp.setInput(jcp.loginPassword, "Testing12345");
    await jcp.click(jcp.signInButton);
    await jcp.driver.sleep(10000);
    expect(await jcp.userName()).toContain("Dev");
})


test("Location Search Selector Test", async () => {
    await jcp.navigate();
    await jcp.click(jcp.locationSelector);
    await jcp.click(jcp.locationSearchBar);
    await jcp.setInput(jcp.locationSearchBar, "Provo Utah");
    await jcp.click(jcp.locationSearchButton);
    expect(await jcp.listOfLocations()).toContain("PROVO");

})


test("Location Manual Selector Test", async () => {
    await jcp.navigate();
    await jcp.click(jcp.locationSelector);
    await jcp.click(jcp.manualFlorida);
    await jcp.click(jcp.manualTampa);
    expect(await jcp.listOfLocations()).toContain("TAMPA");
})


/// Clarissa's code
 test("Email Notifications Sign Up.", async () => {
    await jcp.navigate();
    await jcp.driver.manage().window().maximize(); 
    await jcp.click(jcp.emailEntry);
    await jcp.setInput(jcp.emailEntry, "devmounttest.1@yahoo.com");
    await jcp.click(jcp.signUp);
    await jcp.driver.sleep(10000);
    
    //expect(await jcp.confirmSignUp()).toContain("Thank You");
    await jcp.driver.quit();


}) 