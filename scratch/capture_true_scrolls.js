const { execSync } = require('child_process');
const fs = require('fs');

const testScrolls = [
  { name: 'real_scroll_0_opening', y: 0 },
  { name: 'real_scroll_700_center', y: 700 },
  { name: 'real_scroll_1400_story', y: 1400 }
];

for (const s of testScrolls) {
  let html = fs.readFileSync('watch.html', 'utf8');
  html = html.replace('<head>', '<head><base href="http://localhost:8080/">');
  
  // Inject scroll immediately after ScrollTrigger init
  const inject = `
  <script>
  window.addEventListener("DOMContentLoaded", () => {
    // Scroll after ScrollTrigger sets up
    setTimeout(() => {
      window.scrollTo(0, ${s.y});
      ScrollTrigger.update();
      ScrollTrigger.refresh();
    }, 100);
  });
  </script>
  `;
  
  const modified = html.replace('</body>', inject + '</body>');
  fs.writeFileSync(`scratch/test_${s.name}.html`, modified);
  
  const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\${s.name}.png`;
  const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_${s.name}" --window-size=1920,1080 --virtual-time-budget=3000 --screenshot="${outImg}" "http://localhost:8080/scratch/test_${s.name}.html"`;
  
  console.log(`Running ${s.name}...`);
  try {
    execSync(cmd, { shell: 'powershell.exe' });
    console.log(`Saved ${s.name}.png`);
  } catch (e) {
    console.error(`Error on ${s.name}:`, e.message);
  }
}
