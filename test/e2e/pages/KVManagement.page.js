import {
    executeClick,
    executeWait,
    delayBrowser, getBrowserURL
} from '../constants/CommonFunctions.constant';
import { kvInvoiceURL } from '../constants/SystemURLs.constant';
import { kvSalePage } from './KVSale.page';


class KVManagement {
    get popUp() {
        return browser.$("//div[@class='popup-support']");
    }

    get popUpCloseButton() {
        return browser.$("//a[@class='popup-close']");
    }

    get orderNumber() {
        return browser.$('//section[@class=\'mainRight invoices ng-scope\']//tr[2]//td[4]');
    }

    get orderCode() {
        return browser.$(`//span[contains(text(),'${this.orderNumber.getText()}')]`);
    }

    get cancelDeliveryButton() {
        return browser.$("//div[@class='col-md-12']//a[@class='kv2Btn kv2BtnWhite ng-binding'][contains(text(),'y v')]");
    }

    get cancelPopUp() {
        return browser.$("//p[@class='confirm-message']");
    }

    get cancelConfirmButton() {
        return browser.$("//*[text()='Chắc chắn']");
    }

    get deliveryInfo() {
        return browser.$("//h3[@class='title-form-panel ng-binding']");
    }

    get deliveryCode() {
        return browser.$("//div[@class='form-control-static']");
    }

    get successMessage() {
        return browser.$("//span[@class='ng-binding'][contains(text(),'ã h')]");
    }

    handlePopUp() {
        if (this.popUp.isExisting()) {
            executeWait(this.popUp);
            executeClick(this.popUpCloseButton);
        }
    }

    checkIfTheCreatedOrderExist() {
        browser.navigateTo(kvInvoiceURL);
        executeWait(this.orderCode);
        const orderCode = this.orderCode.getText();
        console.log(orderCode);
        if (orderCode !== 0) {
            return true;
        }
    }

    goToOrderDetail() {
        executeClick(this.orderCode);
    }

    handleCancelConfirm() {
        executeWait(this.cancelPopUp);
        executeClick(this.cancelConfirmButton);
    }


    cancelOrder() {
        executeWait(this.cancelDeliveryButton);
        executeClick(this.cancelDeliveryButton);
        this.handleCancelConfirm();
    }

    handleCancelSuccess() {
        browser.refresh();
        this.checkIfTheCreatedOrderExist();
    }
}

export const kvManagement = new KVManagement();
