const puppeteer = require('puppeteer');

(async () => {

    // Launching the headful browser
    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: null
     });
    const page = await browser.newPage();

    // Going to the swap.defillama website
    await page.goto('https://swap.defillama.com');

    // Delay function
    const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

    // AUTOMATING FORM DATA

    // Chain Field
    await page.click('.css-1wy0on6');
    await page.click('#react-select-2-option-4');
    await delay(200);

    // You Sell Field
    const sellInput = await page.$('.chakra-input');
    await sellInput.click({ clickCount: 3 })
    await sellInput.type("12");
    await delay(200);

    // Select Token Field in the You Sell section 
    await page.click('div:nth-of-type(1) > .css-1k491an > .chakra-button.css-qjhap > .chakra-text.css-sys4p8');
    const sellTokenInput = await page.$('.chakra-input.css-s1d1f4');
    await sellTokenInput.type('Wrapped BTC');
    await delay(500);
    await page.click('div:nth-of-type(1) > .cjxQGj.sc-b49748d5-3', );

    // Select Token Field in the You Buy section 
    await page.click('div:nth-of-type(2) > .css-1k491an > .chakra-button.css-qjhap > .chakra-text.css-sys4p8');
    const buyTokenInput = await page.$('.chakra-input.css-s1d1f4');
    await buyTokenInput.type('USDC');
    await delay(500);
    await page.click('div:nth-of-type(2) > .cjxQGj.sc-b49748d5-3  .chakra-text.css-72rvq0');

    // To select the second route 
    await page.waitForSelector('.sc-bb167634-2.cObIGF > div:nth-of-type(4)');
    // Updating the option for a few number of times so that it always selects the second option until the routes are completely loaded
    for (let i = 0; i < 8; i++) { 
        await delay(3000);
        await page.click('.sc-bb167634-2.cObIGF > div:nth-of-type(4)');
    }

})();
