import { assert } from 'chai';
import { When, Then } from 'cucumber';
import { kvSalePage } from '../pages/KVSale.page';

When(/^I'm on the sale page$/, () => {
    const username = $('.lk-user-name').getText();
    assert.equal()
});

When(/^I choose a product$/, () => {
    kvSalePage.selectProduct();
});

When(/^I click finish checkout$/, () => {
    kvSalePage.finishSale();
});

Then(/^I see Successful Message$/, () => {
    const successMessage = $('div #toast-container').getText();
    assert.equal(successMessage, 'Hóa đơn được cập nhật thành công');
});
