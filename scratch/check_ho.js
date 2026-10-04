const fs = require('fs');
const { execSync } = require('child_process');

const html = fs.readFileSync('watch.html', 'utf8');
const testScript = `
<script>
window.addEventListener("load", () => {
  const st = ScrollTrigger.getAll()[0];
  const tl = st.animation;
  st.disable(false);
  tl.progress(0.95);
  const ho = document.getElementById("watchHeaderOverlay");
  const tg = document.getElementById("watchTitleGroup");
  const so = document.getElementById("watchStoryOverlay");
  const img = document.getElementById("watchHeroImg");
  console.log("CHECK_STYLES: " + JSON.stringify({
    ho_opacity: ho ? ho.style.opacity : null,
    ho_computed_opacity: ho ? getComputedStyle(ho).opacity : null,
    ho_transform: ho ? ho.style.transform : null,
    tg_opacity: tg ? tg.style.opacity : null,
    tg_computed_opacity: tg ? getComputedStyle(tg).opacity : null,
    so_opacity: so ? so.style.opacity : null,
    so_computed_opacity: so ? getComputedStyle(so).opacity : null,
    img_transform: img ? img.style.transform : null
  }));
});
</script>
`;

fs.writeFileSync('scratch/check_ho.html', html.replace('<head>', '<head><base href="http://localhost:8080/">').replace('</body>', testScript + '</body>'));

try {
  const out = execSync('& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_chk_ho" --window-size=1920,1080 --virtual-time-budget=2000 --enable-logging=stderr "http://localhost:8080/scratch/check_ho.html"', { shell: 'powershell.exe', encoding: 'utf8' });
  const m = out.match(/CHECK_STYLES: (\{.*?\})/);
  if (m) console.log('RESULT:', JSON.parse(m[1]));
  else console.log('Raw output:', out);
} catch (e) {
  console.error(e.message);
}
