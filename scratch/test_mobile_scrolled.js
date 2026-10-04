const { execSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('scratch/test_mobile_half.html', 'utf8');

const scrollScript = `
<script>
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 650);
  }, 400);
});
</script>
`;

html = html.replace('</body>', scrollScript + '</body>');
fs.writeFileSync('scratch/test_mobile_scrolled.html', html);

const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\test_mobile_scrolled_preview.png`;
const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_mob_scrl" --window-size=390,844 --virtual-time-budget=2500 --screenshot="${outImg}" "http://localhost:8080/scratch/test_mobile_scrolled.html"`;

try {
  execSync(cmd, { shell: 'powershell.exe' });
  console.log('Saved test_mobile_scrolled_preview.png');
} catch (e) {
  console.error('Error:', e.message);
}
