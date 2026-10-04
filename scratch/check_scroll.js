const { execSync } = require('child_process');
const fs = require('fs');

const html = fs.readFileSync('watch.html', 'utf8');
const testScript = `
<script>
window.addEventListener("load", () => {
  window.scrollTo(0, 800);
  setTimeout(() => {
    const el = document.getElementById("datejustStickyStage");
    const hero = document.getElementById("watch-hero");
    const rect = el.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    console.log("SCROLL_TEST:", JSON.stringify({
      scrollY: window.scrollY,
      heroTop: heroRect.top,
      stickyTop: rect.top,
      stickyHeight: rect.height
    }));
  }, 300);
});
</script>
`;

fs.writeFileSync('scratch/scroll_check.html', html.replace('<head>', '<head><base href="http://localhost:8080/">').replace('</body>', testScript + '</body>'));

try {
  const out = execSync('& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_sc_chk" --window-size=1920,1080 --virtual-time-budget=2000 --enable-logging=stderr "http://localhost:8080/scratch/scroll_check.html"', { shell: 'powershell.exe', encoding: 'utf8' });
  console.log('OUTPUT:', out);
} catch (e) {
  console.error(e.message);
}
