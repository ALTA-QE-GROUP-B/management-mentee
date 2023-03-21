##//MasViski
#Feature: Validate listed users
#  @ListUsers @Positive
#  Scenario: " Show List User with Valid Data "
#    Given  User open the website management mentee
#    When User input "tomas@gmail.com" as userName and input "12345" as password
#    And User Click button Login
#    When User click menu User
#    And LIST USER
#
#  @ListUsers @Negative
#  Scenario: " Show List User with Invalid Data "
#    iven  User open the website management mentee
#    When User input "tomas@gmail.com" as userName and input "12345" as password
#    And User Click button Login
#    When User click menu User
#    And Validation Header Delete
#
