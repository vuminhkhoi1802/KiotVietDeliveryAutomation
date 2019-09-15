import { assert } from 'chai';
import { Given, When, Then, And } from 'cucumber';
import { kvSalePage } from '../pages/KVSale.page';
import { loginPage } from '../pages/Login.page';
import * as systemMessages from '../constants/SystemMessages.constant';
import * as systemLabels from '../constants/SystemKeys.constant';

Given(/^User already login to the KV Sale Page$/, () => {
    loginPage.login();
});

Given (/^I selected a product for sale$/,() => {
    kvSalePage.selectProduct();
    assert.equal(kvSalePage.productSelection.getText(), 'Thuốc lá 555 nội');
});

When(/^I filled in correct parameters in Shipping Detail using Ahamove$/, () => {
    kvSalePage.inputCustomer();
    kvSalePage.goToDeliverySettings();
    kvSalePage.selectDeliveryService();
});

Then(/^I can see that I could use the Ahamove Service$/, () => {
    const service = $(`//div[contains(text(),'VTK - Ti')]`);
    assert.equal(service, systemLabels.SERVICE_DELIVERY);
});

And(/^I see a successful KV checkout message$/, () => {
    kvSalePage.finishDelivery();
    kvSalePage.finishSale();
    const successMessage = $('div #toast-container').getText();
    assert.equal(successMessage, systemMessages.ORDER_SUCCESS);
})

When(/^I choose a product$/, () => {
    kvSalePage.selectProduct();
});

When(/^I click finish checkout$/, () => {

    kvSalePage.finishSale();
});

When(/^I input a current customer$/, () => {
    kvSalePage.deliverySettings();
});
