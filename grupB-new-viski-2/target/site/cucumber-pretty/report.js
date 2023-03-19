$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Class.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#//MbaAisyah \u0026 viski"
    }
  ],
  "line": 2,
  "name": "User could create class, edit class, delete class, and see listed class",
  "description": "",
  "id": "user-could-create-class,-edit-class,-delete-class,-and-see-listed-class",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7326474542,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "\" Show List CLASS with Valid Data \"",
  "description": "",
  "id": "user-could-create-class,-edit-class,-delete-class,-and-see-listed-class;\"-show-list-class-with-valid-data-\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ListClass"
    },
    {
      "line": 3,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Click button Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click OK in pop up success login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click menu Class",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "LIST CLASS",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 2247674500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arshidiq500@gmail.com",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 58
    }
  ],
  "location": "LoginSteps.userInputAsUserNameAndInputAsPassword(String,String)"
});
formatter.result({
  "duration": 1648689875,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickButtonLogin()"
});
formatter.result({
  "duration": 5554824750,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOKInPopUpSuccessLogin()"
});
formatter.result({
  "duration": 5070921000,
  "status": "passed"
});
formatter.match({
  "location": "ClassSteps.userClickMenuClass()"
});
formatter.result({
  "duration": 2933744791,
  "status": "passed"
});
formatter.match({
  "location": "ClassSteps.validationHeader()"
});
formatter.result({
  "duration": 3042768833,
  "status": "passed"
});
formatter.after({
  "duration": 110406000,
  "status": "passed"
});
});