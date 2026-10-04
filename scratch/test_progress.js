const { execSync } = require('child_process');
const fs = require('fs');

const steps = [
  { name: 'prog_00_opening', p: 0.0 },
  { name: 'prog_45_center', p: 0.45 },
  { name: 'prog_95_story', p: 0.95 }
];

for (const step of steps) {
  let html = fs.readFileSync('watch.html', 'utf8');
  html = html.replace('<head>', '<head><base href="http://localhost:8080/">');
  const inject = `
  <script>
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (window.ScrollTrigger) {
        const triggers = ScrollTrigger.getAll();
        console.log("Found triggers:", triggers.length);
        if (triggers.length > 0) {
          const st = triggers[0];
          if (st.animation) {
            st.animation.progress(${step.p});
          }
        }
      }
    }, 600);
  });
  </script>
  `;
  const modified = html.replace('</body>', inject + '</body>');
  fs.writeFileSync('scratch/prog_test_runner.html', modified);
  
  const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\${step.name}.png`;
  const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_p_${step.name}" --window-size=1920,1080 --virtual-time-budget=3000 --screenshot="${outImg}" "http://localhost:8080/scratch/prog_test_runner.html"`;
  
  console.log(`Taking screenshot for ${step.name} at progress=${step.p}...`);
  try {
    execSync(cmd, { shell: 'powershell.exe' });
    console.log(`Saved ${step.name}.png`);
  } catch (e) {
    console.error(`Error on ${step.name}:`, e.message);
  }
}
