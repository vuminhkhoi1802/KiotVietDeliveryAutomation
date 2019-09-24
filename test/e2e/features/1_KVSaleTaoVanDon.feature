Feature: Delivery Service Create Order & Checkout Cycle

    Background:
        Given User already login to the KV Sale Page

    Scenario Outline: Nguoi dung tao van don thanh cong
        When Da chon san pham vao gio hang <product>
        When Dien thong tin giao hang
        And Dien thong tin doi tac giao hang <client>
        And Thanh toan don hang
        Then Tao don hang thanh cong

        Examples:
            | client       | product      |
            | GHN          | Marl đỏ      |
#            | Giao hàng nhanh |
#    Scenario: Nguoi dung khong tao van don thanh cong (Thieu san pham)
#        Given Khong chon san pham vao gio hang
#        When Dien thong tin giao hang
#        And Dien thong tin doi tac giao hang
#        Then Khong the confirm thong tin giao hang
#
#    Scenario: Nguoi dung khong tao van don thanh cong (Thieu thong tin nguoi nhan)
#        Given Da chon san pham vao gio hang
#        When Khong dien thong tin khach hang
#        And Dien thong tin doi tac giao hang
#        Then Khong the confirm thong tin giao hang
#
#    Scenario Outline: Nguoi dung tao van don theo dia chi
#        Given Da chon san pham vao gio hang
#        When Dien thong tin giao hang - thanh pho <Area>
#        And Dien thong tin doi tac giao hang
#        Then Confirm Ahamove <Action> thanh pho <Area>
#        Examples:
#            | Area        | Action       |
#            | Hà Nội      | Ho Tro       |
#            | Hồ Chí Minh | Ho Tro       |
#            | Đà Nẵng     | Khong Ho Tro |
#
#    Scenario: Nguoi dung tao don hang pending
#        Given Han muc COD da duoc set trong KV Shipping
#        And Da chon san pham vao gio hang
#        And Dien thong tin giao hang
#        And Dien thong tin doi tac giao hang
#        Then Tao don hang bi pending



