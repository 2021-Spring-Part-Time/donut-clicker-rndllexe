const game = {
  score: 0,
  totalScore: 0,
  totalClicks: 0,
  clickValue: 1,
  version: 0.000,
  
  addToScore: amount => {
    game.score += amount;
    game.totalScore += amount;
    display.updateScore();
  },
  
  getScorePerSecond: () => {
    var scorePerSecond = 0;
    for (i = 0; i < building.name.length; i++) {
      scorePerSecond += building.income[i] * building.count[i];
    }
    return scorePerSecond;
  }
};

const building = {
  name: [
    "Cursor",
    "Glazed",
    "Sprinkles"
  ],
  image: [
    "cursor.png",
    "cursor.png",
    "cursor.png"
  ],
  count: [
    0,
    0,
    0
  ],
  income: [
    1,
    15,
    155
  ],
  cost: [
    100,
    1000,
    10000
  ],

  purchase: function(index) {
    if (game.score >= this.cost[index]) {
      game.score -= this.cost[index];
      this.count[index]++;
      this.cost[index] = Math.ceil(this.cost[index] * 1.15);
      display.updateScore();
      display.updateShop();
  }
  }
}; 

const display = {
  updateScore: () => {
    document.getElementById("score").innerHTML = game.score;
    document.getElementById("scorepersecond").innerHTML = game.getScorePerSecond();
    document.title = game.score + " donut = Donut Clicker";
  },

  updateShop: () => {
    document.getElementById("shopContainer").innerHTML = "";
    for (i = 0; i < building.name.length; i++) {
      document.getElementById("shopContainer").innerHTML += '<table class="shopButton" onclick="building.purchase('+i+')"><tr><td id="image"><img src="img/'+building.image[i]+'"></td><td id="nameAndCost"><p>'+building.name[i]+'</p><p>'+building.cost[i]+' </p></td><td id="amount"><span>'+building.count[i]+'</span></td></tr></table>'
    }
  }
};

const saveGame = () => {
  var gameSave = {
    score: game.score,
    totalScore: game.totalScore,
    totalClicks: game.totalClicks,
    clickValue: game.clickValue,
    version: game.version,
    buildingCount: building.count,
    buildingIncome: building.income,
    buildingCost: building.cost,
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

const loadGame = () => {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (localStorage.getItem("gameSave") !== null) {
    if (typeof savedGame.score !== "undefined") game.score = savedGame.score;
    if (typeof savedGame.totalScore !== "undefined") game.totalScore = savedGame.totalScore;
    if (typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
    if (typeof savedGame.clickValue !== "undefined") game.clickValue = savedGame.clickValue;
    if (typeof savedGame.buildingCount !== "undefined") {
      for (i = 0; i < savedGame.buildingCount.length; i++) {
        building.count[i] = savedGame.buildingCount[i];
      }
    }
    if (typeof savedGame.buildingIncome !== "undefined") {
      for (i = 0; i < savedGame.buildingIncome.length; i++) {
        building.income[i] = savedGame.buildingIncome[i];
      }
    }
    if (typeof savedGame.buildingCost !== "undefined") {
      for (i = 0; i < savedGame.buildingCost.length; i++) {
        building.cost[i] = savedGame.buildingCost[i];
      }
    }
  }
};

const resetGame = () => {
  if (confirm("Are you sure you want to reset your game")) {
    var gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
}

window.onload = () => {
  loadGame();
  display.updateScore();
  display.updateShop();
};

setInterval(() => {
  game.score += game.getScorePerSecond();
  game.totalScore += game.getScorePerSecond();
  display.updateScore();
}, 1000);

// setInterval(() => {
//   saveGame();
// }, 3000);