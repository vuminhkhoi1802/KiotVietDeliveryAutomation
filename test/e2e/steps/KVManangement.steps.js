import { assert } from 'chai';
import { Given, When, Then } from 'cucumber'
import { loginPage } from "../pages/Login.page";
import { kvManagement } from '../pages/KVManagement.page';
import { context } from "../../data/Context";

Given(/^User already login to KV Management$/, () => {
    loginPage.open();
    loginPage.fillInCredential(context.data.user);
    loginPage.loginManagement(context.data.user);
});

Given(/^Ton tai ma don hang$/, () => {
    kvManagement.handlePopUp();
    kvManagement.checkIfTheCreatedOrderExist();
});

When(/^Vao chi tiet ma van don$/, () => {
    kvManagement.goToOrderDetail();
});

When(/^An nut Huy$/, () => {
    kvManagement.cancelOrder();
});


Then(/^Nguoi dung nhin thay van don o trang thai "([^"]*)"$/, (status) => {
    kvManagement.handleCancelSuccess();
    const deliveryStatus = kvManagement.successMessage.getText();
    if (assert.equal(deliveryStatus, status)) {
        console.log('PASSED');
    } else {
        console.log('FAILED');
    }
});
