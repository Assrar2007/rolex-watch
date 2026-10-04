const fs = require('fs');

const script = `
<!DOCTYPE html>
<html>
<body>
<script>
window.addEventListener('load', () => {
  setTimeout(() => {
    const getInfo = (id) => {
      const el = document.getElementById(id);
      if (!el) return { error: 'not found: ' + id };
      const r = el.getBoundingClientRect();
      const s = window.getComputedStyle(el);
      return {
        id,
        rect: { top: r.top, left: r.left, width: r.width, height: r.height, bottom: r.bottom },
        display: s.display,
        position: s.position,
        transform: s.transform,
        zIndex: s.zIndex,
        marginTop: s.marginTop,
        paddingTop: s.paddingTop,
        background: s.background
      };
    };
    const report = {
      hero: getInfo('watch-hero'),
      stickyStage: getInfo('datejustStickyStage'),
      wrapper: getInfo('watchHeroWrapper'),
      mediaStage: getInfo('datejustMediaStage'),
      heroImg: getInfo('watchHeroImg'),
      headerOverlay: getInfo('watchHeaderOverlay'),
      titleGroup: getInfo('watchTitleGroup'),
      introDesc: getInfo('watchIntroDesc'),
      configureBtn: getInfo('heroConfigureBtn'),
      storyOverlay: getInfo('watchStoryOverlay')
    };
    const pre = document.createElement('pre');
    pre.id = 'domReport';
    pre.textContent = JSON.stringify(report, null, 2);
    document.body.appendChild(pre);
  }, 1000);
});
</script>
</body>
</html>
`;
fs.writeFileSync('scratch/inspect_injector.js', script);
console.log('Script written');
