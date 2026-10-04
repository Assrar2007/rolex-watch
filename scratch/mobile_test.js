const { execSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('watch.html', 'utf8');
html = html.replace('<head>', '<head><base href="http://localhost:8080/">');

fs.writeFileSync('scratch/mobile_test_page.html', html);

const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\mobile_preview.png`;
const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_mobile" --window-size=390,844 --virtual-time-budget=2500 --screenshot="${outImg}" "http://localhost:8080/scratch/mobile_test_page.html"`;

console.log('Capturing mobile screenshot...');
try {
  execSync(cmd, { shell: 'powershell.exe' });
  console.log('Saved mobile_preview.png');
} catch (e) {
  console.error('Error on mobile screenshot:', e.message);
}
