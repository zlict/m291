const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
let tries = 0;

const getFlagPath = function (canton) {
  return `../template/img/${canton}.png`;
}

const checkTurn = function (event) {
  let tile = event.currentTarget;
  let playground = tile.closest("#playground");
  let revealedTiles = playground.querySelectorAll(".tile.revealed");

  if (revealedTiles.length >= 2) {
    for (let otherTile of revealedTiles) {
      otherTile.classList.remove("revealed");
    }
  }
  else if (revealedTiles.length >= 1) {
    tile.classList.add("revealed");
    for (let otherTile of revealedTiles) {
      if (tile.children[0].src === otherTile.children[0].src) {
        tries++;
        tile.classList.add("found");
        tile.classList.remove("revealed");
        otherTile.classList.add("found");
        otherTile.classList.remove("revealed");
      }
    }
  } else {
    tile.classList.add("revealed");
  }
}

const createFlagElement = function (canton) {
  const tile = document.createElement('div');
  const tileImage = document.createElement('img');
  tileImage.setAttribute('src', getFlagPath(canton));
  tile.appendChild(tileImage);
  tile.className = "tile";
  tile.addEventListener("click", checkTurn)
  return tile;
}

document.addEventListener('DOMContentLoaded', function () {
  const playground = document.getElementById('playground');
  const shuffled = cantons.sort(() => 0.5 - Math.random()).slice(0, 10);

  for (let i = 2; i; i--) {
    for (let canton of shuffled.sort(() => 0.5 - Math.random())) {
      playground.appendChild(createFlagElement(canton));
    };
  }
});
