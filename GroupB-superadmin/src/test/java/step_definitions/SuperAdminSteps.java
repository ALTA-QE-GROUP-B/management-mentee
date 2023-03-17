package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.SuperAdmin;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class SuperAdminSteps {
    private WebDriver webDriver;


    public SuperAdminSteps(){
        super();
        this.webDriver  = Hooks.webDriver;
    }
    @Given("User open management mentee website")
    public void verifyLogin(){
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        Assert.assertTrue(superAdmin.verifyLoginPage());
    }
    @When("User input \"(.*)\" as userName and input \"(.*)\" as password")
    public void inputCredential(String userName, String password) throws InterruptedException {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        superAdmin.setUserName(userName);
        superAdmin.setPassword(password);
        superAdmin.clickLogin();
        Thread.sleep(5000);
    }

    @Then("User already sign in as super admin at management mente website")
    public void userAlreadySignInAsSuperAdminAtManagementMenteWebsite() {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        Assert.assertTrue(superAdmin.isVerifySuccessLoginDisplayed());
    }


    @And("User click button OK")
    public void userClickButtonOK() throws InterruptedException {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        Assert.assertTrue(superAdmin.isVerifySuccessLoginDisplayed());
        Thread.sleep(3000);
        superAdmin.setclickOk();
        Thread.sleep(3000);
    }




    //Create New list user
    @And("Super admin click the user page")
    public void superAdminClickTheUserPage() throws InterruptedException {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        superAdmin.clickListUser();
        Thread.sleep(3000);
    }

    @And("Super admin click text in page user for create new list user")
    public void superAdminClickTextInPageUserForCreateNewListUser() throws InterruptedException {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        superAdmin.clickHiUser();
        Thread.sleep(3000);
    }


    @And("User input name \"(.*)\" and email \"(.*)\" and phone number \"(.*)\"")
    public void userInputNameAndEmailAndPhoneNumber(String name, String email, String number) throws InterruptedException {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        superAdmin.setName(name);
        Thread.sleep(1000);
        superAdmin.setEmail(email);
        Thread.sleep(1000);
        superAdmin.setNumber(number);
        Thread.sleep(1000);
    }

    @And("User click status \"(.*)\" and set team \"(.*)\" and address \"(.*)\" and click submit")
    public void userClickStatusAndAndAddressAndClickSubmit(String status, String team, String address) throws InterruptedException {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        superAdmin.setStatus(status);
        Thread.sleep(1000);
        superAdmin.setTeam(team);
        Thread.sleep(1000);
        superAdmin.setAddress(address);
        Thread.sleep(1000);
        superAdmin.clickSumbit();
        Thread.sleep(5000);
    }

    @And("Super admin click the Logout button")
    public void superAdminClickTheLogoutButton() throws InterruptedException {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        superAdmin.clickLogoutButton();
        Thread.sleep(5000);
    }

    @And("Super admin click button OK")
    public void superAdminClickButtonOK() throws InterruptedException {
        SuperAdmin superAdmin = new SuperAdmin(webDriver);
        Assert.assertTrue(superAdmin.isVerifySuccessLoginDisplayed());
        Thread.sleep(5000);
        superAdmin.setclickBtnOk();
        Thread.sleep(5000);
    }

}

