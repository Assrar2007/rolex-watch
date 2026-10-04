const { execSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('scratch/test_mobile_half.html', 'utf8');

const debugScript = `
<script>
window.addEventListener("load", () => {
  setTimeout(() => {
    const hero = document.getElementById("watch-hero");
    const wrapper = document.getElementById("watchHeroWrapper");
    const story = document.getElementById("watchStoryOverlay");
    const specs = document.getElementById("specs");
    console.log("DEBUG_HEIGHTS:", JSON.stringify({
      bodyScrollHeight: document.body.scrollHeight,
      heroRect: hero ? hero.getBoundingClientRect() : null,
      wrapperRect: wrapper ? wrapper.getBoundingClientRect() : null,
      storyRect: story ? story.getBoundingClientRect() : null,
      specsRect: specs ? specs.getBoundingClientRect() : null
    }));
  }, 400);
});
</script>
`;

html = html.replace('</body>', debugScript + '</body>');
fs.writeFileSync('scratch/debug_mobile_heights.html', html);

const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_mob_dbg" --window-size=390,844 --virtual-time-budget=2000 "http://localhost:8080/scratch/debug_mobile_heights.html"`;

try {
  const out = execSync(cmd, { shell: 'powershell.exe' }).toString();
  console.log('Output:', out);
} catch (e) {
  console.error('Error:', e.message);
}
