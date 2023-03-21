#//MasShidiq
#@AddUser
Feature: Superadmin add a user, update user data, and delete user

@Update @Positive @ByUser
Scenario: Valid Update
  Given User open the website management mentee
  When User input "tomas@gmail.com" as userName and input "12345" as password
  And User Click button Login
  Then User success login
  When User Click User Menu
  When User Click button action
  And Validate user in List user page

  @Update @Positive @ByUser
  Scenario: Edit Class
    Given User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    And User Click button Login
    Then User success login
    When User Click Class
    And User Click pencil
    And User click submit