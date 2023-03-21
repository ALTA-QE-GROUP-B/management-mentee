#//MbaAlia
Feature: Attempt to login in Management Mentee
  @Login @Positive @ByUser
  Scenario: Valid login
    Given User open the website management mentee
    When User input "tomas@gmail.com" as userName and input "12345" as password
    And User Click button Login
    Then User success login

  @Login @Negative @ByUser
  Scenario Outline: Invalid Login
    Given User open the website management mentee
    When User input "<userName>" as userName and input "<password>" as password
    And User Click button Login
    Then User see error "<errorText>" on login page
    Examples:
      | userName        | password | errorText                  |
      | xxx@gmail.com   | 123      | Wrong Username or Password |
      | tomas@gmail.com | 123      | Wrong Username or Password |
      | axxx@gmail.com  | 12345    | Wrong Username or Password |





