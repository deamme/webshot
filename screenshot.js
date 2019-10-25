const { parse } = require('url')
const { getScreenshot } = require('./chromium')
const { getInt, getUrlFromPath, isValidUrl } = require('./validator')

module.exports = async function(req, res) {
  try {
    const { pathname = '/', query = {} } = parse(req.url, true)
    const { type = 'png', quality, fullPage, height = 1920, width = 1080 } = query
    const url = getUrlFromPath(pathname)
    const qual = getInt(quality)
    const h = getInt(height)
    const w = getInt(width)
    if (!isValidUrl(url)) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'text/html')
      res.end(
        `<h1>Bad Request</h1><p>The url <em>${url}</em> is not valid.</p>`
      )
    } else {
      const file = await getScreenshot(url, type, qual, fullPage, h, w)
      res.statusCode = 200
      res.setHeader('Content-Type', `image/${type}`)
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
      res.end(file)
    }
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>')
    console.error(e.message)
  }
}
