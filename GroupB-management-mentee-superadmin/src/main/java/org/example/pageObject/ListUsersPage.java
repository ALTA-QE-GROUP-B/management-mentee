package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ListUsersPage {
    public static WebDriver driver;
    public ListUsersPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//span[.='User']")
    private WebElement buttonUser;
    public void btnUser(){
        buttonUser.click();
    }

    @FindBy(xpath = "//p[@class='ml-10 my-5 font-bold text-sky-900 text-4xl']")
    private WebElement headerListUser;
    public void hdrListUser(){
        headerListUser.isDisplayed();
    }
}
