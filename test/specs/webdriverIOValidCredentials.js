describe("webdriverIOValidCredentials", () => {
  it("tests webdriverIOValidCredentials", async () => {
    await browser.setWindowSize(1909, 557)
    await browser.url("https://demo.serenity.is/Account/Login/?ReturnUrl=%2F")
    await expect(browser).toHaveUrl("https://demo.serenity.is/Account/Login/?ReturnUrl=%2F")
    await browser.$("//*[@id=\"s-LoginPage\"]/div[2]").click()
    await browser.$("#LoginPanel0_Username").setValue("admin")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#LoginPanel0_Password").setValue("serenity")
    await browser.$("#LoginPanel0_LoginButton").click()
    await expect(browser).toHaveUrl("https://demo.serenity.is/")
  });
});
