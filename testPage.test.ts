import { JCP } from "./jcpPage";

const jcp = new JCP;


//Benjamin's Tests
test("Search Bar Test", async () => {
    await jcp.navigate();
    await jcp.search("pants");
    expect(await jcp.getResults()).toContain("pants")
})


test("Log In User", async () => {
    await jcp.navigate();
    await jcp.click(jcp.myAccount)
})