Feature: Huy Van Don tren KV Management

Background:
    Given User already login to KV Management

Scenario: Nguoi dung huy don hang vua tao thanh cong
    Given Ton tai ma don hang
    When Vao chi tiet ma van don
    And An nut Huy
    And Vao chi tiet ma van don
    Then Nguoi dung nhin thay van don o trang thai "Đã hủy"
