Feature: Ahamove Delivery Service Checkout Cycle

Background:
	Given User already login to the KV Sale Page

Scenario: User performed a successful checkout/sale
	Given Da chon san pham vao gio hang
	When Dien thong tin giao hang
	And Dien thong tin doi tac giao hang

#	Then I can see that I could use the Ahamove Service
#	Then I see a successful KV checkout message

# Scenario: User performed unsucessful checkout/sale (User used non HCMC or Hanoi Receiving Address)
# 	Given I selected a product for sale
	# When I filled in correct parameters except the receiving address has <Area> as Area
# 	Then I can see that I could not use the Ahamove Service
# 	And I see a unsuccessful KV checkout message


#	Scenario: User performed a successful checkout/sale
#		Given Da chon san pham vao gio hang
#		When Dien thong tin giao hang
#		And Dien thonng tin doi tac giao hang
#		And Thanh toan don hang
#		Then Tao don hang thanh cong
#Examples:
#	| Area    |
#	| Đà Nẵng |
#	| Hải Phòng |
