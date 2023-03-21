package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public static WebDriver driver;
    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//h1[@class='mt-6 ml-20']")
    private WebElement verifyLoginPage;
    public boolean vrfyLoginPage(){
        verifyLoginPage.isDisplayed();
        return true;
    }
    @FindBy(css = "[placeholder='Enter your username']")
    private WebElement userName;
    public void setUserName(String user){
        userName.sendKeys(user);
    }

    @FindBy(css = "[placeholder='type your Password']")
    private WebElement password;
    public void setPassword(String psd){
        password.sendKeys(psd);
    }

    @FindBy(css = ".btn")
    private WebElement btnLogin;
    public void clickBtnLogin(){
        btnLogin.click();
    }

    @FindBy(xpath = "//h2[@class='swal2-title']")
    private WebElement vrfySuccessLoginPage;
    public boolean verifySuccessLogin(){
        vrfySuccessLoginPage.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//div[@class='swal2-html-container']")
    private WebElement errorText;
    public String verifyErrorText() {
        return errorText.getText();
    }

    @FindBy(xpath="//button[@class='swal2-confirm swal2-styled swal2-default-outline']")
    private WebElement btnOKLogin;
    public void clickOkLogin(){
        btnOKLogin.click();
    }


}
