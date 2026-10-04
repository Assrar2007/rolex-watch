const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<body>
<canvas id="c"></canvas>
<script>
const img = new Image();
img.onload = () => {
  const c = document.getElementById("c");
  c.width = img.width; 
  c.height = img.height;
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const p = (x, y) => {
    const d = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
    const hex = ((1 << 24) + (d[0] << 16) + (d[1] << 8) + d[2]).toString(16).slice(1);
    return 'rgb(' + d[0] + ',' + d[1] + ',' + d[2] + ') #' + hex;
  };
  const results = {
    top_left: p(10, 10),
    top_mid: p(img.width / 2, 10),
    top_right: p(img.width - 10, 10),
    bot_left: p(10, img.height - 10),
    bot_mid: p(img.width / 2, img.height - 10),
    bot_right: p(img.width - 10, img.height - 10),
    mid_left: p(10, img.height / 2),
    mid_right: p(img.width - 10, img.height / 2),
    above_watch: p(img.width / 2, 150),
    below_watch: p(img.width / 2, img.height - 80)
  };
  console.log('IMAGE_COLOR_DATA:' + JSON.stringify(results));
  document.title = 'IMAGE_COLOR_DATA:' + JSON.stringify(results);
};
img.src = '/assets/images/hero4.png';
</script>
</body>
</html>`;

fs.writeFileSync('scratch/test_colors.html', html);
console.log('Created scratch/test_colors.html');
