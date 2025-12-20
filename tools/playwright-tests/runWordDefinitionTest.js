import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Capture console messages
  page.on('console', msg => console.log('[PAGE]', msg.type(), msg.text()));

  // Capture responses for word-definitions function
  const responses = [];
  page.on('response', async (res) => {
    try {
      const url = res.url();
      if (url.includes('word-definitions')) {
        const text = await res.text();
        console.log('[WORD-FUNC RESPONSE]', url, text.substring(0, 200));
        responses.push({ url, text });
      }
    } catch (e) {
      console.warn('Response read failed', e);
    }
  });

  const base = 'http://localhost:8080/library/precision-swap/en-1';
  console.log('Navigating to', base);
  await page.goto(base, { waitUntil: 'networkidle' });

  // Wait for options to render
  await page.waitForSelector('text=serious');
  console.log('Clicking word: serious');
  await page.click('text=serious');

  // Wait for modal to appear
  await page.waitForSelector('text=Dictionary Definition');

  // Simpler: find first <p> under Meaning section
  const defEl = await page.$('//section//*[contains(text(),"Meaning")]/following::p[1]');
  const defText = defEl ? (await defEl.textContent())?.trim() : null;

  const exEl = await page.$('//section//*[contains(text(),"Example")]/following::p[1]');
  const exText = exEl ? (await exEl.textContent())?.trim() : null;

  console.log('Definition text:', defText);
  console.log('Example text:', exText);
  console.log('Captured function responses count:', responses.length);

  await browser.close();

  // Simple exit code semantics
  if ((defText && defText.length > 0 && !defText.includes('Definition not available')) || (exText && exText.length > 0 && !exText.includes('No example available'))) {
    console.log('SUCCESS: definition or example present');
    process.exit(0);
  } else {
    console.error('FAIL: no useful definition or example found');
    process.exit(2);
  }
}

run();