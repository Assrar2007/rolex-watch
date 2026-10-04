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
  }

  .datejust-scroll-section .datejust-sticky-stage {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    display: block !important;
  }

  /* Opening Hero Stage on Mobile */
  .datejust-scroll-section .featured-watch-wrapper {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    height: 100vh !important;
    min-height: 720px !important;
    display: block !important;
    overflow: hidden !important;
  }

  .datejust-scroll-section .datejust-media-stage {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: #3e564f !important;
  }

  .datejust-scroll-section .datejust-master-photo {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center top !important;
    transform: translateY(340px) !important;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 80%, transparent 98%) !important;
    mask-image: linear-gradient(to bottom, #000 0%, #000 80%, transparent 98%) !important;
  }

  /* Header overlay on Mobile */
  .datejust-scroll-section .featured-watch-header-overlay {
    position: absolute !important;
    top: 80px !important;
    left: 0 !important;
    width: 100% !important;
    padding: 0 20px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 10px !important;
    z-index: 10 !important;
    pointer-events: auto !important;
  }

  .datejust-scroll-section .featured-watch-text-group {
    position: static !important;
    transform: none !important;
    width: 100% !important;
    max-width: 340px !important;
  }

  .datejust-scroll-section .featured-eyebrow {
    font-size: 11px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 4px !important;
    color: rgba(255, 255, 255, 0.85) !important;
  }

  .datejust-scroll-section .featured-title {
    font-size: 38px !important;
    line-height: 1.1 !important;
    margin: 0 !important;
    color: #ffffff !important;
  }

  .datejust-scroll-section .featured-intro-desc {
    font-size: 13.5px !important;
    line-height: 1.45 !important;
    margin: 8px auto 0 !important;
    color: rgba(255, 255, 255, 0.92) !important;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4) !important;
  }

  .datejust-scroll-section .featured-configure-btn {
    margin-top: 6px !important;
    padding: 10px 30px !important;
    font-size: 13px !important;
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
fs.writeFileSync('scratch/test_mobile_half.html', html);

const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\test_mobile_half_preview.png`;
const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_mob_hlf" --window-size=390,844 --virtual-time-budget=2500 --screenshot="${outImg}" "http://localhost:8080/scratch/test_mobile_half.html"`;

try {
  execSync(cmd, { shell: 'powershell.exe' });
  console.log('Saved test_mobile_half_preview.png');
} catch (e) {
  console.error('Error:', e.message);
}
