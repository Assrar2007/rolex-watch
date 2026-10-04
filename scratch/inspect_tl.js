const { execSync } = require('child_process');
const fs = require('fs');

const html = fs.readFileSync('watch.html', 'utf8');
const testScript = `
<script>
window.addEventListener("load", () => {
  const heroSection = document.getElementById("watch-hero");
  const heroImg = document.getElementById("watchHeroImg");
  const headerOverlay = document.getElementById("watchHeaderOverlay");
  const titleGroup = document.getElementById("watchTitleGroup");
  const storyOverlay = document.getElementById("watchStoryOverlay");
  
  const triggers = ScrollTrigger.getAll();
  console.log("Triggers:", triggers.length);
  if (triggers.length > 0) {
    const tl = triggers[0].animation;
    console.log("TL children:", tl.getChildren().length);
    tl.getChildren().forEach((c, i) => {
      console.log("Child " + i + ": target=" + (c.targets ? c.targets().map(t=>t.id||t.className).join(",") : "none") + " vars=" + JSON.stringify(c.vars));
    });
  }
});
</script>
`;

fs.writeFileSync('scratch/inspect_tl.html', html.replace('<head>', '<head><base href="http://localhost:8080/">').replace('</body>', testScript + '</body>'));

try {
  const out = execSync('& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_tl_inspect" --window-size=1920,1080 --virtual-time-budget=2000 --enable-logging=stderr "http://localhost:8080/scratch/inspect_tl.html"', { shell: 'powershell.exe', encoding: 'utf8' });
  console.log('OUTPUT:', out);
} catch (e) {
  console.error(e.message);
}
