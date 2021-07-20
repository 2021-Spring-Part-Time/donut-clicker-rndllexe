// forgot to save the html content along with this, was going to use my first iteration as a branch; this is the refactored js from a course i walked through.

// let score = 0;
// let donutClick = 1;
// let turboDonutClick = 2;

// let cursorCost = 25;
// let cursors = 0;
// let glazedCost = 100;
// let glazed = 0;
// let sprinkleCost = 1000;
// let sprinkles = 0;

// let buyCursor = () => {
//   if (score >= cursorCost) {
//     score = score - cursorCost;
//     cursors = cursors + 1;
//     cursorCost = Math.round(cursorCost * 1.15);

//     document.getElementById("score").innerHTML = score;
//     document.getElementById("cursorcost").innerHTML = cursorCost;
//     document.getElementById("cursors").innerHTML = cursors;
//     updateScorePerSecond();
//   }
// }

// let buyGlazed = () => {
//   if (score >= glazedCost) {
//     score = score - glazedCost;
//     glazed = glazed + 1;
//     glazedCost = Math.round(glazedCost * 1.15);

//     document.getElementById("score").innerHTML = score;
//     document.getElementById("glazedcost").innerHTML = glazedCost;
//     document.getElementById("glazed").innerHTML = glazed;
//     updateScorePerSecond();
//   }
// }

// let buySprinkle = () => {
//   if (score >= sprinkleCost) {
//     score = score - sprinkleCost;
//     sprinkles = sprinkles + 1;
//     sprinkleCost = Math.round(sprinkleCost * 1.15);

//     document.getElementById("score").innerHTML = score;
//     document.getElementById("sprinklecost").innerHTML = sprinkleCost;
//     document.getElementById("sprinkles").innerHTML = sprinkles;
//     updateScorePerSecond();
//   }
// }

// let addToScore = amount => {
//   score = score + amount;
//   document.getElementById("score").innerHTML = score;
// }

// let updateScorePerSecond = () => {
//   scorePerSecond = cursors + glazed * 3 + sprinkles * 5;
//   document.getElementById("scorepersecond").innerHTML = scorePerSecond;
// }

// const loadGame = () => {
//   var savedGame = JSON.parse(localStorage.getItem("gameSave"));
//   if (typeof savedGame.score !== "undefined") score = savedGame.score;
//   if (typeof savedGame.donutClick !== "undefined") donutClick = savedGame.donutClick;
//   if (typeof savedGame.cursorCost !== "undefined") cursorCost = savedGame.cursorCost;
//   if (typeof savedGame.cursors !== "undefined") cursors = savedGame.cursors;
//   if (typeof savedGame.glazedCost !== "undefined") glazedCost = savedGame.glazedCost;
//   if (typeof savedGame.glazed !== "undefined") glazed = savedGame.glazed;
//   if (typeof savedGame.sprinkleCost !== "undefined") sprinkleCost = savedGame.sprinkleCost;
//   if (typeof savedGame.sprinkles !== "undefined") sprinkles = savedGame.sprinkles;
// }

// const saveGame = () => {
//   var gameSave = {
//     score: score,
//     donutClick: donutClick,
//     cursorCost: cursorCost,
//     cursors: cursors,
//     glazedCost: glazedCost,
//     glazed: glazed,
//     sprinkleCost: sprinkleCost,
//     sprinkles: sprinkles
//   };
//   localStorage.setItem("gameSave", JSON.stringify(gameSave));
// }

// const resetGame = () => {
//     if (confirm("Are you sure you want to reset your game")) {
//       var gameSave = {};
//       localStorage.setItem("gameSave", JSON.stringify(gameSave));
//       location.reload();
//     }
// }

// window.onload = () => {
//   loadGame();
//   updateScorePerSecond();
//   document.getElementById("score").innerHTML = score;
//   document.getElementById("cursorcost").innerHTML = cursorCost;
//   document.getElementById("cursors").innerHTML = cursors;  
//   document.getElementById("glazedcost").innerHTML = glazedCost;
//   document.getElementById("glazed").innerHTML = glazed;
//   document.getElementById("sprinklecost").innerHTML = sprinkleCost;
//   document.getElementById("sprinkles").innerHTML = sprinkles;
// };

// setInterval(function () {
//   score = score + cursors;
//   score = score + glazed * 3;
//   score = score + sprinkles * 5;
//   document.getElementById("score").innerHTML = score;
// }, 1000);

// setInterval(function () {
//   saveGame();
// }, 30000);