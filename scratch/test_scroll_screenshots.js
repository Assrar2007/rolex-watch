const { execSync } = require('child_process');
const fs = require('fs');

const scrollSteps = [
  { name: 'scroll_0_opening', scrollY: 0 },
  { name: 'scroll_1_mid_watch', scrollY: 700 },
  { name: 'scroll_2_story', scrollY: 1400 }
];

for (const step of scrollSteps) {
  let html = fs.readFileSync('watch.html', 'utf8');
  // Add base href
  html = html.replace('<head>', '<head><base href="http://localhost:8080/">');
  const inject = `
  <script>
  window.addEventListener("load", () => {
    setTimeout(() => {
      window.scrollTo(0, ${step.scrollY});
      if (window.ScrollTrigger) ScrollTrigger.update();
    }, 600);
  });
  </script>
  `;
  const modified = html.replace('</body>', inject + '</body>');
  fs.writeFileSync('scratch/scroll_test_runner.html', modified);
  
  const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\${step.name}.png`;
  const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_sc_${step.scrollY}" --window-size=1920,1080 --virtual-time-budget=3000 --screenshot="${outImg}" "http://localhost:8080/scratch/scroll_test_runner.html"`;
  
  console.log(`Taking screenshot for ${step.name} at scrollY=${step.scrollY}...`);
  try {
    execSync(cmd, { shell: 'powershell.exe' });
    console.log(`Saved ${step.name}.png`);
  } catch (e) {
    console.error(`Error on ${step.name}:`, e.message);
  }
}
