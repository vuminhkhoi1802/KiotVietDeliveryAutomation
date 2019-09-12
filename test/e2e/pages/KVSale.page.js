import * as systemKeys from '../constants/SystemKeys.constant';

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

    get deliveryServiceSelection() {
        return $('');
    }

    get productSelection() {
        return $('');
    }

    get deliveryFinishButton() {
        return $('');
    }

    get checkOutButton() {
        return $('body #saveTransaction');
    }

    inputCustomer(customer) {
        try {
            this.customerField.click();
            this.customerField.setValue(customer.name);
            browser.keys(systemKeys.ENTER);
        } catch (error) {
            throw error;
        }
    }

    deliverySettings() {
        if (!this.deliveryLink.isExisting()) {
            this.deliveryCheckBox.click();
        }
        this.deliveryLink.click();
        const delayInterval = 4000;
        browser.pause(delayInterval);
        this.deliveryCheckBox.click();
        this.deliveryFinishButton.click();
    }

    selectDeliveryService() {
        try {
            this.deliveryServiceSelection.sendKeys("Viettel Post")
        }
    }

    selectProduct () {
        this.productSelection.click();
    }

    finishSale() {
        this.checkOutButton.click();
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
