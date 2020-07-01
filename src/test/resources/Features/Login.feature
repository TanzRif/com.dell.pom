Feature: Login 


@Sanity 
Scenario: Verify user can login successfully 
	Given Open page "<URL>" 
	Then Click on SignIN Button 
	Then Click on SignIN Link 
	Then Enter user name Enter Password Click on Signin 
	Then Verify user can login successfully 
	
@Sanity 
Scenario: Verify Search result 
	Given Open page "<URL>" 
	Then enter XPS in Search Field 
	Then Click on Search Button 
	Then Verify Search result 
	
@Smoke 
Scenario: Verify dell financial service Page 
	Given Open page "<URL>" 
	Then Click on SignIN Button 
	Then Click on Dell Financial service 
	Then varifiy financial page 
	
	
@Smoke 
Scenario: Verify support page 
	Given Open page "<URL>" 
	Then click on suport button 
	Then click view all support link 
	Then verify support page