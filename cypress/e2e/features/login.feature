Feature: Login
Scenario: Login user with incorrect email and password
Given an anonymous user is on the login page
When the user enters an invalid "<username>" and "<password>" into the login form
And submits the form
Then an error message is displayed
Examples:
| username                           | password         |
| elfina.dejong@construct.com        | 7ZUFQx8y8Yuhuxwp |