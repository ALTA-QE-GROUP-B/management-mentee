##//MbaAlia
#Feature: Attempt to login in Management Mentee
#  @Login @Positive @ByUser
#  Scenario: Valid login
#    Given User open the website management mentee
#    When User input "tomas@gmail.com" as userName and input "12345" as password
#    And User Click button Login
#    Then User success login
#
##  @Login @Negative @ByUser
##  Scenario: Invalid login
##    Given User open the website management mentee
##    When User input "<abc@gmail.com>" as userName and input "123" as password
##    Then Status code should be 404 Not Found
##
##  @Login @Positive @BySuperAdmin
##  Scenario: Valid login by SuperAdmin
##    Given SuperAdmin open the website management mentee
##    When SuperAdmin input "<superadmin@gmail.com>" as userName and input "password" as password
##    Then SuperAdmin success login
##
##  @Login @Negative @BySuperAdmin
##  Scenario: Invalid login by SuperAdmin
##    Given SuperAdmin open the website management mentee
##    When SuperAdmin input "<superadmin@gmail.com>" as userName and input "123" as password
##    Then Status code should be 404 Not Found
##
##  @UpdateData @Positive @BySuperAdmin
##  Scenario: Update data by SuperAdmin
##    Given
#
#
