const { execSync } = require('child_process');
const fs = require('fs');

// Desktop tests
const testCases = [
  { name: 'verify_desktop_opening', progress: 0.0, w: 1920, h: 1080 },
  { name: 'verify_desktop_center', progress: 0.45, w: 1920, h: 1080 },
  { name: 'verify_desktop_story', progress: 0.95, w: 1920, h: 1080 },
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
          st.disable(false);
          tl.progress(${tc.progress});
        }
      }
    }, 400);
  });
  </script>
  `;
  
  fs.writeFileSync(`scratch/${tc.name}.html`, html.replace('</body>', inject + '</body>'));
  
  const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\${tc.name}.png`;
  const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_${tc.name}" --window-size=${tc.w},${tc.h} --virtual-time-budget=2000 --screenshot="${outImg}" "http://localhost:8080/scratch/${tc.name}.html"`;
  
  try {
    execSync(cmd, { shell: 'powershell.exe' });
    console.log(`Saved ${tc.name}.png`);
  } catch (e) {
    console.error(`Error on ${tc.name}:`, e.message);
  }
}

// Mobile test (clean watch.html)
const outImgMobile = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\verify_mobile_opening.png`;
const cmdMobile = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_ver_mob" --window-size=390,844 --virtual-time-budget=2000 --screenshot="${outImgMobile}" "http://localhost:8080/watch.html?product=datejust"`;
try {
  execSync(cmdMobile, { shell: 'powershell.exe' });
  console.log('Saved verify_mobile_opening.png');
} catch (e) {
  console.error('Error on mobile:', e.message);
}
