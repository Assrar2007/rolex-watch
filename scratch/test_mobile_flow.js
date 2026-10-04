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
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
  }

  /* Header overlay at top in natural flow */
  .datejust-scroll-section .featured-watch-header-overlay {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    padding: 85px 24px 16px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 12px !important;
    order: 1 !important;
    z-index: 5 !important;
    pointer-events: auto !important;
  }

  .datejust-scroll-section .featured-watch-text-group {
    position: static !important;
    transform: none !important;
    width: 100% !important;
  }

  .datejust-scroll-section .featured-eyebrow {
    font-size: 11px !important;
    letter-spacing: 2.5px !important;
    margin-bottom: 4px !important;
    color: rgba(255, 255, 255, 0.85) !important;
  }

  .datejust-scroll-section .featured-title {
    font-size: 34px !important;
    line-height: 1.1 !important;
    margin: 0 !important;
    color: #ffffff !important;
  }

  .datejust-scroll-section .featured-intro-desc {
    font-size: 13.5px !important;
    line-height: 1.5 !important;
    margin: 8px auto 0 !important;
    color: rgba(255, 255, 255, 0.9) !important;
    max-width: 320px !important;
  }

  .datejust-scroll-section .featured-configure-btn {
    margin-top: 4px !important;
    padding: 10px 28px !important;
    font-size: 13px !important;
  }

  /* Image stage in order: 2 */
  .datejust-scroll-section .featured-watch-wrapper {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    height: 58vh !important;
    min-height: 380px !important;
    order: 2 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    overflow: hidden !important;
  }

  .datejust-scroll-section .datejust-media-stage {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    background: transparent !important;
  }

  .datejust-scroll-section .datejust-master-photo {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    object-position: center center !important;
    transform: none !important;
    -webkit-mask-image: none !important;
    mask-image: none !important;
  }

  /* Story overlay in order: 3 */
  .datejust-scroll-section .watch-story-overlay {
    position: relative !important;
    bottom: auto !important;
    left: auto !important;
    width: 100% !important;
    order: 3 !important;
    padding: 36px 24px 40px !important;
    opacity: 1 !important;
    transform: none !important;
    pointer-events: auto !important;
  }

  .datejust-scroll-section .watch-story-container {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }

  .datejust-scroll-section .watch-story-headline {
    font-size: 26px !important;
    line-height: 1.25 !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
  }
}
</style>
`;

html = html.replace('</head>', testCss + '</head>');
fs.writeFileSync('scratch/test_mobile_flow.html', html);

const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\test_mobile_flow_preview.png`;
const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_mob_flw" --window-size=390,844 --virtual-time-budget=2500 --screenshot="${outImg}" "http://localhost:8080/scratch/test_mobile_flow.html"`;

try {
  execSync(cmd, { shell: 'powershell.exe' });
  console.log('Saved test_mobile_flow_preview.png');
} catch (e) {
  console.error('Error:', e.message);
}
