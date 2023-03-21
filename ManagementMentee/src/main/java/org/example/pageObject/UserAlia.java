package org.example.pageObject;

import cucumber.api.java.en.And;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UserAlia {
    public static WebDriver driver;

    public UserAlia(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    // baru
    @FindBy(xpath = "//h1[@class='mt-6 ml-20']")
    private WebElement verifyLoginPage;
    public boolean vrfyLoginPage(){
        verifyLoginPage.isDisplayed();
        return true;
    }


    @FindBy(xpath = "//div[@class='swal2-container swal2-center swal2-backdrop-show']")
    private WebElement verifyySuccessLogin;
    public boolean verifySuccessLogin() {
        verifyySuccessLogin.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//div[@class='swal2-html-container']")
    private WebElement errorText;
    public String verifyErrorText() {
        return errorText.getText();
    }

    @FindBy(xpath = "//span[.='User']")
    private WebElement userMenu;
    public void clickUserMenu() {
        userMenu.click();
    }

    @FindBy(xpath = "//span[.='Class']")
    private WebElement classMenu;
    public void clickClassMenu() {classMenu.click();
    }

    @FindBy(xpath = "//button[@class='btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5']")
    private WebElement clickSubmit;
    public void clickSubmit() {clickSubmit.click();}

    @FindBy(xpath = "//tbody[1]/tr[1]//button[@class='btn btn-sm w-10 text-xs bg-sky-900 border-none hover:bg-orange-500']")
    private WebElement clickPencil;
    public void clickPencilIcon() {clickPencil.click();}

    @FindBy(xpath = "//input[@id='name-input']")
    private WebElement inputClassName;
    public void inputClassName(String text) {
        inputClassName.sendKeys(text);
    }

    @FindBy(xpath = "//input[@id='dateGraduate-input']")
    private WebElement inputDateGrad;
    public void inputDateGrad(String date) {
        inputDateGrad.sendKeys(date);
    }

    @FindBy(xpath = "//input[@id='dateStart-input']")
    private WebElement inputDateStart;
    public void inputDateStart(String date) {
        inputDateStart.sendKeys(date);
    }

    @FindBy(xpath = "//tbody[1]/tr[1]//button[@class='btn btn-sm w-10 text-xs bg-sky-900 border-none hover:bg-orange-500']")
    private WebElement action;
    public void clickAction() {
        action.isEnabled();
    }

    @FindBy(css = ".ml-10")
    private WebElement verifyLoginPage2;
    public boolean vrfyUserPage() {
        verifyLoginPage.isDisplayed();
        return true;
    }





}
