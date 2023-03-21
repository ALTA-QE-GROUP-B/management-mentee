$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ListClassAndUserViski.feature");
formatter.feature({
  "line": 3,
  "name": "User could create class, edit class, delete class, and see listed class",
  "description": "",
  "id": "user-could-create-class,-edit-class,-delete-class,-and-see-listed-class",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ManagementMentee"
    },
    {
      "line": 2,
      "name": "@ListVisky"
    }
  ]
});
formatter.before({
  "duration": 7093844347,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "\" Show List CLASS with Valid Data \"",
  "description": "",
  "id": "user-could-create-class,-edit-class,-delete-class,-and-see-listed-class;\"-show-list-class-with-valid-data-\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@ListClass"
    },
    {
      "line": 4,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click menu Class",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "LIST CLASS",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1329318476,
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
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5509395211,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 54634487,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6128737915,
  "status": "passed"
});
formatter.match({
  "location": "ListClassAndUserSteps.userClickMenuClass()"
});
formatter.result({
  "duration": 2211152348,
  "status": "passed"
});
formatter.match({
  "location": "ListClassAndUserSteps.validationHeader()"
});
formatter.result({
  "duration": 3049137910,
  "status": "passed"
});
formatter.after({
  "duration": 1215007934,
  "status": "passed"
});
formatter.before({
  "duration": 4495552278,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "\" Show List CLASS with Valid Data \"",
  "description": "",
  "id": "user-could-create-class,-edit-class,-delete-class,-and-see-listed-class;\"-show-list-class-with-valid-data-\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@ListClass"
    },
    {
      "line": 13,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click menu Class",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "validation invalid layout Mentee Active 320 in page class",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1067529204,
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
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5523193671,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 59291181,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6123888497,
  "status": "passed"
});
formatter.match({
  "location": "ListClassAndUserSteps.userClickMenuClass()"
});
formatter.result({
  "duration": 2170138994,
  "status": "passed"
});
formatter.match({
  "location": "ListClassAndUserSteps.listDASHBOARD()"
});
formatter.result({
  "duration": 3048573427,
  "status": "passed"
});
formatter.after({
  "duration": 1118080600,
  "status": "passed"
});
formatter.before({
  "duration": 4434598439,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#  Validate listed users"
    }
  ],
  "line": 24,
  "name": "\" Show List User with Valid Data \"",
  "description": "",
  "id": "user-could-create-class,-edit-class,-delete-class,-and-see-listed-class;\"-show-list-user-with-valid-data-\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@ListUsers"
    },
    {
      "line": 23,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User input \"tomas@gmail.com\" as userName and input \"12345\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click menu User",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "LIST USER",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1069960469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomas@gmail.com",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 52
    }
  ],
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5448167114,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 52494585,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6120487918,
  "status": "passed"
});
formatter.match({
  "location": "ListClassAndUserSteps.userClickMenuUser()"
});
formatter.result({
  "duration": 3164815184,
  "status": "passed"
});
formatter.match({
  "location": "ListClassAndUserSteps.listUSER()"
});
formatter.result({
  "duration": 2054008424,
  "status": "passed"
});
formatter.after({
  "duration": 1105924842,
  "status": "passed"
});
formatter.before({
  "duration": 4458011346,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "\" Show List CLASS with Valid Data \"",
  "description": "",
  "id": "user-could-create-class,-edit-class,-delete-class,-and-see-listed-class;\"-show-list-class-with-valid-data-\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@ListUsers"
    },
    {
      "line": 32,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click menu User",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Validation Header Delete",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1070256965,
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
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5541466936,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 51251012,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6117709980,
  "status": "passed"
});
formatter.match({
  "location": "ListClassAndUserSteps.userClickMenuUser()"
});
formatter.result({
  "duration": 3155885528,
  "status": "passed"
});
formatter.match({
  "location": "ListClassAndUserSteps.validationHeaderDelete()"
});
formatter.result({
  "duration": 2048338511,
  "status": "passed"
});
formatter.after({
  "duration": 1111944277,
  "status": "passed"
});
formatter.uri("features/SuperAdminShidiq.feature");
formatter.feature({
  "line": 3,
  "name": "Super Admin",
  "description": "As a super admin i want to create user as placement in website management mentee",
  "id": "super-admin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ManagementMentee"
    },
    {
      "line": 2,
      "name": "@LoginSuperAdminShidiq"
    }
  ]
});
formatter.before({
  "duration": 4460069711,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create Placement",
  "description": "",
  "id": "super-admin;create-placement",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User open management mentee website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User already sign in as super admin at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Super admin click the user page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Super admin click text in page user for create new list user",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User input name \"shidiq5\" and email \"arshidiq500@gmail.com\" and phone number \"0895355524717\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click status \"Active\" and set team \"Placement\" and address \"JL. Maguwo sleman\" and click submit",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Super admin click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Super admin click the Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminSteps.verifyLogin()"
});
formatter.result({
  "duration": 68040659,
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
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5498026877,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userAlreadySignInAsSuperAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 59539212,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6122396895,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheUserPage()"
});
formatter.result({
  "duration": 3166690519,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTextInPageUserForCreateNewListUser()"
});
formatter.result({
  "duration": 3140540159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shidiq5",
      "offset": 17
    },
    {
      "val": "arshidiq500@gmail.com",
      "offset": 37
    },
    {
      "val": "0895355524717",
      "offset": 78
    }
  ],
  "location": "SuperAdminSteps.userInputNameAndEmailAndPhoneNumber(String,String,String)"
});
formatter.result({
  "duration": 3570831426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active",
      "offset": 19
    },
    {
      "val": "Placement",
      "offset": 41
    },
    {
      "val": "JL. Maguwo sleman",
      "offset": 65
    }
  ],
  "location": "SuperAdminSteps.userClickStatusAndAndAddressAndClickSubmit(String,String,String)"
});
formatter.result({
  "duration": 8494345768,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickButtonOK()"
});
formatter.result({
  "duration": 10137422961,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheLogoutButton()"
});
formatter.result({
  "duration": 5093349428,
  "status": "passed"
});
formatter.after({
  "duration": 1116851283,
  "status": "passed"
});
formatter.before({
  "duration": 4231809554,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create Mentor",
  "description": "",
  "id": "super-admin;create-mentor",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User open management mentee website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User already sign in as super admin at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Super admin click the user page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Super admin click text in page user for create new list user",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User input name \"shidiq6\" and email \"arshidiq500@gmail.com\" and phone number \"0895355524717\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click status \"nonActive\" and set team \"Mentor\" and address \"JL. Maguwo sleman\" and click submit",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Super admin click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Super admin click the Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminSteps.verifyLogin()"
});
formatter.result({
  "duration": 67973947,
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
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5548777839,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userAlreadySignInAsSuperAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 61659727,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6136577378,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheUserPage()"
});
formatter.result({
  "duration": 3160132830,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTextInPageUserForCreateNewListUser()"
});
formatter.result({
  "duration": 3139670628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shidiq6",
      "offset": 17
    },
    {
      "val": "arshidiq500@gmail.com",
      "offset": 37
    },
    {
      "val": "0895355524717",
      "offset": 78
    }
  ],
  "location": "SuperAdminSteps.userInputNameAndEmailAndPhoneNumber(String,String,String)"
});
formatter.result({
  "duration": 3556090452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nonActive",
      "offset": 19
    },
    {
      "val": "Mentor",
      "offset": 44
    },
    {
      "val": "JL. Maguwo sleman",
      "offset": 65
    }
  ],
  "location": "SuperAdminSteps.userClickStatusAndAndAddressAndClickSubmit(String,String,String)"
});
formatter.result({
  "duration": 8516478040,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickButtonOK()"
});
formatter.result({
  "duration": 10133449917,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheLogoutButton()"
});
formatter.result({
  "duration": 5091358344,
  "status": "passed"
});
formatter.after({
  "duration": 1127023370,
  "status": "passed"
});
formatter.before({
  "duration": 4448335318,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Create Poeple Skill",
  "description": "",
  "id": "super-admin;create-poeple-skill",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Defect"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User open management mentee website",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User already sign in as super admin at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Super admin click the user page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Super admin click text in page user for create new list user",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User input name \"shidiq6\" and email \"arshidiq500@gmail.com\" and phone number \"0895355524717\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User click status \"nonActive\" and set team \"Poeple Skill\" and address \"JL. Maguwo sleman\" and click submit",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Super admin click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Super admin click the Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminSteps.verifyLogin()"
});
formatter.result({
  "duration": 89250943,
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
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5635972697,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userAlreadySignInAsSuperAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 74495715,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6121368853,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheUserPage()"
});
formatter.result({
  "duration": 3183927189,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTextInPageUserForCreateNewListUser()"
});
formatter.result({
  "duration": 3138213807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shidiq6",
      "offset": 17
    },
    {
      "val": "arshidiq500@gmail.com",
      "offset": 37
    },
    {
      "val": "0895355524717",
      "offset": 78
    }
  ],
  "location": "SuperAdminSteps.userInputNameAndEmailAndPhoneNumber(String,String,String)"
});
formatter.result({
  "duration": 3658741865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nonActive",
      "offset": 19
    },
    {
      "val": "Poeple Skill",
      "offset": 44
    },
    {
      "val": "JL. Maguwo sleman",
      "offset": 71
    }
  ],
  "location": "SuperAdminSteps.userClickStatusAndAndAddressAndClickSubmit(String,String,String)"
});
formatter.result({
  "duration": 8509514379,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickButtonOK()"
});
formatter.result({
  "duration": 10134726559,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheLogoutButton()"
});
formatter.result({
  "duration": 5089548579,
  "status": "passed"
});
formatter.after({
  "duration": 1109897315,
  "status": "passed"
});
formatter.before({
  "duration": 4359081524,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Update data",
  "description": "",
  "id": "super-admin;update-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@Defect"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "User open management mentee website",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User already sign in as super admin at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Super admin click the user page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Super admin to update data by clicking on the action button with a pencil icon for update data",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Super admin click the Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminSteps.verifyLogin()"
});
formatter.result({
  "duration": 65734264,
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
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5571919337,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userAlreadySignInAsSuperAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 60560412,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6124327538,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheUserPage()"
});
formatter.result({
  "duration": 3176836378,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminToUpdateDataByClickingOnTheActionButtonWithAPencilIcon()"
});
formatter.result({
  "duration": 2074488302,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheLogoutButton()"
});
formatter.result({
  "duration": 5108488390,
  "status": "passed"
});
formatter.after({
  "duration": 1115112221,
  "status": "passed"
});
formatter.before({
  "duration": 4471238480,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Delete data",
  "description": "",
  "id": "super-admin;delete-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@Defect"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "User open management mentee website",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User input \"arshidiq500@gmail.com\" as userName and input \"password\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "User already sign in as super admin at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Super admin click the user page",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Super admin to deleting data by clicking on the action button with a pencil icon for delete data",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Super admin click the Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "SuperAdminSteps.verifyLogin()"
});
formatter.result({
  "duration": 69015674,
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
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5475470958,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userAlreadySignInAsSuperAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 56783511,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6118231128,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheUserPage()"
});
formatter.result({
  "duration": 3170188030,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminToDeleteDataByClickingOnTheActionButtonWithAPencilIcon()"
});
formatter.result({
  "duration": 2077361461,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.superAdminClickTheLogoutButton()"
});
formatter.result({
  "duration": 5099449829,
  "status": "passed"
});
formatter.after({
  "duration": 1110945314,
  "status": "passed"
});
formatter.uri("features/UserAlia.feature");
formatter.feature({
  "line": 3,
  "name": "Attempt to login in Management Mentee",
  "description": "",
  "id": "attempt-to-login-in-management-mentee",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ManagementMentee"
    },
    {
      "line": 2,
      "name": "@UserAlia"
    }
  ]
});
formatter.before({
  "duration": 4424477098,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Valid login",
  "description": "",
  "id": "attempt-to-login-in-management-mentee;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@LoginAlia"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"tomas@gmail.com\" as userName and input \"12345\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1074349177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomas@gmail.com",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 52
    }
  ],
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5427028673,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 50316481,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6113750051,
  "status": "passed"
});
formatter.after({
  "duration": 1122909490,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Invalid Login",
  "description": "",
  "id": "attempt-to-login-in-management-mentee;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@LoginAlia"
    },
    {
      "line": 15,
      "name": "@Negative"
    },
    {
      "line": 15,
      "name": "@ByUser"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User input \"\u003cuserName\u003e\" as userName and input \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User see error \"\u003cerrorText\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "attempt-to-login-in-management-mentee;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorText"
      ],
      "line": 21,
      "id": "attempt-to-login-in-management-mentee;invalid-login;;1"
    },
    {
      "cells": [
        "xxx@gmail.com",
        "123",
        "Wrong Username or Password"
      ],
      "line": 22,
      "id": "attempt-to-login-in-management-mentee;invalid-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4381814201,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid Login",
  "description": "",
  "id": "attempt-to-login-in-management-mentee;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ManagementMentee"
    },
    {
      "line": 15,
      "name": "@ByUser"
    },
    {
      "line": 2,
      "name": "@UserAlia"
    },
    {
      "line": 15,
      "name": "@LoginAlia"
    },
    {
      "line": 15,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User input \"xxx@gmail.com\" as userName and input \"123\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User see error \"Wrong Username or Password\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1076912155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxx@gmail.com",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 50
    }
  ],
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5413849434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong Username or Password",
      "offset": 16
    }
  ],
  "location": "UserAliaSteps.verifyErrorText(String)"
});
formatter.result({
  "duration": 10045186532,
  "status": "passed"
});
formatter.after({
  "duration": 1111947128,
  "status": "passed"
});
formatter.before({
  "duration": 4505012205,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#  @Defect"
    },
    {
      "line": 27,
      "value": "#  Scenario: Valid Update"
    },
    {
      "line": 28,
      "value": "#    Given User open the website management mentee"
    },
    {
      "line": 29,
      "value": "#    When User input \"tomas@gmail.com\" as userName and input \"12345\" as password"
    },
    {
      "line": 30,
      "value": "#    Then User already sign in as user at management mente website"
    },
    {
      "line": 31,
      "value": "#    And User click button OK"
    },
    {
      "line": 32,
      "value": "#    When User Click User Menu"
    },
    {
      "line": 33,
      "value": "#    When User Click button action"
    },
    {
      "line": 34,
      "value": "#    And Validate user in List user page"
    }
  ],
  "line": 37,
  "name": "Edit Class",
  "description": "",
  "id": "attempt-to-login-in-management-mentee;edit-class",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Update"
    },
    {
      "line": 36,
      "name": "@Positive"
    },
    {
      "line": 36,
      "name": "@ByUser"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User input \"tomas@gmail.com\" as userName and input \"12345\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Click Class",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User Click pencil",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User input \"Test nama class\" as Classname",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User click submit",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1067863331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomas@gmail.com",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 52
    }
  ],
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5438172924,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 50854735,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6114272339,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userClickClassMenu()"
});
formatter.result({
  "duration": 5174331559,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userClickPencilIcon()"
});
formatter.result({
  "duration": 5137394452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test nama class",
      "offset": 12
    }
  ],
  "location": "UserAliaSteps.userInputAsUserNameAndInputAsPassword(String)"
});
formatter.result({
  "duration": 5171302740,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userClickSubmit()"
});
formatter.result({
  "duration": 10083522872,
  "status": "passed"
});
formatter.after({
  "duration": 1123089669,
  "status": "passed"
});
formatter.uri("features/UserIca.feature");
formatter.feature({
  "line": 3,
  "name": "User could create class edit class and delete class",
  "description": "",
  "id": "user-could-create-class-edit-class-and-delete-class",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ManagementMentee"
    },
    {
      "line": 2,
      "name": "@UserIca"
    }
  ]
});
formatter.before({
  "duration": 4736954612,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Valid login",
  "description": "",
  "id": "user-could-create-class-edit-class-and-delete-class;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@CreateNewClass"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"tomas@gmail.com\" as userName and input \"12345\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Click Class",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User add new class",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Input name \"Data Base 1\" date start \"16/03/2023\" date graduate \"18/03/2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "mentor \"tomasss\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Should appear \"Add New Class Success!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click Oke",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1069693622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomas@gmail.com",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 52
    }
  ],
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5426606737,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 61140859,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6120815204,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userClickClassMenu()"
});
formatter.result({
  "duration": 5176413301,
  "status": "passed"
});
formatter.match({
  "location": "UserIcaSteps.userAddNewClass()"
});
formatter.result({
  "duration": 2248996619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data Base 1",
      "offset": 12
    },
    {
      "val": "16/03/2023",
      "offset": 37
    },
    {
      "val": "18/03/2023",
      "offset": 64
    }
  ],
  "location": "UserIcaSteps.inputNameDateStartDateGraduateAndMentor(String,String,String)"
});
formatter.result({
  "duration": 2460371339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomasss",
      "offset": 8
    }
  ],
  "location": "UserIcaSteps.mentor(String)"
});
formatter.result({
  "duration": 5260333021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add New Class Success!",
      "offset": 15
    }
  ],
  "location": "UserIcaSteps.shouldAppearAddNewClassSuccess(String)"
});
formatter.result({
  "duration": 3044900871,
  "status": "passed"
});
formatter.match({
  "location": "UserIcaSteps.clickOke()"
});
formatter.result({
  "duration": 2075289982,
  "status": "passed"
});
formatter.after({
  "duration": 1105070706,
  "status": "passed"
});
formatter.before({
  "duration": 6111334180,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User create class with unfilled data",
  "description": "",
  "id": "user-could-create-class-edit-class-and-delete-class;user-create-class-with-unfilled-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Defect"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User input \"tomas@gmail.com\" as userName and input \"12345\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Click Class",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User add new class",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Input name \"\" date start \"\" date graduate \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "mentor \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Should appear \"Failed add new Class\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click Oke",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1075687970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomas@gmail.com",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 52
    }
  ],
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5434601290,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 59128108,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6122598741,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userClickClassMenu()"
});
formatter.result({
  "duration": 5166799424,
  "status": "passed"
});
formatter.match({
  "location": "UserIcaSteps.userAddNewClass()"
});
formatter.result({
  "duration": 2233096460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "",
      "offset": 26
    },
    {
      "val": "",
      "offset": 43
    }
  ],
  "location": "UserIcaSteps.inputNameDateStartDateGraduateAndMentor(String,String,String)"
});
formatter.result({
  "duration": 2291378984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "UserIcaSteps.mentor(String)"
});
formatter.result({
  "duration": 5225374454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failed add new Class",
      "offset": 15
    }
  ],
  "location": "UserIcaSteps.shouldAppearAddNewClassSuccess(String)"
});
formatter.result({
  "duration": 3044701876,
  "status": "passed"
});
formatter.match({
  "location": "UserIcaSteps.clickOke()"
});
formatter.result({
  "duration": 2072034799,
  "status": "passed"
});
formatter.after({
  "duration": 1104481705,
  "status": "passed"
});
formatter.before({
  "duration": 4292825542,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User update with valid data",
  "description": "",
  "id": "user-could-create-class-edit-class-and-delete-class;user-update-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User input \"tomas@gmail.com\" as userName and input \"12345\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Click Class",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User update class",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Update by input name \"DataB\" start date \"16/03/2023\" and graduation date \"18/03/2023\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Update mentor \"tomasss\"",
  "keyword": "And "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1068560667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomas@gmail.com",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 52
    }
  ],
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5428259130,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 56183106,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6113863517,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userClickClassMenu()"
});
formatter.result({
  "duration": 5162320057,
  "status": "passed"
});
formatter.match({
  "location": "UserIcaSteps.userUpdateClass()"
});
formatter.result({
  "duration": 2137373925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataB",
      "offset": 22
    },
    {
      "val": "16/03/2023",
      "offset": 41
    },
    {
      "val": "18/03/2023",
      "offset": 74
    }
  ],
  "location": "UserIcaSteps.updateByInputNameStartDateAndGraduationDate(String,String,String)"
});
formatter.result({
  "duration": 7375760555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomasss",
      "offset": 15
    }
  ],
  "location": "UserIcaSteps.mentorUpdate(String)"
});
formatter.result({
  "duration": 5221213820,
  "status": "passed"
});
formatter.after({
  "duration": 1107895399,
  "status": "passed"
});
formatter.before({
  "duration": 4256796739,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User deleteing valid data",
  "description": "",
  "id": "user-could-create-class-edit-class-and-delete-class;user-deleteing-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "User open the website management mentee",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User input \"tomas@gmail.com\" as userName and input \"12345\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User already sign in as user at management mente website",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User click button OK",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User Click Class",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User Deleting data containing the name aa",
  "keyword": "Then "
});
formatter.match({
  "location": "UserAliaSteps.userOpenTheWebsiteManagementMentee()"
});
formatter.result({
  "duration": 1068212284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomas@gmail.com",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 52
    }
  ],
  "location": "SuperAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 5424042048,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userAlreadySignInAsUserAdminAtManagementMenteWebsite()"
});
formatter.result({
  "duration": 63819015,
  "status": "passed"
});
formatter.match({
  "location": "SuperAdminSteps.userClickButtonOK()"
});
formatter.result({
  "duration": 6120855687,
  "status": "passed"
});
formatter.match({
  "location": "UserAliaSteps.userClickClassMenu()"
});
formatter.result({
  "duration": 5161292015,
  "status": "passed"
});
formatter.match({
  "location": "UserIcaSteps.userDeletingDataContainingTheNameAa()"
});
formatter.result({
  "duration": 5136211890,
  "status": "passed"
});
formatter.after({
  "duration": 1105921421,
  "status": "passed"
});
});