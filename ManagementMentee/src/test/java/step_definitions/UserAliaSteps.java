package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.SuperAdmin;
import org.example.pageObject.UserAlia;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import static org.junit.Assert.assertEquals;

public class UserAliaSteps {
    private WebDriver webDriver;


    public UserAliaSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }



    @Given("User open the website management mentee")
    public void userOpenTheWebsiteManagementMentee() throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        Assert.assertTrue(userAlia.vrfyLoginPage());
        Thread.sleep(1000);
    }


    @Then("User already sign in as user at management mente website")
    public void userAlreadySignInAsUserAdminAtManagementMenteWebsite() {
        UserAlia userAlia = new UserAlia(webDriver);
        Assert.assertTrue(userAlia.verifySuccessLogin());
    }

    @Then("User see error \"(.*)\" on login page")
    public void verifyErrorText(String errortext) throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        Thread.sleep(5000);
        assertEquals(errortext,userAlia.verifyErrorText());
        Thread.sleep(5000);
    }

    @When("User Click User Menu")
    public void userClickUserMenu() throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        userAlia.clickUserMenu();
        Thread.sleep(5000);
    }

    @When("User Click Class")
    public void userClickClassMenu() throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        userAlia.clickClassMenu();
        Thread.sleep(5000);
    }

    @And("User Click pencil")
    public void userClickPencilIcon() throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        userAlia.clickPencilIcon();
        Thread.sleep(5000);
    }

    @When("^User input \"([^\"]*)\" as Classname$")
    public void userInputAsUserNameAndInputAsPassword(String className) throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        userAlia.inputClassName(className);
        Thread.sleep(5000);
    }

    @And("User click submit")
    public void userClickSubmit() throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        userAlia.clickSubmit();
        Thread.sleep(10000);
    }

    @When("User Click button action")
    public void userClickButtonAction() throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        userAlia.clickAction();
        Thread.sleep(5000);
    }
    @And("Validate user in List user page")
    public void validationUserPage() throws InterruptedException {
        UserAlia userAlia = new UserAlia(webDriver);
        userAlia.vrfyUserPage();
        Thread.sleep(5000);
    }

}
