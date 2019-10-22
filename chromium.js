const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

async function getScreenshot(url, type, quality, fullPage) {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 })
  await page.goto(url)
  const file = await page.screenshot({ type, quality, fullPage })
  await browser.close()
  return file
}

module.exports = { getScreenshot }
