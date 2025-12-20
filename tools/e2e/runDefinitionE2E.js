import { chromium } from 'playwright';

(async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('request', (req) => {
    console.log('REQUEST:', req.method(), req.url());
  });
  page.on('response', async (res) => {
    try {
      const url = res.url();
      if (url.includes('word-definitions')) {
        console.log('RESPONSE:', url, res.status());
        const text = await res.text();
        console.log('RESPONSE BODY SNIPPET:', text.slice(0, 400));
      }
    } catch (e) {
      console.error('Response read error', e);
    }
  });

  await page.goto('http://localhost:8080/library', { waitUntil: 'networkidle' });
  await page.waitForSelector('text=Precision Swap');
  await page.click('text=Precision Swap');

  await page.waitForSelector('article div p.text-base');
  await page.click('article div p.text-base');

  await page.waitForSelector('.text-xl.font-bold');
  const option = await page.$('.text-xl.font-bold');
  const wordText = await option?.innerText();
  console.log('Clicking word:', wordText);
  await option?.click();

  await page.waitForSelector('[role="dialog"]');
  await page.waitForTimeout(1000);

  const dialogText = await page.textContent('[role="dialog"]');
  console.log('Dialog text snippet:', dialogText && dialogText.slice(0, 400));

  await browser.close();
})().catch((e) => {
  console.error('E2E failed:', e);
  process.exit(1);
});
