import { Driver } from "selenium-webdriver/chrome";
import { JCP } from "./jcpPage";

const jcp = new JCP;


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
    await jcp.driver.quit()
})