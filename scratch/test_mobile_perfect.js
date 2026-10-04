const { execSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('watch.html', 'utf8');
html = html.replace('<head>', '<head><base href="http://localhost:8080/">');

const testCss = `
<style>
@media (max-width: 768px) {
  .datejust-scroll-section,
  .datejust-scroll-section.is-scroll-active {
    height: auto !important;
    min-height: auto !important;
    position: relative !important;
    overflow: visible !important;
    display: block !important;
    background: #3e564f !important;
    padding-bottom: 0 !important;
  }

  .datejust-scroll-section .datejust-sticky-stage {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    height: auto !important;
    min-height: auto !important;
    display: block !important;
    overflow: visible !important;
  }

  /* Full opening viewport on mobile - natural illuminated background from top */
  .datejust-scroll-section .featured-watch-wrapper {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    height: 100vh !important;
    min-height: 700px !important;
    display: block !important;
    overflow: hidden !important;
    background: transparent !important;
  }

  .datejust-scroll-section .datejust-media-stage {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: block !important;
    background: transparent !important;
  }

  .datejust-scroll-section .datejust-master-photo {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center top !important;
    transform: none !important;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 85%, transparent 99%) !important;
    mask-image: linear-gradient(to bottom, #000 0%, #000 85%, transparent 99%) !important;
  }

  /* Elegant, compact header overlay placed in upper silk area */
  .datejust-scroll-section .featured-watch-header-overlay {
    position: absolute !important;
    top: 72px !important;
    left: 0 !important;
    width: 100% !important;
    padding: 0 20px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 8px !important;
    z-index: 10 !important;
    pointer-events: auto !important;
  }

  .datejust-scroll-section .featured-watch-text-group {
    position: static !important;
    transform: none !important;
    width: 100% !important;
    max-width: 320px !important;
  }

  .datejust-scroll-section .featured-eyebrow {
    font-size: 10.5px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 2px !important;
    color: rgba(255, 255, 255, 0.88) !important;
  }

  .datejust-scroll-section .featured-title {
    font-size: 34px !important;
    line-height: 1.1 !important;
    margin: 0 !important;
    color: #ffffff !important;
  }

  .datejust-scroll-section .featured-intro-desc {
    font-size: 13px !important;
    line-height: 1.4 !important;
    margin: 6px auto 0 !important;
    color: rgba(255, 255, 255, 0.92) !important;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45) !important;
  }

  .datejust-scroll-section .featured-configure-btn {
    margin-top: 4px !important;
    padding: 8px 24px !important;
    font-size: 12.5px !important;
    min-height: 38px !important;
  }

  /* Story Overlay on Mobile */
  .datejust-scroll-section .watch-story-overlay {
    position: relative !important;
    bottom: auto !important;
    left: auto !important;
    width: 100% !important;
    padding: 40px 24px 60px !important;
    opacity: 1 !important;
    transform: none !important;
    pointer-events: auto !important;
    background: #3e564f !important;
  }

  .datejust-scroll-section .watch-story-container {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }

  .datejust-scroll-section .watch-story-headline {
    font-size: 26px !important;
    line-height: 1.24 !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
  }

  .datejust-scroll-section .watch-story-lead {
    font-size: 15px !important;
    line-height: 1.5 !important;
  }

  .datejust-scroll-section .watch-story-body {
    font-size: 13.5px !important;
    line-height: 1.6 !important;
  }
}
</style>
`;

html = html.replace('</head>', testCss + '</head>');
fs.writeFileSync('scratch/mobile_perfect_test.html', html);

const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\mobile_perfect_preview.png`;
const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_mp" --window-size=390,844 --virtual-time-budget=2000 --screenshot="${outImg}" "http://localhost:8080/scratch/mobile_perfect_test.html"`;

try {
  execSync(cmd, { shell: 'powershell.exe' });
  console.log('Saved mobile_perfect_preview.png');
} catch (e) {
  console.error('Error:', e.message);
}
