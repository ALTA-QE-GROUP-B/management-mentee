#//MbaAisyah & viski
  Feature: User could create class, edit class, delete class, and see listed class
    @ListClass @Positive
    Scenario: " Show List CLASS with Valid Data "
      Given User open the website management mentee
      When User input "arshidiq500@gmail.com" as userName and input "password" as password
      And User Click button Login
      And User Click OK in pop up success login
      When User click menu Class
      And LIST CLASS


    @ListClass @Negative
   Scenario: " Show List CLASS with Valid Data "
      Given User open the website management mentee
      When User input "arshidiq500@gmail.com" as userName and input "password" as password
      And User Click button Login
      And User Click OK in pop up success login
      When User click menu Class
      And LIST CLASS
      And LIST DASHBOARD