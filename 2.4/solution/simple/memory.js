// wait for document to be loaded
document.addEventListener('DOMContentLoaded', () => {
  let tries = 0;
  const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];

  // get the "live" board and tile HTML Elements
  const board = document.getElementById("board")
  const tiles = board.getElementsByClassName("tile")
  const revealedTiles = board.getElementsByClassName("tile revealed")

  // function to check if game is over
  const checkWin = () => {
    if (Array.from(tiles).every(tile => tile.classList.contains("found"))) {
      alert(`You won in ${tries} turns!`)
      tries = 0
    }
  }

  // function to process a turn
  const checkTurn = (event) => {
    // the tile that was clicked on and fired the event
    let tile = event.currentTarget;

    // are there already 2 tiles revealed?
    if (revealedTiles.length >= 2) {

      // clear the board of revealed tiles before continuing
      Array.from(revealedTiles).forEach(otherTile => otherTile.classList.remove("revealed"));
    }

    // check if any of the revealed tiles matches the current tile
    Array.from(revealedTiles).forEach(otherTile => {
      if (tile != otherTile && tile.children[0].src === otherTile.children[0].src) {

        // count both as found
        tile.classList.add("found");
        otherTile.classList.add("found");
      }
    });

    // reveal the current tile, count tries up
    tile.classList.add("revealed");
    tries++;

    checkWin()
  }

  // function to create a single tile
  const createTile = (canton) => {
    // create image element to display the flag
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', `../../template/img/${canton}.png`);

    // create button element and add image, css class and click-handler
    const tile = document.createElement('button');
    tile.append(tileImage);
    tile.className = "tile";
    tile.onclick = checkTurn;

    return tile;
  }

  // function to initialize the board
  const initializeBoard = () => {
    // reset the board
    board.innerHTML = ""

    // shuffle cantons and take 10
    const shuffled = cantons.sort(() => 0.5 - Math.random()).slice(0, 10);

    // fill the board the cantons, two times
    for (let i = 2; i; i--) {
      for (let canton of shuffled.sort(() => 0.5 - Math.random())) {
        board.append(createTile(canton));
      };
    }
  }

  initializeBoard()
});
