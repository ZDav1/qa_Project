import { Driver } from "selenium-webdriver/chrome";
import { JCP } from "./jcpPage";

const jcp = new JCP;


//Benjamin's Tests
test("Search Bar Test", async () => {
    await jcp.navigate();
    await jcp.search("pants");
    expect(await jcp.getResults()).toContain("pants")
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


test("Location Selector Test", async () => {
    await jcp.navigate();
    await jcp.click(jcp.locationSelector);
    await jcp.click(jcp.locationSearchBar);
    await jcp.setInput(jcp.locationSearchBar, "Provo Utah");
    await jcp.click(jcp.locationSearchButton);
    expect(await jcp.listOfLocations()).toContain("PROVO");
    await jcp.driver.quit()

})