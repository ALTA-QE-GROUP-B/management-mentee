@ManagementMentee
@ListVisky
Feature: User could create class, edit class, delete class, and see listed class
  @ListClass @Positive
  Scenario: " Show List CLASS with Valid Data "
    Given User open the website management mentee
    When User input "arshidiq500@gmail.com" as userName and input "password" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User click menu Class
    And LIST CLASS

  @ListClass @Negative
  Scenario: " Show List CLASS with Valid Data "
    Given User open the website management mentee
    When User input "arshidiq500@gmail.com" as userName and input "password" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User click menu Class
    And validation invalid layout Mentee Active 320 in page class

#  Validate listed users
  @ListUsers @Positive
  Scenario: " Show List User with Valid Data "
    Given  User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User click menu User
    And LIST USER

  @ListUsers @Negative
  Scenario: " Show List CLASS with Valid Data "
    Given User open the website management mentee
    When User input "arshidiq500@gmail.com" as userName and input "password" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User click menu User
    And Validation Header Delete