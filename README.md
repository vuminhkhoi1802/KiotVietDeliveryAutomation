KV Shipping & KV Sale Automation
=================

**KV Shipping & KV Sale Automation** là một bộ script để chạy tự động 
These tests are developed in JS with [WebDriverIO](http://webdriver.io/) and [Cucumber](https://cucumber.io/)  

Yêu Cầu về Cài Đặt các Package
---------------

- node >= 10.15.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.16.x - [how to install Yarn](https://yarnpkg.com/en/docs/install)
- Selenium Server: Here's how to set up a server: [Zalenium](https://github.com/zalando/zalenium) or [Selenium HQ](https://github.com/SeleniumHQ/docker-selenium) (Optional)
- JDK (Java Development Kit) === 1.8.x - [how to install JDK 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- Docker & Docker-Compose @Latest - [Docker](https://docs.docker.com/install/)


```Lưu ý: không cài đặt JDK > JDK8 do sự không tương thích với Selenium-StandAlone của WebDriverIO của JDK 9 trở lên.```
- [Hướng dẫn add JDK vào Global Path cho Windows](https://javatutorial.net/set-java-home-windows-10)
- [Hướng dẫn add JDK vào Global Path cho Linux (Ubuntu)](https://vitux.com/how-to-setup-java_home-path-in-ubuntu/)

Getting Started
---------------

Install the dependencies:

```bash
$ yarn install
```

Chạy Selenium Server với Zalenium:

 ```bash
$ chmod +X zalenium.sh
$ ./zalenium.sh
```

Ở file config wdio.conf.js tên host mặc định nằm ở trường Selenium Server `hostname` (tên mặc định: localhost).  

Nếu bạn chỉ muốn chạy local bình thường mà không muốn chạy thông qua Selenium Server ở trên, 
thì bạn có thể sử dụng Selenium Standalone 
từ WebDriverIO (nếu bạn đã cài đặt JDK 8 ở trên) bằng cách bỏ dấu // (comment) 
ở dòng thứ 58 trong file `wdio.conf.js` (nếu chưa bỏ)

Chạy e2e tests:

```bash
yarn tests:e2e
```


Project Structure (Draft)
---------------
```
shipping-cs-auto-test
├── test
│   └── data
│        ├── Context.js
│        └── Data.js
├── e2e
│   ├── constants
│   │    ├── documents
│   │    ├── CommonFunctions.constant.js
│   │    ├── CommonVariables.constant.js
│   │    ├── SystemKeys.constant.js
│   │    ├── SystemLabels.constant.js
│   │    ├── SystemMessages.constant.js
│   │    └── SystemURL.constant.js
│   │       
│   ├── features
│   │    ├── 1_KVSaleTaoVanDon.feature
│   │    ├── 2_ShippingRemoveDelivery.feature
│   │    ├── 3_ShippingExport.feature
│   │    ├── 4_ShippingNotificationEmail.feature
│   │    └── 5_ShippingCrossCheck.feature
│   │   
│   ├── pages
│   │    ├── KVManagement.page.js
│   │    ├── KVSale.page.js 
│   │    ├── KVShipping.page.js
│   │    ├── Login.page.js
│   │    └── ShippingLogin.page.js      
│   │   
│   └── steps
│        ├── KVManagement.step.js
│        ├── KVSale.step.js 
│        ├── KVShipping.step.js
│        ├── Login.step.js
│        └── ShippingLogin.step.js   
└── wdio.conf.js
```

Reports - Check Báo Cáo sau khi chạy test
---------------

Chạy câu lệnh dưới đây sau khi test xong để webdriverio tạo ra báo cáo

```bash
yarn report:generate
```

Chạy câu lệnh dưới đây để xem bản báo cáo automation test trên trình duyệt
```bash
yarn report:open
```

Also, you can see [Timeline report](https://github.com/QualityOps/wdio-timeline-reporter) in `./test-report/timeline`

Eslint and Prettier
---------------
Đây là tool để kiểm tra xem bạn đã code theo đúng syntax & convention chưa

check lint:

```bash
yarn code:check
```

Run format lint:

```bash
yarn code:format
```
