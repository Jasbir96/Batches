const puppeteer = require("puppeteer");
let browser;
let page;
let code;
let language;
puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
}).then(function (b) {
    browser = b;
    return browser.pages();
}).then(function (pages) {
    page = pages[0];
    return page.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login/");
}).then(function () {
    return page.type("#input-1", "xotel91497@0ppp.com");
}).then(function (){
    return page.type("#input-2", "12345678")
}).then(function () {
    return waitClickNavigate(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"); 
}).then(function () {
    //class and id can change, so used title, because it wont change
    return waitClickNavigate("[title='Interview Preparation Kit'] a");
}).then(function () {
    return waitClickNavigate("[data-attr1='warmup']");
}).then(function () { 
    return waitClickNavigate(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
}).then(function () {
    //When it gives "No node found for selector" error, we add this, because
    //we are searching for selector before it is loaded
    return page.waitForSelector("[data-attr2='Editorial']", {visible:true});
}).then(function () {
    return page.click("[data-attr2='Editorial']");
}).then(function () {
    return handleLockBtn(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
}).then(function () {
    return page.evaluate(function () {
        return document.querySelector(".challenge-editorial-block.editorial-setter-code pre").innerText;
    });
}).then(function (c) {
    code = c;
}).then(function () {
    return page.evaluate(function () {
        return document.querySelector(".challenge-editorial-block.editorial-setter-code h3").innerText;
    });
}).then(function (lan) {
    language = lan;
    return page.waitForSelector('[data-attr2="Problem"]', {visible: true});
}).then(function () {
    return page.click('[data-attr2="Problem"]');
}).then(function () {
    return pasteCode(code, language);
}).then(function () {
    console.log(code);
}).then(function () {
    return browser.close();
}).catch(function (err) {
    console.log(err);
});
function pasteCode(code, language) {
    return page.waitForSelector("[type='checkbox']", {visible: true})
    .then(function () {
        return page.click("[type='checkbox']")
    }).then(function () {
        return page.waitForSelector("#input-1");
    }).then(function (){
        return page.type("#input-1", code)
    }).then(function (){
        return page.keyboard.down('Control');
    }).then(function () {
        return page.keyboard.press('A');
    }).then(function () {
        return page.keyboard.press('X');
    }).then(function () {
        return page.keyboard.up('Control');
    }).then(function () {
        return page.click('.css-1hwfws3');
    }).then(function () {
        return page.type('.css-1hwfws3', language);
    }).then(function () {
        return page.keyboard.press("Enter");
    }).then(function () {
        return page.keyboard.down("Control");
    }).then(function () {
        return page.click(".view-lines");
    }).then(function () {
        return page.keyboard.press('A');
    }).then(function () {
        return page.keyboard.press('V');
    }).then (function () {
        return page.keyboard.up("Control");
    }).then(function () {
        return page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
    });
}
//if editorial is unlocked then we reslove it without doing anything, else unlock is clicked
function handleLockBtn(selector) {
    return new Promise(function (resolve, reject) {
        page.waitForSelector(selector, {visible:true})
        .then(function () {
            return page.click(selector);
        })
        .then(function () {
            resolve();
        })
        .catch(function (err) {
            resolve();
        });
    });
}
//completes repeated task
function waitClickNavigate(selector) {
    return new Promise(function (resolve, reject) {
        page.waitForSelector(selector, {visible: true}).then (function () {
            return  Promise.all([
                page.waitForNavigation(),
                page.click(selector)
            ])
            .then(function () {
                resolve();
            })
            .catch(function (err) {
                reject(err);
            });
        });
    });
}