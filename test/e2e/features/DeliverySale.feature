Feature: Perform a retail goods checkout

    Scenario: Perform an Order without Delivery
        Given I'm on the login page
        And I log in with a default user
        And I'm on the sale page
        When I choose a product
        When I click finish checkout
        Then I see Successful Message

    Scenario: Perform an Order with a Delivery Service
        Given I'm on the login page
        And I log in with a default user
        And I'm on the sale page
        When I input a current customer
        When I select a delivery service
        When I click finish checkout
        Then I see Successful Message
