$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 20,
  "name": "Verify dell financial service Page",
  "description": "",
  "id": "login;verify-dell-financial-service-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Open page \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Click on SignIN Button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on Dell Financial service",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "varifiy financial page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 11
    }
  ],
  "location": "LoginStepDep.Open_page(String)"
});
formatter.result({
  "duration": 3653349500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDep.click_on_SignIN_Button()"
});
formatter.result({
  "duration": 387465700,
  "error_message": "java.lang.NullPointerException\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:557)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.test.pageAction.LoginPageAction.ClickonSignINButton(LoginPageAction.java:14)\r\n\tat Stepdep.LoginStepDep.click_on_SignIN_Button(LoginStepDep.java:22)\r\n\tat ✽.Then Click on SignIN Button(Login.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDep.Click_on_Dell_Financial_service()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDep.varifiy_financial_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Verify support page",
  "description": "",
  "id": "login;verify-support-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Open page \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "click on suport button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "click view all support link",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "verify support page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 11
    }
  ],
  "location": "LoginStepDep.Open_page(String)"
});
formatter.result({
  "duration": 257528800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027TANZIR-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\tanzi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58676}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d8765027894c8a49025b6c8b99f46704\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat com.test.util.TestBase.geturl(TestBase.java:60)\r\n\tat Stepdep.LoginStepDep.Open_page(LoginStepDep.java:17)\r\n\tat ✽.Given Open page \"\u003cURL\u003e\"(Login.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDep.click_on_suport_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDep.click_view_all_support_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDep.verify_support_page()"
});
formatter.result({
  "status": "skipped"
});
});