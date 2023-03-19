package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import static org.junit.Assert.assertEquals;

public class LoginSteps {
    private WebDriver webDriver;
    public LoginSteps(){
        super();
        this.webDriver = Hooks.webDriver;

    }

    @Given("User open the website management mentee")
    public void userOpenTheWebsiteManagementMentee() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        Assert.assertTrue(loginPage.vrfyLoginPage());
        Thread.sleep(2000);
    }

    @Then("User success login")
    public void userSuccessLogin() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        Assert.assertTrue(loginPage.verifySuccessLogin());
        Thread.sleep(5000);
        loginPage.clickOkLogin();
        Thread.sleep(5000);
    }

    @When("^User input \"([^\"]*)\" as userName and input \"([^\"]*)\" as password$")
    public void userInputAsUserNameAndInputAsPassword(String userName, String password) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setUserName(userName);
        loginPage.setPassword(password);
        Thread.sleep(5000);
    }

   @And("User Click button Login")
    public void userClickButtonLogin() throws InterruptedException {
       LoginPage loginPage = new LoginPage(webDriver);
       loginPage.clickBtnLogin();
       Thread.sleep(10000);
    }


    @Then("User see error \"(.*)\" on login page") //identitas final method
    public void verifyErrorText(String errortext) {
        LoginPage loginPage = new LoginPage(webDriver);
        assertEquals(errortext,loginPage.verifyErrorText());
    }

}
