@ManagementMentee
@UserAlia
Feature: Attempt to login in Management Mentee
  @LoginAlia
  Scenario: Valid login
    Given User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    Then User already sign in as user at management mente website
    And User click button OK





  @LoginAlia @Negative @ByUser
  Scenario Outline: Invalid Login
    Given User open the website management mentee
    When User input "<userName>" as userName and input "<password>" as password
    Then User see error "<errorText>" on login page
    Examples:
      | userName        | password | errorText                  |
      | xxx@gmail.com   | 123      | Wrong Username or Password |



#  @Defect
#  Scenario: Valid Update
#    Given User open the website management mentee
#    When User input "tomas@gmail.com" as userName and input "12345" as password
#    Then User already sign in as user at management mente website
#    And User click button OK
#    When User Click User Menu
#    When User Click button action
#    And Validate user in List user page

  @Update @Positive @ByUser
  Scenario: Edit Class
    Given User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    Then User already sign in as user at management mente website
    And User click button OK
    When User Click Class
    And User Click pencil
    When User input "Test nama class" as Classname
    And User click submit