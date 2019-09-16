import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { kvSalePage } from '../pages/KVSale.page';
import { loginPage } from '../pages/Login.page';
import * as systemMessages from '../constants/SystemMessages.constant';
import * as systemLabels from '../constants/SystemLabels.constant';
import { context } from '../../data/Context';

Given(/^User already login to the KV Sale Page$/, () => {
    loginPage.open();
    loginPage.login(context.logins.user);
});

Given(/^Da chon san pham vao gio hang$/, () => {
    kvSalePage.selectProduct();
    // assert.equal(kvSalePage.productSelection.getText(), 'Thuốc lá 555 nội');
});

When(/^Dien thong tin giao hang$/, () => {
    kvSalePage.inputCustomer(context.logins.customer);
    kvSalePage.goToDeliverySettings();
    const title = browser.$('//span[@class=\'k-window-title\']');
    assert.equal(title.getText(), 'Chi tiết đơn giao hàng');

});

When(/^Dien thong tin doi tac giao hang$/, () => {
    // const service = browser.$(`//div[contains(text(),'VTK')]`);
    kvSalePage.selectDeliveryService(context.logins.delivery);
    // assert.equal(service, systemLabels.SERVICE_DELIVERY);
});

When(/^Thanh toan don hang$/, () => {
    kvSalePage.finishDelivery();
    kvSalePage.finishSale();
});

Then(/^I see a successful KV checkout message$/, () => {
    const successMessage = $('div #toast-container').getText();
    if (assert.equal(successMessage, systemMessages.ORDER_SUCCESS)) {
        console.log(successMessage);
    } else {
        console.error('');
    }
});

// When(/^I choose a product$/, () => {
//     kvSalePage.selectProduct();
// });
//
// When(/^I click finish checkout$/, () => {
//
//     kvSalePage.finishSale();
// });
//
// When(/^I input a current customer$/, () => {
//     kvSalePage.deliverySettings();
// });
