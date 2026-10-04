const fs = require('fs');
const { execSync } = require('child_process');

const html = fs.readFileSync('watch.html', 'utf8');
const testScript = `
<script>
window.addEventListener("load", () => {
  const getRules = (el) => {
    const sheets = document.styleSheets;
    const rules = [];
    for (const sheet of sheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText && el.matches(rule.selectorText)) {
            rules.push({ selector: rule.selectorText, opacity: rule.style.opacity, cssText: rule.cssText });
          }
        }
      } catch(e) {}
    }
    return rules;
  };
  const ho = document.getElementById("watchHeaderOverlay");
  const so = document.getElementById("watchStoryOverlay");
  console.log("HO_RULES: " + JSON.stringify(getRules(ho)));
  console.log("SO_RULES: " + JSON.stringify(getRules(so)));
});
</script>
`;

fs.writeFileSync('scratch/rules_test.html', html.replace('<head>', '<head><base href="http://localhost:8080/">').replace('</body>', testScript + '</body>'));

try {
  const out = execSync('& "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --headless --disable-gpu --user-data-dir="C:\\Users\\tufga\\.gemini\\antigravity-ide\\brain\\09c8fbd9-63b9-4024-b41f-bcc914407c80\\scratch\\cdat_rules" --window-size=1920,1080 --virtual-time-budget=2000 --enable-logging=stderr "http://localhost:8080/scratch/rules_test.html"', { shell: 'powershell.exe', encoding: 'utf8' });
  const m1 = out.match(/HO_RULES: (\[.*?\])/);
  const m2 = out.match(/SO_RULES: (\[.*?\])/);
  if (m1) console.log('HO RULES:', JSON.parse(m1[1]));
  if (m2) console.log('SO RULES:', JSON.parse(m2[1]));
} catch (e) {
  console.error(e.message);
}
