import * as systemKeys from '../constants/SystemKeys.constant';

export const delayInterval = 7000;

const delayBrowser = () => {
    browser.pause(delayInterval);
};

const runInBrowser = (argument) => {
    argument.click();
};

class KVSalePage {

    get popUpWindow() {
        return $('.popup-header');
    }

    get customerField() {
        return $('body #customerSearchInput');
    }

    get deliveryCheckBox() {
        return $('body #delivery');
    }

    get deliveryLink() {
        return  browser.$('//span[contains(text(),\'Giao hàng\')]');
    }

    get deliveryServiceInput () {
        return browser.$('//div[@class=\'swiper-slide swiper-slide-active\']//li[1]');
    }

    get deliveryWindowsTitle() {
        return browser.$('//span[@class=\'k-window-title\']');
    }

    get deliveryServiceSelection() {
        return browser.$('//div[@class=\'kv-body\']//div[2]//div[1]//label[1]//input[1]');
    }

    get productSelection() {
        return browser.$('//span[contains(text(),\'c lá 555 n\')]');
    }


    get deliveryFinishButton() {
        return browser.$('//button[@class=\'btn btn-success\'][contains(text(),\'Xong\')]');
    }

    get checkOutButton() {
        return $('body #saveTransaction');
    }

    inputCustomer(customer) {
        try {
            browser.execute(runInBrowser, this.customerField);
            this.customerField.setValue(customer.name);
            delayBrowser();
            browser.keys(systemKeys.ENTER);
            delayBrowser();
        } catch (error) {
            throw error;
        }
    }

    handlePopUp() {
        if (this.popUpWindow.isExisting()) {
            this.popUpWindow.click();
            browser.keys(systemKeys.ESCAPE);
        }
    }

    selectProduct() {
        delayBrowser();
        this.handlePopUp();
        browser.keys(systemKeys.ESCAPE);
        browser.execute(runInBrowser, this.productSelection);
    }

    goToDeliverySettings() {
        browser.execute(runInBrowser, this.deliveryCheckBox);
        browser.execute(runInBrowser,this.deliveryLink);
        delayBrowser();
    }

    selectDeliveryService() {
        try {
            delayBrowser();
            // browser.execute(runInBrowser, this.deliveryServiceInput);
            // this.deliveryServiceInput.setValue(delivery.service);
            // browser.keys(systemKeys.ARROW_DOWN);
            // delayBrowser();
            // browser.keys(systemKeys.ENTER);
            // delayBrowser();
            browser.execute(runInBrowser, this.deliveryServiceSelection);
            delayBrowser();
        } catch (error) {
            throw error;
        }
    }

    finishDelivery() {
        browser.execute(runInBrowser, this.deliveryFinishButton);
    }

    finishSale() {
        // this.checkOutButton.click();
        browser.execute(runInBrowser, this.checkOutButton);
        delayBrowser();
        browser.keys(systemKeys.ESCAPE);
        delayBrowser();

    }
}

export const kvSalePage = new KVSalePage();
