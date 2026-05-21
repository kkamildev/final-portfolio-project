import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'


const routes = [
    "/",
    "/history",
    "/projects",
    "/knowledge",
    "/community",
    "/contact",
    ...Array.from({length:3}).map((obj, index) => `/project/${index}` )
  
]

const distDir = path.resolve('dist')

const run = async () => {
  const browser = await puppeteer.launch({
    headless: 'new'
  })
  const page = await browser.newPage()

  for (const route of routes) {
    const url = `http://localhost:4173${route}`

    await page.goto(url, { waitUntil: 'networkidle0' })

    const html = await page.content()

    const filePath =
      route === '/'
        ? path.join(distDir, "index.html")
        : path.join(distDir, route, "index.html")

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html)

  }

  await browser.close()
}

run()
