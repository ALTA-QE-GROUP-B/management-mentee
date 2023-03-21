package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.example.pageObject.ListClasUserViski;
import org.openqa.selenium.WebDriver;

public class ListClassAndUserSteps {
    private WebDriver webDriver;


    public ListClassAndUserSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    // class
    @When("^User click menu Class$")
    public void userClickMenuClass() throws InterruptedException {
        ListClasUserViski ListclasUserViski = new ListClasUserViski(webDriver);
        Thread.sleep(1000);
        ListclasUserViski.Class();
        Thread.sleep(1000);
    }

    @And("LIST CLASS")
    public void validationHeader() throws InterruptedException {
        ListClasUserViski ListclasUserViski = new ListClasUserViski(webDriver);
        ListclasUserViski.setHeaderClass();
        Thread.sleep(3000);
    }


    @And("^^validation invalid layout Mentee Active 320 in page class$")
    public void listDASHBOARD() throws InterruptedException {
        ListClasUserViski ListclasUserViski = new ListClasUserViski(webDriver);
        ListclasUserViski.setHeaderClass();
        Thread.sleep(3000);
    }

    // user
    @When("^User click menu User$")
    public void userClickMenuUser() throws InterruptedException {
        ListClasUserViski ListclasUserViski = new ListClasUserViski(webDriver);
        ListclasUserViski.btnUser();
        Thread.sleep(3000);
    }

    @And("^LIST USER$")
    public void listUSER() throws InterruptedException {
        ListClasUserViski ListclasUserViski = new ListClasUserViski(webDriver);
        ListclasUserViski.hdrListUser();
        Thread.sleep(2000);
    }

    @And("^Validation Header Delete$")
    public void validationHeaderDelete() throws InterruptedException {
        ListClasUserViski ListclasUserViski = new ListClasUserViski(webDriver);
        ListclasUserViski.hdrListUser();
        Thread.sleep(2000);
    }


}
