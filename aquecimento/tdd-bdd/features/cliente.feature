Feature: Clients

    Testa a lista de clientes
Scenario: List of clients
Given I have "10" clients on my database
When I access my webpage
Then see the list of "10" itens