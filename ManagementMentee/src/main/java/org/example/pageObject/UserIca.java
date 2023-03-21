package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UserIca {
    public static WebDriver driver;

    public UserIca(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath="//li[.='Class']")
    private WebElement clickClassPage;
    public void vrfyClickClassPage(){
        clickClassPage.click();
    }

    @FindBy(xpath = "//button[@class='btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5']")
    private WebElement btnAddClassPage;
    public void clickAddClassPage(){
        btnAddClassPage.click();
    }
    @FindBy(xpath = "//input[@id='name-input']")
    private WebElement name;
    public void setName(String nm){
        name.sendKeys(nm);
    }
    @FindBy(xpath = "//input[@id='dateStart-input']")
    private WebElement dateStart;
    public void setDateStart(String dts){
        dateStart.sendKeys(dts);
    }
    @FindBy(xpath = "//input[@id='dateGraduate-input']")
    private WebElement dateGraduation;
    public void setDateGraduation(String dtg){
        dateGraduation.sendKeys(dtg);
    }
    @FindBy(xpath = "//select[@class='select select-bordered select-sm']")
    private WebElement mentor;
    public void setMentor(String mtr){
        mentor.sendKeys(mtr);
    }
    @FindBy(xpath="//button[@class='btn border-transparent w-fit tracking-wider text-[0.75rem] w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5 text-white hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base']")
    private WebElement btnSubmitClassPage;
    public void clickSubmitClassPage(){
        btnSubmitClassPage.click();
    }
    //
    @FindBy(xpath = "//select[@class='select select-bordered select-sm']")
    private WebElement verifySuccessCreate;
    public boolean vrfySuccessCreate(){
        verifySuccessCreate.isDisplayed();
        return true;
    }
    @FindBy(xpath="//button[@class='swal2-confirm swal2-styled swal2-default-outline']")
    private WebElement btnOKCreateClass;
    public void clickOkCreateClass(){
        btnOKCreateClass.click();
    }
    ////div[@class='swal2-html-container']
    @FindBy(xpath = "//div[@class='swal2-html-container']")
    private WebElement verifyFailedCreate;
    public boolean vrfyFailedCreate(){
        verifyFailedCreate.isDisplayed();
        return true;
    }

    //update
    @FindBy(xpath = "//tr[4]//button[@class='btn btn-sm w-10 text-xs bg-sky-900 border-none hover:bg-orange-500']")
    private WebElement btnUpdateClass;
    public void clickUpdateClassPage(){
        btnUpdateClass.click();
    }
    @FindBy(xpath = "//input[@id='name-input']")
    private WebElement nameUp;
    public void setNameUpdate(String nmu){
        name.sendKeys(nmu);
    }
    @FindBy(xpath = "//input[@id='dateStart-input']")
    private WebElement dateStrUp;
    public void setDateStartUpdate(String dtsu){
        dateStart.sendKeys(dtsu);
    }
    @FindBy(xpath = "//input[@id='dateGraduate-input']")
    private WebElement dateGrdUp;
    public void setDateGraduationUpdate(String dtgu){
        dateGraduation.sendKeys(dtgu);
    }

    //
    @FindBy(xpath="//button[@class='btn btn w-28 text-xs bg-sky-900 border-none hover:bg-orange-500 mt-5']")
    private WebElement btnSubmitUpdateClass;
    public void clickSubmitUpdateClass(){
        btnSubmitUpdateClass.click();
    }

    // Deleting user data
    @FindBy(xpath="//tr[5]//button[@class='btn btn-sm w-10 text-xs bg-red-600 border-none hover:bg-sky-900']")
    private WebElement deletinguserdata;
    public void clickDelete() {
        deletinguserdata.click();
    }

}
