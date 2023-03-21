package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ClassPage {
    public static WebDriver driver;
    public ClassPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }
    @FindBy(css = ".ml-10")
    private WebElement headerClass;
    public void setHeaderClass(){
        headerClass.isDisplayed();
    }

//    @FindBy(xpath = "//h2[@class='swal2-title']")
//    private WebElement vrfySuccessLoginPage;
//    public boolean verifySuccessLogin(){
//        vrfySuccessLoginPage.isDisplayed();
//        return true;
//    }
    @FindBy(xpath = "//a[.='Class']")
    private WebElement menuClass;
    public void Class(){
        menuClass.click();
    }

}
