import * as systemKeys from '../constants/SystemKeys.constant';

export const delayInterval = 4000;

const delayBrowser = () => {
    browser.pause(delayInterval);
}

class KVSalePage {

    get customerField() {
        return $('body #customerSearchInput');
    }

    get deliveryCheckBox() {
        return $('input #delivery');
    }

    get deliveryLink() {
        return $('body #contact-link');
    }

    get deliveryServiceInput () {
        return $('div #searchPartnerForm');
    }

    get deliveryServiceSelection() {
        return $(`//div[@class='kv-body']//div[2]//div[1]//label[1]//input[1]`);
    }

    get productSelection() {
        return $('*=Thuốc lá 555 nội');
    }

    get deliveryFinishButton() {
        return $(`//button[@class='btn btn-success'][contains(text(),'Xong')]`);
    }

    get checkOutButton() {
        return $('body #saveTransaction');
    }

    inputCustomer(customer) {
        try {
            this.customerField.click();
            this.customerField.setValue(customer.name);
            browser.keys(systemKeys.ARROW_DOWN);
            browser.keys(systemKeys.ENTER);
        } catch (error) {
            throw error;
        }
    }

    goToDeliverySettings() {
        if (!this.deliveryLink.isExisting()) {
            this.deliveryCheckBox.click();
        }
        this.deliveryLink.click();
        delayBrowser();
        // this.deliveryCheckBox.click();
        // this.deliveryFinishButton.click();
    }

    selectDeliveryService() {
        try {
            this.deliveryServiceSelection.sendKeys("Viettel Post");
            browser.keys(systemKeys.ARROW_DOWN);
            browser.keys(systemKeys.ENTER);
            this.deliveryServiceSelection.click();
            delayBrowser();
        } catch (error) {
            throw error;
        }
    }



    selectProduct() {
        this.productSelection.click();
    }

    finishDelivery() {
        this.deliveryFinishButton.click();
    }

    finishSale() {
        this.checkOutButton.click();
        browser.keys(systemKeys.ESCAPE);
        delayBrowser();
    }


    // sendMessage(content) {
    //     if (content.file != null) {
    //         const localFilePath = `${path.resolve('./')}/documents/${
    //             content.file
    //         }`;
    //         const remoteFilePath = browser.uploadFile(localFilePath);
    //         this.inputFile.setValue(remoteFilePath);
    //     }
    //
    //     this.subjectContact.selectByAttribute('value', content.subject);
    //     this.message.setValue(content.message);
    //
    //     this.buttonSubmitMessage.click();
    // }
}

export const kvSalePage = new KVSalePage();
