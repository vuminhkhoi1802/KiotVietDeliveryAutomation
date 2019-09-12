Feature: KiotViet Ahamove Shipping
    Background: User login to KiotViet Sale Page and select the 'giao hang' widget
        Given I'm on the login
        When I login with a shiptest user
        When I clc
        Then show username 'shiptest' on the top right corner

    Scenario: User can click on 'giao hàng' button
        Given I'm on the sale page
        When I click on the check box
        Then I see the 'giao hàng' button is clickable

    Scenario:
        Given

