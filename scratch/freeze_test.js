const { execSync } = require('child_process');
const fs = require('fs');

const testCases = [
  { name: 'freeze_00_opening', progress: 0.0 },
  { name: 'freeze_45_center', progress: 0.45 },
  { name: 'freeze_95_story', progress: 0.95 }
];

for (const tc of testCases) {
  let html = fs.readFileSync('watch.html', 'utf8');
  html = html.replace('<head>', '<head><base href="http://localhost:8080/">');
  
  const inject = `
  <script>
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (window.ScrollTrigger) {
        const triggers = ScrollTrigger.getAll();
        if (triggers.length > 0) {
          const st = triggers[0];
          const tl = st.animation;
          st.disable(false); // disable scroll listener so it doesn't reset
          tl.progress(${tc.progress}); // freeze at exact progress
        }
      }
    }, 400);
  });
  </script>
  `;
  
  fs.writeFileSync(`scratch/freeze_test_${tc.name}.html`, html.replace('</body>', inject + '</body>'));
  
  const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\${tc.name}.png`;
  const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_frz_${tc.name}" --window-size=1920,1080 --virtual-time-budget=2000 --screenshot="${outImg}" "http://localhost:8080/scratch/freeze_test_${tc.name}.html"`;
  
  console.log(`Running ${tc.name}...`);
  try {
    execSync(cmd, { shell: 'powershell.exe' });
    console.log(`Saved ${tc.name}.png`);
  } catch (e) {
    console.error(`Error on ${tc.name}:`, e.message);
  }
}
