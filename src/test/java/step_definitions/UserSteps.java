package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.example.LoginPage;
import org.example.UserPage;
import org.openqa.selenium.WebDriver;

public class UserSteps {
    private WebDriver webDriver;
    public UserSteps(){
        super();
        this.webDriver = Hooks.webDriver;

    }

    @When("User Click OK in pop up success login")
    public void userClickButtonOk() throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.clickOk();
        Thread.sleep(2000);
    }

    @When("User Click User Menu")
    public void userClickUserMenu() throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.clickUserMenu();
        Thread.sleep(5000);
    }

    @When("User Click Class")
    public void userClickClassMenu() throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.clickClassMenu();
        Thread.sleep(5000);
    }

    @And("User Click pencil")
    public void userClickPencilIcon() throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.clickPencilIcon();
        Thread.sleep(5000);
    }

    @When("^User input \"([^\"]*)\" as Classname$")
    public void userInputAsUserNameAndInputAsPassword(String className) throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.inputClassName(className);
//        userPage.inputDateGrad(DateGrad);
//        userPage.inputDateStart(DateStart);
        Thread.sleep(5000);
    }

    @And("User click submit")
    public void userClickSubmit() throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.clickSubmit();
        Thread.sleep(10000);
    }

    @When("User Click button action")
    public void userClickButtonAction() throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.clickAction();
        Thread.sleep(5000);
    }
    @And("Validate user in List user page")
    public void validationUserPage() throws InterruptedException {
        UserPage userPage = new UserPage(webDriver);
        userPage.vrfyUserPage();
        Thread.sleep(5000);
    }
}
