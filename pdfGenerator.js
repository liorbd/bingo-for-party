const puppeteer = require('puppeteer');

const delay = (t = 1) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({})
    }, t * 1000)
  })
}
(async () => {
  try {
    const browser = await puppeteer.launch({headless: false, devtools: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 1600});
    await page.goto('http://localhost:63342/bingo/index.html');
    // await page.emulateMedia('print');
    // for (let i of [...Array(20).keys()]) {
    //   await page.screenshot({ path: `./png/${i+1}.png`});
    //   // await delay(1);
    //   await page.click('#shuffle');
    //   await delay(1);
    // }
    await page.setViewport({width: 1200, height: 2200});
    await page.click('#showall');
    await delay(2);
    await page.screenshot({ path: `./png/all.png`});
  } catch (e) {
    console.warn('ERROR: ', e);
  }

})()
