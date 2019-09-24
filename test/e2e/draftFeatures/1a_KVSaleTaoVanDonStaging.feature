Feature: Tao Van Don tren moi truong moi - Staging

    Background:
        Given User already login to the KV Sale Page

    Scenario Outline: Nguoi dung tao van don thanh cong
        When Staging - Da chon san pham vao gio hang <product>
        And Staging - Dien thong tin giao hang
        And Staging - Dien thong tin doi tac giao hang <client>
        And Staging - Thanh toan don hang
        Then Staging - Tao don hang thanh cong

        Examples:
            | client | product       |
            | GHN    | Bộ bé gái mèo |
