Feature: Check latest selenium docs
    Scenario: selenium-doc
        Given I navigate to selenium.dev
        When I click on selenium-webdriver
        Then I check the docs version