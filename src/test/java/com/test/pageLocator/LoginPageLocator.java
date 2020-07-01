package com.test.pageLocator;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.test.util.TestBase;

public class LoginPageLocator extends TestBase {

	public LoginPageLocator() {

		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.XPATH, using = "//span[text()='Sign In']")
	public WebElement SigninButton;
	@FindBy(how = How.XPATH, using = "//a[text()='Sign In']")
	public WebElement SigninLink;
	@FindBy(how = How.XPATH, using = "//input[@id='EmailAddress']")
	public WebElement UserName;
	@FindBy(how = How.XPATH, using = "//input[@id='Password']")
	public WebElement Password;
	@FindBy(how = How.XPATH, using = "//button[@id='sign-in-button']")
	public WebElement ButtonSignIn;
	@FindBy(how = How.XPATH, using = "//span[text()='MOHAMMAD JAHAN']")
	public WebElement ProfilePage;
	@FindBy(how = How.XPATH, using = "//input[@class='mh-search-input']")
	public WebElement SearchField;
	@FindBy(how = How.XPATH, using = "//span[@class='mh-search-button-label']")
	public WebElement SearchButton;
	@FindBy(how = How.XPATH, using = "//div[text()='Product Type']")
	public WebElement SearchResult;
	@FindBy(how = How.XPATH, using = "//a[text()='Dell Financial Services']")
	public WebElement financialPageLink;
	@FindBy(how = How.XPATH, using = "//a[text()='Dell Financial Services']")
	public WebElement financialDysplay;
	@FindBy(how = How.XPATH, using = "//button[@id='l4']")
	public WebElement supportButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"dell-masthead\"]/div[3]/nav/ul/li[4]/ul/li[1]/a")
	public WebElement AllSupportButton;
	@FindBy(how = How.XPATH, using = "//h1[text()='Welcome to Support']")
	public WebElement welcomeDisplay;

}
// @Findby(how=How.xpath/id/name)