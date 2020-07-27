const puppeteer = require('puppeteer');
const merge = require('easy-pdf-merge');
const util = require('util');

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

const print = async (page, name) => {
    await page.click('button[id="shuffle"]');
    await delay(1500);
    // await page.pdf({path: name, format: 'A4'});
    await page.screenshot({path: name});
    await delay(2000);
    return Promise.resolve(true)
}

const printAll = async (page) => {
    await page.click('button[id="showall"]');
    await delay(1500);
    // await page.pdf({path: `pdf/all.pdf`, format: 'A4'});
    await page.screenshot({path: `png/all.png`});
    await delay(2000);
    return Promise.resolve(true)
}

const mergePromisified = util.promisify(merge);

(async () => {
    const browser = await puppeteer.launch({headless: false, args: ['--start-fullscreen']});
    const page = await browser.newPage();
    await page.setViewport({width: 2000, height: 2000});
    await page.goto('http://localhost:63342/bingo/index.html');
    await page.emulateMedia('print');
    const pdfs = [];
    let index = 1;
    for (pdf of pdfs) {
        const pdfName = `png/${index}.png`;
        pdfs.push(pdfName)
        await print(page, pdfName);
    }
    await printAll(page);
    await browser.close();
    // await mergePromisified([...pdfs, `pdf/all.pdf`], 'pdf/0000.pdf');
})();


