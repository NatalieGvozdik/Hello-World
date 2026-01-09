Feature: Rozetka Basket Functionality

  Scenario: Add a product to the basket and verify it is not empty
    Given I navigate to "https://rozetka.com.ua/"
    When I add a product to the basket
    And I open the basket
    Then I verify the basket is not empty