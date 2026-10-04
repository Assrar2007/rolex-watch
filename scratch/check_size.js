const { execSync } = require('child_process');
const fs = require('fs');

const html = fs.readFileSync('watch.html', 'utf8');
const inject = '<script>const el = document.getElementById("watchHeroImg"); const div = document.createElement("div"); div.id = "SIZE_DUMP"; div.textContent = JSON.stringify({ computedHeight: getComputedStyle(el).height, computedWidth: getComputedStyle(el).width, transform: el.style.transform }); document.body.appendChild(div);</script>';

fs.writeFileSync('scratch/size_test.html', html.replace('<head>', '<head><base href="http://localhost:8080/">').replace('</body>', inject + '</body>'));

try {
  execSync('& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_sz" --window-size=1920,1080 --dump-dom "http://localhost:8080/scratch/size_test.html" > scratch/size_dom.html', { shell: 'powershell.exe' });
  const dom = fs.readFileSync('scratch/size_dom.html', 'utf8');
  const m = dom.match(/<div id="SIZE_DUMP">([\s\S]*?)<\/div>/);
  if (m) console.log('SIZE DUMP:', m[1]);
  else console.log('Not found');
} catch (e) {
  console.error(e.message);
}
