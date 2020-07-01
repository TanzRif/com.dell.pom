package com.test.pageAction;

import org.testng.Assert;

import com.test.pageLocator.LoginPageLocator;
import com.test.util.TestBase;
import com.test.util.Util;

public class LoginPageAction extends TestBase {

	LoginPageLocator loginPageLocator = new LoginPageLocator();

	public void ClickonSignINButton() {
		loginPageLocator.SigninButton.click();

	}

	public void ClickonSignINLink() {
		loginPageLocator.SigninLink.click();

	}

	public void Credential(String u, String p) {

		loginPageLocator.UserName.sendKeys(u);
		loginPageLocator.Password.sendKeys(p);
		loginPageLocator.ButtonSignIn.click();
		Util.takescreenshot(driver, "abc");
	}

	public void Verifyusercanloginsuccessfully() {

		boolean profilepage = loginPageLocator.ProfilePage.isDisplayed();
		Assert.assertTrue(profilepage);

	}

	public void enterXPSinSearchField() {

		loginPageLocator.SearchField.sendKeys("XPS");

	}

	public void ClickonSearchButton() {
		loginPageLocator.SearchButton.click();

	}

	public void VerifySearchresult() {

		boolean re = loginPageLocator.SearchResult.isDisplayed();
		Assert.assertTrue(re);
		//assert is a class
	}

	public void Click_on_Dell_Financial_service() {
		loginPageLocator.financialPageLink.click();
	}

	public void varifiy_financial_page() {
		boolean fP = loginPageLocator.financialDysplay.isDisplayed();
		Assert.assertTrue(fP);
	}

	public void click_on_suport_button() {
		loginPageLocator.supportButton.click();
	}

	public void click_view_all_support_link() {
		loginPageLocator.AllSupportButton.click();
	}

	public void verify_support_page() {
		boolean spd = loginPageLocator.welcomeDisplay.isDisplayed();
		Assert.assertTrue(spd);
	}

}
