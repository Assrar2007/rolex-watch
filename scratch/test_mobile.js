const { execSync } = require('child_process');
const fs = require('fs');

let html = fs.readFileSync('watch.html', 'utf8');
html = html.replace('<head>', '<head><base href="http://localhost:8080/">');

const testCss = `
<style>
@media (max-width: 768px) {
  .datejust-scroll-section .featured-watch-header-overlay {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    padding: 85px 24px 20px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 16px !important;
    z-index: 5 !important;
    pointer-events: auto !important;
  }

  .datejust-scroll-section .featured-watch-text-group {
    position: static !important;
    transform: none !important;
    width: 100% !important;
  }

  .datejust-scroll-section .featured-intro-desc {
    font-size: 14px !important;
    line-height: 1.5 !important;
    margin: 8px auto 0 !important;
    color: rgba(255, 255, 255, 0.92) !important;
  }

  .datejust-scroll-section .datejust-media-stage,
  .datejust-scroll-section .featured-watch-wrapper {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    width: 100% !important;
    height: 52vh !important;
    min-height: 320px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .datejust-scroll-section .datejust-master-photo {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    object-position: center top !important;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%) !important;
    mask-image: linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%) !important;
  }

  .datejust-scroll-section .watch-story-overlay {
    position: relative !important;
    bottom: auto !important;
    left: auto !important;
    width: 100% !important;
    padding: 30px 24px !important;
    opacity: 1 !important;
    transform: none !important;
    pointer-events: auto !important;
  }

  .datejust-scroll-section .watch-story-headline {
    font-size: 24px !important;
    line-height: 1.25 !important;
    word-break: normal !important;
    overflow-wrap: break-word !important;
  }
}
</style>
`;

html = html.replace('</head>', testCss + '</head>');
fs.writeFileSync('scratch/test_mobile.html', html);

const outImg = `C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\test_mobile_preview.png`;
const cmd = `& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_mob2" --window-size=390,844 --virtual-time-budget=2500 --screenshot="${outImg}" "http://localhost:8080/scratch/test_mobile.html"`;

try {
  execSync(cmd, { shell: 'powershell.exe' });
  console.log('Saved test_mobile_preview.png');
} catch (e) {
  console.error('Error:', e.message);
}
