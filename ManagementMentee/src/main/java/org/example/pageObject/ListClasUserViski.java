package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ListClasUserViski {

    public static WebDriver driver;

    public ListClasUserViski(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    // class

    @FindBy(xpath = "//div[@class='flex flex-col border-b-2']")
    private WebElement headerClass;
    public void setHeaderClass(){
        headerClass.isDisplayed();
    }


    @FindBy(xpath = "//a[.='Class']")
    private WebElement menuClass;

    public void Class() {
        menuClass.click();
    }


    // user
    @FindBy(xpath = "//span[.='User']")
    private WebElement buttonUser;

    public void btnUser() {
        buttonUser.click();
    }

    @FindBy(xpath = "//div[@class='flex flex-col border-b-2']")
    private WebElement headerListUser;

    public void hdrListUser() {
        headerListUser.isDisplayed();
    }


}
