Feature: Performing a login to KV Shipping

    Background:
        Given I'm on the login page - Shipping

    Scenario: Login with a default user - Shipping
        When I log in with a default user - Shipping
        Then show user name 'Khôi - OCC' on the site - Shipping

