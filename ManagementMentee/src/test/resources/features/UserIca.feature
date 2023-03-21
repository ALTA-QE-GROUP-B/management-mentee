@ManagementMentee
@UserIca
Feature: User could create class edit class and delete class
  @CreateNewClass
  Scenario: Valid login
    Given User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User Click Class
    Then User add new class
    And Input name "Data Base 1" date start "16/03/2023" date graduate "18/03/2023"
    And mentor "tomasss"
    Then Should appear "Add New Class Success!"
    And Click Oke

  @Defect
  Scenario: User create class with unfilled data
    Given User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User Click Class
    Then User add new class
    And Input name "" date start "" date graduate ""
    And mentor ""
    Then Should appear "Failed add new Class"
    And Click Oke

  Scenario: User update with valid data
    Given User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User Click Class
    Then User update class
    And Update by input name "DataB" start date "16/03/2023" and graduation date "18/03/2023"
    And Update mentor "tomasss"


  Scenario: User deleteing valid data
    Given User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User Click Class
    Then User Deleting data containing the name aa