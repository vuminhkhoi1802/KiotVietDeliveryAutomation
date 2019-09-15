Background: 		
	Given User already login to the KV Sale Page	

Scenario: User performed a successful checkout/sale			
	Given I selected a product for sale		
	When I filled in correct parameters in Shipping Detail using Ahamove		
	Then I can see that I could use the Ahamove Service		
	And I see a successful KV checkout message		
			
# Scenario: User performed unsucessful checkout/sale (User used non HCMC or Hanoi Receiving Address)			
# 	Given I selected a product for sale		
	# When I filled in correct parameters except the receiving address has <Area> as Area		
# 	Then I can see that I could not use the Ahamove Service		
# 	And I see a unsuccessful KV checkout message		

Examples:	
	| Area    |
	| Đà Nẵng |
	| Hải Phòng |