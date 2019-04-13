const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];
let tries = 0;

const getFlagPath = function (canton) {
  return `../template/img/${canton}.png`;
}

const playerWon = function (playground) {
  return playground.querySelectorAll(".tile").length == playground.querySelectorAll(".tile.found").length
}

const checkTurn = function (event) {
  let tile = event.currentTarget;
  let playground = tile.closest("#playground");
  let revealedTiles = Array.from(playground.querySelectorAll(".tile.revealed"));

  tile.classList.add("revealed");

  if (revealedTiles.length >= 2) {
    revealedTiles.forEach(otherTile => otherTile.classList.remove("revealed"));
  }

  if (revealedTiles.length == 1) {
    tries++;
    revealedTiles.forEach(otherTile => {
      if (tile != otherTile && tile.children[0].src === otherTile.children[0].src) {
        tile.classList.add("found");
        otherTile.classList.add("found");
      }
    });

    if (playerWon(playground)) {
      playground.classList.add("won");
    }
  }

}

const createFlagElement = function (canton) {
  const tile = document.createElement('button');
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
