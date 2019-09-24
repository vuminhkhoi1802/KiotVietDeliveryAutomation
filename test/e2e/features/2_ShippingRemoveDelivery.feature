Feature: Huy Don Hang tren KV Shipping

Scenario: Nguoi dung huy don hang vua tao tren Shipping thanh cong thong qua Search
    Given User already login to KV Management
    And Ton tai ma don hang
    When Vao chi tiet ma van don
    And Lay duoc ma van don
    When already login to KV Shipping
    When Tim ma van don o thanh Search
    And Vao chi tiet ma van don tren Shipping
    And An nut Huy tren Shipping
    Then Nguoi dung nhin thay trang thai "Đã hủy"
