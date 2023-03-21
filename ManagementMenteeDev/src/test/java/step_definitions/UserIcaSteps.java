package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.SuperAdmin;
import org.example.pageObject.UserIca;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class UserIcaSteps {
    private WebDriver webDriver;


    public UserIcaSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("User add new class")
    public void userAddNewClass() throws InterruptedException {
        UserIca userIca = new UserIca(webDriver);
        userIca.clickAddClassPage();
        Thread.sleep(2000);
    }

    @And("^Input name \"([^\"]*)\" date start \"([^\"]*)\" date graduate \"([^\"]*)\"$")
    public void inputNameDateStartDateGraduateAndMentor(String name, String dateStart, String dateGraduate) throws InterruptedException {
        UserIca userIca = new UserIca(webDriver);
        userIca.setName(name);
        userIca.setDateStart(dateStart);
        userIca.setDateGraduation(dateGraduate);
        Thread.sleep(2000);
    }
    @And("^mentor \"([^\"]*)\"$")
    public void mentor(String mentor) throws Throwable {
        UserIca userIca = new UserIca(webDriver);
        Select a = new Select(webDriver.findElement(By.xpath("//select[@class='select select-bordered select-sm']")));
        a.selectByVisibleText(mentor);
        userIca.clickSubmitClassPage();
        Thread.sleep(5000);
    }

    @Then("^Should appear \"([^\"]*)\"$")
    public void shouldAppearAddNewClassSuccess(String sukses) throws InterruptedException {
        WebElement a = webDriver.findElement(By.xpath("//div[text()='"+sukses+"']"));
        a.isDisplayed();
        Assert.assertTrue(true);
        Thread.sleep(3000);
    }

    @And("^Click Oke$")
    public void clickOke() throws InterruptedException {
        WebElement a = webDriver.findElement(By.id("swal2-html-container"));
        a.click();
        Thread.sleep(2000);
    }


    @Then("^User update class$")
    public void userUpdateClass() throws InterruptedException {
        UserIca userIca = new UserIca(webDriver);
        userIca.clickUpdateClassPage();
        Thread.sleep(2000);
    }

    @Then("^User delete class$")
    public void userDeleteClass() throws InterruptedException {
        WebElement a = webDriver.findElement(By.xpath("//tr[19]//button[@class='btn btn-sm w-10 text-xs bg-red-600 border-none hover:bg-sky-900']"));
        a.click();
        Thread.sleep(2000);
    }

    @And("^Update by input name \"([^\"]*)\" start date \"([^\"]*)\" and graduation date \"([^\"]*)\"$")
    public void updateByInputNameStartDateAndGraduationDate(String nameUp, String dateStrUp, String dateGrdUp) throws InterruptedException {
        UserIca userIca = new UserIca(webDriver);
        userIca.setNameUpdate(nameUp);
        Thread.sleep(2000);
        userIca.setDateStartUpdate(dateStrUp);
        Thread.sleep(2000);
        userIca.setDateGraduationUpdate(dateGrdUp);
        Thread.sleep(3000);
    }
    @And("^Update mentor \"([^\"]*)\"$")
    public void mentorUpdate(String mentoru) throws InterruptedException {
        UserIca userIca = new UserIca(webDriver);
        Select a = new Select(webDriver.findElement(By.xpath("//select[@class='select select-bordered select-sm']")));
        a.selectByVisibleText(mentoru);
        userIca.clickSubmitUpdateClass();
        Thread.sleep(5000);
    }


    @Then("User Deleting data containing the name aa")
    public void userDeletingDataContainingTheNameAa() throws InterruptedException {
        UserIca userIca = new UserIca(webDriver);
        userIca.clickDelete();
        Thread.sleep(5000);
    }
}
