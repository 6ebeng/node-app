// const puppeteer = require('puppeteer')

// async function run(){
//     const browser = await puppeteer.launch({                       
//         headless: false,
//         args: ["--no-sandbox", "--start-maximized"],
//         defaultViewport: null
//     });
//     const page = await browser.newPage();
//     await page.goto('https://www.zara.com/us/en/mock-neck-top-p01165541.html?v1=212372874&v2=2113611');
    
//     const detail = await page.evaluate(()=>{
//         return document.querySelector("h1.product-detail-info__header-name").textContent
//     })

//     console.log(detail)
//     browser.close();
// }

// run();

