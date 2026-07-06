const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://umbra-sepia.vercel.app/", { waitUntil: "networkidle0" });
  
  // Scroll down to trigger Framer Motion
  await page.evaluate(() => window.scrollBy(0, 1500));
  await page.waitForTimeout(2000);
  
  const imgInfo = await page.evaluate(() => {
    const img = document.querySelector('img[alt="Image: Casa Penumbra"]');
    if (!img) return null;
    const rect = img.getBoundingClientRect();
    const style = window.getComputedStyle(img);
    return {
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      width: rect.width,
      height: rect.height,
      opacity: style.opacity,
      visibility: style.visibility,
      display: style.display,
      position: style.position
    };
  });
  
  console.log(imgInfo);
  await browser.close();
})();
