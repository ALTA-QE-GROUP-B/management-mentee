package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class SuperAdmin {
    public static WebDriver driver;

    public SuperAdmin(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }


    @FindBy(xpath = "//input[1]")
    private WebElement userName;
    public void setUserName(String user){
        userName.sendKeys(user);
    }
    public boolean verifyLoginPage(){
        userName.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//input[2]")
    private WebElement password;
    public void setPassword(String psd){
        password.sendKeys(psd);
    }

    @FindBy(css = ".btn")
    private WebElement btnLogin;
    public void clickLogin(){
        btnLogin.click();
    }


    @FindBy(xpath = "//div[@class='swal2-container swal2-center swal2-backdrop-show']")
    private WebElement verifySuccessLogin;
    public boolean isVerifySuccessLoginDisplayed() {
        verifySuccessLogin.isDisplayed();
        return true;
    }


    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled swal2-default-outline']")
    private WebElement btnOk;
    public void setclickOk(){
        btnOk.click();
    }



    // User n Button
    @FindBy(xpath = "//a[.='User']")
    private WebElement btnListUser;
    public void clickListUser(){
        btnListUser.click();
    }

    @FindBy(css = ".navbar-end > div")
    private WebElement btnHitUser;
    public void clickHiUser(){
        btnHitUser.click();
    }

    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled swal2-default-outline']")
    private WebElement btnOkBtn;
    public void setclickBtnOk(){
        btnOkBtn.click();
    }

    @FindBy(xpath = "//a[.='Logout']")
    private WebElement btnLogout;
    public void clickLogoutButton(){
        btnLogout.click();
    }




    // Create List User Input user
    @FindBy(xpath = "//input[@id='name-input']")
    private WebElement name;
    public void setName(String name1){
        name.sendKeys(name1);
    }


    @FindBy(xpath = "//input[@id='email-input']")
    private WebElement email;
    public void setEmail(String email1){
        email.sendKeys(email1);
    }

    @FindBy(xpath = "//input[@id='phone-input']")
    private WebElement number;
    public void setNumber(String number1){
        number.sendKeys(number1);
    }

    @FindBy(xpath = "//form[@class='flex flex-row space-x-20 justify-center mx-auto my-auto p-20']/div[1]/select[@class='select select-bordered select-sm  ']")
    private WebElement status;
    public void setStatus(String sts){
        status.sendKeys(sts);
    }

    @FindBy(xpath = "//form[@class='flex flex-row space-x-20 justify-center mx-auto my-auto p-20']/div[2]/select[@class='select select-bordered select-sm  ']")
    private WebElement team;
    public void setTeam(String tm){
        team.sendKeys(tm);
    }

    @FindBy(xpath = "//input[@id='address-input']")
    private WebElement address;
    public void setAddress(String address1){
        address.sendKeys(address1);
    }

    @FindBy(xpath = "//button[@class='btn btn w-20 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5']")
    private WebElement btnSubmit;
    public void clickSumbit(){
        btnSubmit.click();
    }

    @FindBy(xpath = "//tbody[1]/tr[1]/td[@class='space-x-1 flex']")
    private WebElement poeple;
    public void setPoepleSkill(){
        poeple.click();
    }

}

