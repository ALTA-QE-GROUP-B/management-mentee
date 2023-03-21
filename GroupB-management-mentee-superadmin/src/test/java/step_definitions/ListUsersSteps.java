package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.example.ClassPage;
import org.example.ListUsersPage;
import org.openqa.selenium.WebDriver;

public class ListUsersSteps {
    private WebDriver webDriver;
    public ListUsersSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @When("^User click menu User$")
    public void userClickMenuUser() throws InterruptedException {
        ListUsersPage listUsersPage = new ListUsersPage(webDriver);
        listUsersPage.btnUser();
        Thread.sleep(3000);
    }

    @And("^LIST USER$")
    public void listUSER() throws InterruptedException {
        ListUsersPage listUsersPage = new ListUsersPage(webDriver);
        listUsersPage.hdrListUser();
        Thread.sleep(2000);
    }

    @And("^Validation Header Delete$")
    public void validationHeaderDelete() throws InterruptedException {
        ListUsersPage listUsersPage = new ListUsersPage(webDriver);
        listUsersPage.hdrListUser();
        Thread.sleep(2000);
    }
}
