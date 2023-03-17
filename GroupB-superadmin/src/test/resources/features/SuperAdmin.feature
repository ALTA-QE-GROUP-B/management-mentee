@Login
Feature: Super Admin
  As a super admin i want to create user as placement in website management mentee

  Scenario: Create Placement
    Given User open management mentee website
    When User input "arshidiq500@gmail.com" as userName and input "password" as password
    Then User already sign in as super admin at management mente website
    And User click button OK
    And Super admin click the user page
    And Super admin click text in page user for create new list user
    And User input name "shidiq5" and email "arshidiq500@gmail.com" and phone number "0895355524717"
    And User click status "Active" and set team "Placement" and address "JL. Maguwo sleman" and click submit
    And Super admin click button OK
    And Super admin click the Logout button



  Scenario: Create Placement
    Given User open management mentee website
    When User input "arshidiq500@gmail.com" as userName and input "password" as password
    Then User already sign in as super admin at management mente website
    And User click button OK
    And Super admin click the user page
    And Super admin click text in page user for create new list user
    And User input name "shidiq6" and email "arshidiq500@gmail.com" and phone number "0895355524717"
    And User click status "nonActive" and set team "Mentor" and address "JL. Maguwo sleman" and click submit
    And Super admin click button OK
    And Super admin click the Logout button
