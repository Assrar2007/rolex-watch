const fs = require('fs');
const { execSync } = require('child_process');

const html = fs.readFileSync('watch.html', 'utf8');
const inject = `
<script>
window.addEventListener('load', () => {
  setTimeout(() => {
    const st = ScrollTrigger.getAll()[0];
    const tl = st.animation;
    tl.progress(0.95);
    const heroImg = document.getElementById('watchHeroImg');
    const titleGroup = document.getElementById('watchTitleGroup');
    const storyOverlay = document.getElementById('watchStoryOverlay');
    const rep = {
      tlDuration: tl.totalDuration(),
      tlProgress: tl.progress(),
      heroImgTransform: heroImg.style.transform,
      heroImgRect: heroImg.getBoundingClientRect(),
      titleGroupOpacity: titleGroup.style.opacity,
      titleGroupTransform: titleGroup.style.transform,
      storyOpacity: storyOverlay.style.opacity,
      storyTransform: storyOverlay.style.transform
    };
    const div = document.createElement('div');
    div.id = 'TL_DUMP';
    div.textContent = JSON.stringify(rep);
    document.body.appendChild(div);
  }, 600);
});
</script>
`;

fs.writeFileSync('scratch/tl_test.html', html.replace('<head>', '<head><base href="http://localhost:8080/">').replace('</body>', inject + '</body>'));

try {
  execSync('& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_tl" --window-size=1920,1080 --virtual-time-budget=3000 --dump-dom "http://localhost:8080/scratch/tl_test.html" > scratch/tl_dom.html', { shell: 'powershell.exe' });
  const dom = fs.readFileSync('scratch/tl_dom.html', 'utf8');
  const m = dom.match(/<div id="TL_DUMP">([\s\S]*?)<\/div>/);
  if (m) console.log('DUMP:', m[1]);
  else console.log('Not found');
} catch (e) {
  console.error(e.message);
}
