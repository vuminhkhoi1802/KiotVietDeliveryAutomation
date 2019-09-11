Feature: Perform a retail goods checkout

    Scenario: Perform a Order without Delivery
        Given I'm on the login page
        And I log in with a default user
        And I'm on the sale page
        When I choose a product
        When I click finish checkout
        Then I see Successful Message

    Scenario:
    Scenario: Attaching a document to the message to the customer
        Given I'm on the login page
        And I log in with a default user
        And I'm on the sale page
        When I send a message with a document
        Then the system shows a successful message
