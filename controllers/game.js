// const fs = require("fs");
// const { getRandomGame } = require("../appModules/api");

// function gameRouteController(res) {
//     fs.readFile("./dataset/rating.json", (err, ratingFile) => {
//         if (err) {
//             res.statusCode = 500;
//             res.end("Internal Server Error");
//         }
//         const data = JSON.parse(ratingFile);
//         const game = getRandomGame(data);
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(game));
//     });
// }
// module.exports = gameRouteController;

const { getRandomGame } = require("../appModules/api/api-utils");
const config = require("../appModules/rating/config")
const fs = require("fs").promises;

async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE);
    const data = JSON.parse(ratingFile);
    const game = getRandomGame(data); // Получаем случайную игру
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (error) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

  module.exports = gameRouteController;