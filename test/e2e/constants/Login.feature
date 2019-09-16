Feature: Performing a login

    Background:
        Given I'm on the login page

    Scenario: Login with a default user
        When I log in with a default user
        Then show user name 'shiptest' on the site
