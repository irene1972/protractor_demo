"use strict";

//import { Driver } from "selenium-webdriver/chrome";

describe('Protractor Frames',function() {  

	it('Open None Angular js website that contains a Frame',function() {
    
    browser.waitForAngularEnabled(false);
    
    browser.driver.manage().window().maximize();

    browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
    
    //browser.switchTo().frame("courses-iframe"); -----> NO
    //browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
    browser.switchTo().frame(element(by.id('courses-iframe')).getWebElement());

    element(by.css("a[href*='sign_in']")).getText().then(function(text_ref){
      console.log('The login es: ' + text_ref);
    });

	})
});
