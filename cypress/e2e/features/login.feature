Feature: Login
Scenario: Login user with incorrect email and password
Given the user is on the home page
When the user click on Mijn account link
Then the user enters an invalid "<username>" and "<password>" into the login form
And submits the form
Then an error message is displayed
Examples:
| username                           | password         |
| elfina.dejong@construct.com        | 7ZUFQx8y8Yuhuxwp |