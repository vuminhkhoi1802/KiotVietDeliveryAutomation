Feature: KiotViet Ahamove Shipping
    In this feature, User will make a checkout for COD order using Ahamove Service.

    Background: User login to KiotViet Sale Page
        Given I'm on the login screen
        When I login with a shiptest user
        And I choose a product
        Then show username 'shiptest' on the top right corner

    Scenario: User can see the shipping detail
        Given I'm on the sale page
        When I click on the check box
        When I click on the 'giao hang' button
        Then I can see the 'Chi tiết đơn giao hàng' label on the top left corner

    Scenario: User can see Ahamove in shipping services table
        Given I'm on the Delivery Detail
        And I already input a supported Area (Hanoi or HCMC)
        When I input 'Ahamove' in the shipping partner input field
        Then I see Ahamove as the result

    Scenario: User cannot use Ahamove if the receiving address area is not supported (Hanoi & HCMC)
        Given I'm on the Delivery Detail
        And I input an address that is not in Hanoi or HCMC
        When I input 'Ahamove' in the shipping partner input field
        Then I cannot see Ahamove as the result

    Scenario: User can use Ahamove if the receiving address area is either Hanoi or HCMC
        Given I'm on the Delivery Detail
        And I input an address area which is 'Hanoi'
        When I input 'Ahamove' in the shipping partner input field
        When I select an Ahamove service (any)
        When I click 'Xong' button
        Then I returned to the Retail Page





