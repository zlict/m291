const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];

const getFlagPath = function (canton) {
  return `../template/img/${canton}.png`;
}


document.addEventListener('DOMContentLoaded', function () {
  const playground = document.getElementById('playground');
  cantons.forEach(function (value) {
    const tile = document.createElement('div');
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', getFlagPath(value));
    tile.appendChild(tileImage);
    playground.appendChild(tile);
  });
});
