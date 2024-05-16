const { getData } = require("../appModules/api/api-utils");
const { endpoints } = require("../appModules/api/api-utils");
const staticFile = require("../appModules/http-utils/static-file");
const { makeRatingFile } = require("../appModules/rating");
const { config } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
const data = await getData();
    console.log(data)
    await makeRatingFile(config.PATH_TO_RATING_FILE, data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;

