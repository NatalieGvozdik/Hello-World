Feature: Basket functionality

  Scenario: Verify that the basket is empty
    Given I navigate to "https://rozetka.com.ua/"
    When I open the basket
    Then I should see that the basket is empty