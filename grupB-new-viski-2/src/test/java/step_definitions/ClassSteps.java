package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.example.ClassPage;
import org.example.LoginPage;
import org.openqa.selenium.WebDriver;

public class ClassSteps {
    private WebDriver webDriver;
    public ClassSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @When("^User click menu Class$")
    public void userClickMenuClass() throws InterruptedException {
        ClassPage classPage = new ClassPage(webDriver);
        Thread.sleep(1000);
        classPage.Class();
        Thread.sleep(1000);
    }

    @And("LIST CLASS")
    public void validationHeader() throws InterruptedException {
        ClassPage classPage = new ClassPage(webDriver);
        classPage.setHeaderClass();
        Thread.sleep(3000);
    }


    @And("^LIST DASHBOARD$")
    public void listDASHBOARD() throws InterruptedException {
        ClassPage classPage = new ClassPage(webDriver);
        classPage.setHeaderClass();
        Thread.sleep(3000);
    }
}
