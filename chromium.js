const chrome = require('chrome-aws-lambda')

async function getScreenshot(url, type, quality, fullPage, height, width) {
  // emoji support
  await chrome.font(
    'https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf'
  )

  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
    ignoreHTTPSErrors: true,
  })

  const page = await browser.newPage()
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  await page.goto(url)
  const file = await page.screenshot({ type, quality, fullPage })
  await browser.close()
  return file
}

module.exports = { getScreenshot }
