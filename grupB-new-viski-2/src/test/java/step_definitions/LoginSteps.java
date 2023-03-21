package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

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

    @When("^User input \"([^\"]*)\" as userName and input \"([^\"]*)\" as password$")
    public void userInputAsUserNameAndInputAsPassword(String userName, String password) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setUserName(userName);
        loginPage.setPassword(password);
        Thread.sleep(1000);
    }

    @And("User Click button Login")
    public void userClickButtonLogin() throws InterruptedException {
        LoginPage loginPage =new LoginPage(webDriver);
        loginPage.clickLogin();
        Thread.sleep(5000);
    }

    @And("^User Click OK in pop up success login$")
    public void userClickOKInPopUpSuccessLogin() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.clickOKLogin();
        Thread.sleep(5000);
    }
}
