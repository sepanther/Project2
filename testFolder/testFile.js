var axios = require("axios");
//There is a 10,000 requestd limit per day.
var apiKeys = "/?key=b48693d9c98a688dde0d9e09f573f5a3";
// This api calls returns all styles of beer there is a total of 175 "styles" of beer but alot of it are duplicats(E.g American Lager, American Lager Lite(low calorie)).
// Documetations https://www.brewerydb.com/developers/docs.
var queryApi = "https://sandbox-api.brewerydb.com/v2/styles";

axios({
  method: "GET",
  url: queryApi + apiKeys,
  responseType: "json"
}).then(function(response) {
  console.log(response);
});
