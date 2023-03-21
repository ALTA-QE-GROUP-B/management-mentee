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

    @FindBy(xpath = "//button[@class='btn border-transparent w-fit tracking-wider text-[0.75rem] bg-orange-500 w-full mt-5 text-white hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base']")
    private WebElement btnLogin;
    public void clickLogin(){
        btnLogin.click();
    }

    @FindBy(xpath = "//h2[@class='swal2-title']")
    private WebElement vrfySuccessLoginPage;
    public boolean verifySuccessLogin(){
        vrfySuccessLoginPage.isDisplayed();
        return true;
    }
    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled swal2-default-outline']")
    private WebElement btnOKLogin;
    public void clickOKLogin(){
        btnOKLogin.click();
    }
}
