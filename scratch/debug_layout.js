const { execSync } = require('child_process');
const fs = require('fs');

const html = fs.readFileSync('watch.html', 'utf8');
const scriptTag = `
<script>
window.addEventListener("load", () => {
  setTimeout(() => {
    const r = (id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const b = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return { id, top: b.top, left: b.left, width: b.width, height: b.height, bottom: b.bottom, pos: s.position, topS: s.top, disp: s.display, trans: s.transform, overflow: s.overflow };
    };
    const rep = [
      r("navbar"),
      r("watch-hero"),
      r("datejustStickyStage"),
      r("watchHeroWrapper"),
      r("datejustMediaStage"),
      r("watchHeroImg"),
      r("watchHeaderOverlay"),
      r("watchTitleGroup"),
      r("heroConfigureBtn"),
      r("watchStoryOverlay")
    ];
    const div = document.createElement("div");
    div.id = "LAYOUT_DUMP";
    div.textContent = JSON.stringify(rep);
    document.body.appendChild(div);
  }, 600);
});
</script>
`;

const injected = html.replace('</body>', scriptTag + '</body>');
fs.writeFileSync('scratch/watch_debug.html', injected);

try {
  execSync('& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat6" --window-size=1920,1080 --virtual-time-budget=2000 --dump-dom "http://localhost:8080/scratch/watch_debug.html" > scratch/debug_dom.html', { shell: 'powershell.exe' });
  const dom = fs.readFileSync('scratch/debug_dom.html', 'utf8');
  const match = dom.match(/<div id="LAYOUT_DUMP">([\s\S]*?)<\/div>/);
  if (match) {
    console.log('LAYOUT DUMP:\n' + JSON.stringify(JSON.parse(match[1]), null, 2));
  } else {
    console.log('LAYOUT_DUMP not found in DOM');
  }
} catch (e) {
  console.error('Error running Chrome:', e.message);
}
