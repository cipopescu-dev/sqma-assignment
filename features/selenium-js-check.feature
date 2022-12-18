Feature: Search for package on npmjs
    Scenario: selenium-dep
        Given I navigate to npmjs.com
        When I search for selenium-webdriver
        When I click on exact match link
        Then I check the lastest version

