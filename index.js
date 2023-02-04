function everyItemsInArrayAreEquals(array) {
  return array.every((val) => val === array[0]);
}

function numberIsBetween(x, min, max) {
  return x >= min && x <= max;
}

function arrayHasDuplicatesValues(array) {
  let set = new Set();
  return array.some((el) => {
    if (set.has(el)) return true;
    set.add(el);
  });
}

function sortArrayByNumberAndColor(array) {
  return array.sort((a, b) => {
    if (a.number === b.number) {
      return a.color < b.color ? -1 : 1;
    } else {
      return a.number < b.number ? -1 : 1;
    }
  });
}

function numberIsEven(number) {
  return number % 2 == 0;
}

function numberAppearOnArray(array, number) {
  return array.some((val) => val.number === number);
}

function colorAppearOnArray(array, color) {
  return array.some((val) => val.color === color);
}

function arrayIsSequential(array) {
  array = array.sort();
  return array.every((num, i) => i === array.length - 1 || num < array[i + 1]);
}

function paradeToArray(parade) {
  return [
    { color: parade.dice1color, number: parade.dice1number },
    { color: parade.dice2color, number: parade.dice2number },
    { color: parade.dice3color, number: parade.dice3number },
    { color: parade.dice4color, number: parade.dice4number },
  ];
}

function sortByNumber(arrayOfObjects) {
  return arrayOfObjects.sort((a, b) => (a.number > b.number ? 1 : -1));
}

function objectsAreSame(x, y) {
  return JSON.stringify(x) === JSON.stringify(y);
}

$('input[name="listGroupCheckableRadios"]').prop("disabled", true);

const MAX_SCORE = "10";

var game = {
  group: "",
  paradeSelected: "",
  diceSelected: "",
  parade1: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  parade2: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  parade3: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  parade4: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  parade5: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  parade6: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  parade7: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  parade8: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  parade9: {
    dice1number: "",
    dice1color: "",
    dice2number: "",
    dice2color: "",
    dice3number: "",
    dice3color: "",
    dice4number: "",
    dice4color: "",
    score: "",
  },
  totalScore: function () {
    return (
      this.parade1.score +
      this.parade2.score +
      this.parade3.score +
      this.parade4.score +
      this.parade5.score +
      this.parade6.score +
      this.parade7.score +
      this.parade8.score +
      this.parade9.score
    );
  },
  allScoresAreFill: function (parade) {
    return (
      game.parade1.score != "" &&
      game.parade2.score != "" &&
      game.parade3.score != "" &&
      game.parade4.score != "" &&
      game.parade5.score != "" &&
      game.parade6.score != "" &&
      game.parade7.score != "" &&
      game.parade8.score != "" &&
      game.parade9.score != ""
    );
  },
  paradeHasScore: function (parade) {
    return game[parade].score != "" || game[parade].score != MAX_SCORE;
  },
  setScore: function (parade, score) {
    if (score > MAX_SCORE) {
      score = MAX_SCORE;
    }
    game[parade].score = score;
  },
  allDicesParadeAreFill: function (parade) {
    return (
      game[parade].dice1number != "" &&
      game[parade].dice1color != "" &&
      game[parade].dice2number != "" &&
      game[parade].dice2color != "" &&
      game[parade].dice3number != "" &&
      game[parade].dice3color != "" &&
      game[parade].dice4number != "" &&
      game[parade].dice4color != ""
    );
  },
  allDicesColorsAreSameParade: function (parade) {
    return everyItemsInArrayAreEquals([
      game[parade].dice1color,
      game[parade].dice2color,
      game[parade].dice3color,
      game[parade].dice4color,
    ]);
  },
  sumOfDicesParade: function (parade) {
    return (
      game[parade].dice1number +
      game[parade].dice2number +
      game[parade].dice3number +
      game[parade].dice4number
    );
  },
  allDicesNumbersAreSameParade: function (parade) {
    return everyItemsInArrayAreEquals([
      game[parade].dice1number,
      game[parade].dice2number,
      game[parade].dice3number,
      game[parade].dice4number,
    ]);
  },
  diceNumberDoesntAppearOnParade: function (parade, number) {
    return !numberAppearOnArray(paradeToArray(game[parade]), number);
  },
  allDicesAsArray: function (exceptParades = []) {
    let gameParades = [
      "parade1",
      "parade2",
      "parade3",
      "parade4",
      "parade5",
      "parade6",
      "parade7",
      "parade8",
      "parade9",
    ];
    let arrayDicesOfParade = [];
    gameParades.forEach((element) => {
      if (!exceptParades.includes(element)) {
        arrayDicesOfParade.push(paradeToArray(game[element]));
      }
    });
    return arrayDicesOfParade;
  },
  dicesFromSpecificParadeToArray: function (parade) {
    return paradeToArray(game[parade]);
  },
  dicesColorsOfParadeToArray: function (parade) {
    return [
      game[parade].dice1color,
      game[parade].dice2color,
      game[parade].dice3color,
      game[parade].dice4color,
    ];
  },
  dicesNumbersOfParadeToArray: function (parade) {
    return [
      game[parade].dice1number,
      game[parade].dice2number,
      game[parade].dice3number,
      game[parade].dice4number,
    ];
  },
  checkIfDiceAppearAnotherParade: function (
    parade,
    numberOfDiceFoundInAnotherParade
  ) {
    let found = 0;
    let dicesParade = game.dicesFromSpecificParadeToArray(parade);
    let arrayDicesFromAllParadesExcept = game.allDicesAsArray([parade]);
    let arrayParadeIndexFounds = [];

    dicesParade.forEach((element) => {
      for (
        let index = 0;
        index < arrayDicesFromAllParadesExcept.length;
        index++
      ) {
        let elementIsPresent = arrayDicesFromAllParadesExcept[index].find(
          (item) => item.number == element.number && item.color == element.color
        );
        if (elementIsPresent && !arrayParadeIndexFounds.includes(index)) {
          found++;
          arrayParadeIndexFounds.push(index);
          break;
        }
      }
    });

    return found == numberOfDiceFoundInAnotherParade;
  },
  numberOrColorsDoesntAppearOnGame: function (parade) {
    const arrayDicesFromAllParadesExcept = game.allDicesAsArray([parade]);
    const arrayDicesColor = game.dicesColorsOfParadeToArray(parade);

    let ret = false;

    for (let index = 0; index < arrayDicesColor.length; index++) {
      const element = arrayDicesColor[index];
      const appeared = colorAppearOnArray(
        arrayDicesFromAllParadesExcept,
        element
      );
      if (appeared) {
        ret = appeared;
        break;
      }
    }

    if (ret) {
      ret = false;

      const arrayDicesNumber = game.dicesNumbersOfParadeToArray(parade);

      for (let index = 0; index < arrayDicesNumber.length; index++) {
        const element = arrayDicesNumber[index];
        const appeared = numberAppearOnArray(
          arrayDicesFromAllParadesExcept,
          element
        );
        if (appeared) {
          ret = appeared;
          break;
        }
      }
    }

    //Coloque 4 dados com cores ou valores não presentes em nenhum outro quesito.
    return !ret;
  },
  calculateParade2MaxScore: function (parade) {
    //Coloque 2 dados pares idênticos e 2 dados ímpares idênticos de uma segunda cor
    let dicesParade = game.dicesFromSpecificParadeToArray(parade);
    let arraySortedByNumber = sortByNumber(dicesParade);

    let firstDiceGroupColorsAreEqual =
      arraySortedByNumber[0].color === arraySortedByNumber[1].color;
    let firstDiceGroupNumbersAreEqual =
      arraySortedByNumber[0].number === arraySortedByNumber[1].number;
    let firstDiceGroupNumberAreEvenOrOdd = numberIsEven(
      arraySortedByNumber[0].number
    );

    let secondtDiceGroupColorsAreEqual =
      arraySortedByNumber[2].color === arraySortedByNumber[3].color;
    let secondDiceGroupNumbersAreEqual =
      arraySortedByNumber[2].number === arraySortedByNumber[3].number;
    let secondDiceGroupNumberAreEvenOrOdd = numberIsEven(
      arraySortedByNumber[2].number
    );

    if (
      firstDiceGroupColorsAreEqual &&
      firstDiceGroupNumbersAreEqual &&
      secondtDiceGroupColorsAreEqual &&
      secondDiceGroupNumbersAreEqual &&
      firstDiceGroupColorsAreEqual !== secondtDiceGroupColorsAreEqual &&
      ((firstDiceGroupNumberAreEvenOrOdd &&
        !secondDiceGroupNumberAreEvenOrOdd) ||
        (!firstDiceGroupNumberAreEvenOrOdd &&
          secondDiceGroupNumberAreEvenOrOdd))
    ) {
      return true;
    }
    return false;
  },
};

function calculateMaxScores() {
  if (
    game.allDicesParadeAreFill("parade1") &&
    game.allDicesColorsAreSameParade("parade1") &&
    numberIsBetween(game.sumOfDicesParade("parade1"), 10, 15)
  ) {
    game.setScore("parade1", MAX_SCORE);
    showScoreParade("parade1score", game.parade1.score);
  }

  //Coloque 2 dados pares idênticos e 2 dados ímpares idênticos de uma segunda cor
  if (
    game.allDicesParadeAreFill("parade2") &&
    game.calculateParade2MaxScore("parade2")
  ) {
    game.setScore("parade2", MAX_SCORE);
    showScoreParade("parade2score", game.parade2.score);
  }

  //Coloque 4 dados diferentes que estejam presentes em 4 outros quesitos de seu tabuleiro.
  if (
    game.allDicesParadeAreFill("parade3") &&
    !arrayHasDuplicatesValues(game.dicesColorsOfParadeToArray("parade3")) &&
    !arrayHasDuplicatesValues(
      game.dicesNumbersOfParadeToArray("parade3") &&
        game.checkIfDiceAppearAnotherParade("parade3", 4)
    )
  ) {
    game.setScore("parade3", MAX_SCORE);
    showScoreParade("parade3score", game.parade3.score);
  }

  //Coloque 4 dados de cores e valores diferentes.
  if (
    game.allDicesParadeAreFill("parade4") &&
    !arrayHasDuplicatesValues(game.dicesColorsOfParadeToArray("parade4")) &&
    !arrayHasDuplicatesValues(game.dicesNumbersOfParadeToArray("parade4"))
  ) {
    game.setScore("parade4", MAX_SCORE);
    showScoreParade("parade4score", game.parade4.score);
  }

  //Coloque exatamente os mesmos 4 dados usados no quesito 4
  if (
    game.allDicesParadeAreFill("parade5") &&
    objectsAreSame(
      sortByNumber(game.dicesFromSpecificParadeToArray("parade4")),
      sortByNumber(game.dicesFromSpecificParadeToArray("parade5"))
    )
  ) {
    game.setScore("parade5", MAX_SCORE);
    showScoreParade("parade5score", game.parade5.score);
  }

  //Coloque 4 dados em ordem sequencial. As cores não importam
  if (
    game.allDicesParadeAreFill("parade6") &&
    arrayIsSequential(game.dicesNumbersOfParadeToArray("parade6"))
  ) {
    game.setScore("parade6", MAX_SCORE);
    showScoreParade("parade6score", game.parade6.score);
  }

  if (
    game.allDicesParadeAreFill("parade7") &&
    game.allDicesColorsAreSameParade("parade7") &&
    game.allDicesNumbersAreSameParade("parade7")
  ) {
    game.setScore("parade7", MAX_SCORE);
    showScoreParade("parade7score", game.parade7.score);
  }

  //Coloque 4 dados de mesmo valor. Esse valor não pode estar presente em nenhum dado do quesito Harmonia. As cores não importam.
  if (
    game.allDicesParadeAreFill("parade8") &&
    game.allDicesNumbersAreSameParade("parade8") &&
    game.diceNumberDoesntAppearOnParade("parade7", game.parade8.dice1number)
  ) {
    game.setScore("parade8", MAX_SCORE);
    showScoreParade("parade8score", game.parade8.score);
  }

  //Coloque 4 dados com cores ou valores não presentes em nenhum outro quesito.
  if (
    game.allDicesParadeAreFill("parade9") &&
    game.numberOrColorsDoesntAppearOnGame("parade9")
  ) {
    game.setScore("parade9", MAX_SCORE);
    showScoreParade("parade9score", game.parade9.score);
  }
}

function calculateBonusScores() {
  if (!game.paradeHasScore("parade1")) {
    let sumOfParade = game.sumOfDicesParade("parade1");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // if(3 == 3 && numberIsBetween((game.sumOfDicesParade('parade1')), 10, 15)){
    // bonusPoints = returnPointsBasedOnGroup + 3;
    // }else if(game.allDicesColorsAreSameParade('parade1') && !numberIsBetween((game.sumOfDicesParade('parade1')), 10, 15){
    // bonusPoints = returnPointsBasedOnGroup + 2;
    // }else if(3 == 3 && !numberIsBetween((game.sumOfDicesParade('parade1')), 10, 15){
    // bonusPoints = returnPointsBasedOnGroup + 1;
    // }

    // 3 dados da mesma cor que somados dão um resultado de 10 a 15.
    // 4 dados da mesma cor que somados não dão um resultado de 10 a 15.
    // 3 dados da mesma cor que somados não dão um resultado de 10 a 15.

    game.setScore("parade1", bonusPoints);
  }

  if (!game.paradeHasScore("parade2")) {
    let sumOfParade = game.sumOfDicesParade("parade2");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // 2 dados pares idênticos e 2 dados ímpares diferentes de uma segunda cor OU 2 dados ímpares idênticos e 2 dados pares diferentes de uma segunda cor.
    // 2 dados idênticos e 2 dados quaisquer de uma segunda cor.
    // 2 dados de uma cor e 2 dados de uma segunda cor, os valores não importam

    game.setScore("parade2", bonusPoints);
  }

  if (!game.paradeHasScore("parade3")) {
    let sumOfParade = game.sumOfDicesParade("parade3");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // 3 dados diferentes. Os 4 dados devem estar presentes em 4 quesitos.
    // 4 dados diferentes, presentes em 3 quesitos.
    // 3 dados diferentes,presentes em 3 quesitos.

    game.setScore("parade3", bonusPoints);
  }

  if (!game.paradeHasScore("parade4")) {
    let sumOfParade = game.sumOfDicesParade("parade4");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // 4 dados com cores diferentes e 3 valores diferentes.
    // 4 dados com valores diferentes em 3 cores diferentes.
    // 3 dados com cores e valores diferentes.

    game.setScore("parade4", bonusPoints);
  }

  if (!game.paradeHasScore("parade5")) {
    let sumOfParade = game.sumOfDicesParade("parade5");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // 3 dados idênticos às Alegorias e Adereços.
    // 2 dados idênticos às Alegorias e Adereços.
    // 1 dado idêntico às Alegorias e Adereços.

    game.setScore("parade5", bonusPoints);
  }

  if (!game.paradeHasScore("parade6")) {
    let sumOfParade = game.sumOfDicesParade("parade6");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // 4 dados em ordem sequencial, usando 6 e 1 na sequência.
    // 3 dados em ordem sequencial.
    // 3 dados em ordem sequencial, usando 6 e 1 na sequência.

    game.setScore("parade6", bonusPoints);
  }

  if (!game.paradeHasScore("parade7")) {
    let sumOfParade = game.sumOfDicesParade("parade7");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // 3 dados idênticos
    // 2 pares de dados idênticos
    // 2 dados idênticos

    game.setScore("parade7", bonusPoints);
  }

  if (!game.paradeHasScore("parade8")) {
    let sumOfParade = game.sumOfDicesParade("parade8");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // 3 dados de mesmo valor. Nenhum dos valores utilizados pode estar presente em Harmonia.
    // 2 dados de um valor e 2 de outro valor, ambos não presentes em Harmonia.
    // 2 dados de mesmo valor. Nenhum dos valores utilizados pode estar presente em Harmonia

    game.setScore("parade8", bonusPoints);
  }

  if (!game.paradeHasScore("parade9")) {
    let sumOfParade = game.sumOfDicesParade("parade9");
    let returnPointsBasedOnGroup = pointsBasedOnGroup(sumOfParade);
    let bonusPoints = 0;

    // 3 dados com cores ou valores não presentes em nenhum outro quesito
    // 2 dados com cores ou valores não presentes em nenhum outro quesito
    // 1 dado com cor ou valor não presente em nenhum outro quesito

    game.setScore("parade9", bonusPoints);
  }
}

function pointsBasedOnGroup(sumOfDices) {
  let points = 0;
  switch (game.group) {
    case "D":
      if (sumOfDices <= 11) {
        points = 0;
      } else if (sumOfDices == 12) {
        points = 1;
      } else if (sumOfDices == 13) {
        points = 2;
      } else if (sumOfDices == 14) {
        points = 3;
      } else if (sumOfDices == 15) {
        points = 4;
      } else if (sumOfDices == 16) {
        points = 5;
      } else if (sumOfDices == 17) {
        points = 6;
      } else if (sumOfDices == 18) {
        points = 7;
      } else if (sumOfDices == 19) {
        points = 8;
      } else if (sumOfDices == 20) {
        points = 9;
      } else if (sumOfDices == 21) {
        points = 2;
      } else if (sumOfDices == 22) {
        points = 1;
      } else if (sumOfDices >= 23) {
        points = 0;
      }
      break;
    case "C":
      if (sumOfDices <= 11) {
        points = 0;
      } else if (sumOfDices == 12) {
        points = 1;
      } else if (sumOfDices == 13) {
        points = 1;
      } else if (sumOfDices == 14) {
        points = 2;
      } else if (sumOfDices == 15) {
        points = 3;
      } else if (sumOfDices == 16) {
        points = 4;
      } else if (sumOfDices == 17) {
        points = 6;
      } else if (sumOfDices == 18) {
        points = 6;
      } else if (sumOfDices == 19) {
        points = 8;
      } else if (sumOfDices == 20) {
        points = 9;
      } else if (sumOfDices == 21) {
        points = 1;
      } else if (sumOfDices == 22) {
        points = 1;
      } else if (sumOfDices >= 23) {
        points = 0;
      }
      break;
    case "B":
      if (sumOfDices <= 12) {
        points = 0;
      } else if (sumOfDices == 13) {
        points = 1;
      } else if (sumOfDices == 14) {
        points = 2;
      } else if (sumOfDices == 15) {
        points = 3;
      } else if (sumOfDices == 16) {
        points = 4;
      } else if (sumOfDices == 17) {
        points = 4;
      } else if (sumOfDices == 18) {
        points = 6;
      } else if (sumOfDices == 19) {
        points = 7;
      } else if (sumOfDices == 20) {
        points = 9;
      } else if (sumOfDices == 21) {
        points = 1;
      } else if (sumOfDices >= 22) {
        points = 0;
      }
      break;
    case "A":
      if (sumOfDices <= 12) {
        points = 0;
      } else if (sumOfDices == 13) {
        points = 1;
      } else if (sumOfDices == 14) {
        points = 2;
      } else if (sumOfDices == 15) {
        points = 2;
      } else if (sumOfDices == 16) {
        points = 3;
      } else if (sumOfDices == 17) {
        points = 4;
      } else if (sumOfDices == 18) {
        points = 5;
      } else if (sumOfDices == 19) {
        points = 7;
      } else if (sumOfDices == 20) {
        points = 9;
      } else if (sumOfDices >= 21) {
        points = 0;
      }
      break;
    case "S":
      if (sumOfDices <= 13) {
        points = 0;
      } else if (sumOfDices == 14) {
        points = 1;
      } else if (sumOfDices == 15) {
        points = 2;
      } else if (sumOfDices == 16) {
        points = 3;
      } else if (sumOfDices == 17) {
        points = 3;
      } else if (sumOfDices == 18) {
        points = 5;
      } else if (sumOfDices == 19) {
        points = 7;
      } else if (sumOfDices == 20) {
        points = 9;
      } else if (sumOfDices >= 21) {
        points = 0;
      }
      break;
  }
  return points;
}

function showTotalScore() {
  $("#totalscore").text(game.totalScore).show();
}

function showScoreParade(parade, score) {
  $("#" + parade)
    .text(score)
    .show();
}

function hideScoreParades() {
  $("[id^=parade][id$=score]").hide();
  game.parade1.score = "";
  game.parade2.score = "";
  game.parade3.score = "";
  game.parade4.score = "";
  game.parade5.score = "";
  game.parade6.score = "";
  game.parade7.score = "";
  game.parade8.score = "";
  game.parade9.score = "";
}

$("#resetParade").click(function () {
  window.location.reload();
});

//Group selection
$(".btn-group input[type='radio']").click(function () {
  $('input[name="listGroupCheckableRadios"]').prop("disabled", false);
  $(".btn-group input[type='radio']").prop("disabled", true);
  $("#" + this.id).prop("disabled", false);
  game.group = $(this).data("group");
});

//Dice picker
$(".dice").click(function () {
  $(".dice").removeClass("active");
  $(this).addClass("active");
  game.diceSelected = this.id;
});

//Number picker
$(".diceNumber").click(function () {
  $("#" + game.diceSelected + " > i").removeClass();
  let numberSelected = $(this).data("number");

  let classSelectedDiceNumber = $("#" + this.id + " > i").attr("class");
  $("#" + game.diceSelected + " > i").addClass(classSelectedDiceNumber);

  $("#" + game.paradeSelected + game.diceSelected).removeClass();

  game[game.paradeSelected][game.diceSelected + "number"] = numberSelected;
  game[game.paradeSelected][game.diceSelected + "color"] = "";

  $("#" + game.paradeSelected + game.diceSelected).addClass(
    "bi bi-dice-" + numberSelected + "-fill icon-gray"
  );
});

//Color picker
$(".diceColor").click(function () {
  let colorSelected = $(this).data("color");

  $("#" + game.diceSelected + " > i").removeClass(function (index, css) {
    return (css.match(/\bicon-\S+/g) || []).join(" "); // removes anything that starts with "icon-"
  });

  $("#" + game.diceSelected + " > i").addClass("icon-" + colorSelected);
  $("#" + game.paradeSelected + game.diceSelected).removeClass();

  game[game.paradeSelected][game.diceSelected + "color"] = colorSelected;

  $("#" + game.paradeSelected + game.diceSelected).addClass(
    "bi bi-dice-" +
      game[game.paradeSelected][game.diceSelected + "number"] +
      "-fill icon-" +
      colorSelected
  );
});

//Modal actions
$("#dicePickerModal").on("show.bs.modal", function (e) {
  var button = $(e.relatedTarget);
  var paradeValue = button.data("parade");
  var valueNumberIcon = button.data("value");
  var selectedItem = $("#" + paradeValue)
    .text()
    .trim();
  var modal = $(this);

  modal.find("#modalIconNumber").removeClass();
  modal.find("#modalIconNumber").addClass(valueNumberIcon);
  modal.find(".modal-title").text(selectedItem);

  game.paradeSelected = paradeValue;
  game.diceSelected = null;

  //reset dice picker
  $(".dice > i").removeClass();
  $(".dice").removeClass("active");

  if (game[game.paradeSelected] && game[game.paradeSelected].dice1number) {
    $("#dice1 > i").addClass(
      "bi bi-dice-" +
        game[game.paradeSelected].dice1number +
        "-fill icon-" +
        game[game.paradeSelected].dice1color
    );
  } else {
    $("#dice1 > i").addClass("bi bi-1-circle-fill");
  }

  if (game[game.paradeSelected] && game[game.paradeSelected].dice2number) {
    $("#dice2 > i").addClass(
      "bi bi-dice-" +
        game[game.paradeSelected].dice2number +
        "-fill icon-" +
        game[game.paradeSelected].dice2color
    );
  } else {
    $("#dice2 > i").addClass("bi bi-2-circle-fill");
  }

  if (game[game.paradeSelected] && game[game.paradeSelected].dice3number) {
    $("#dice3 > i").addClass(
      "bi bi-dice-" +
        game[game.paradeSelected].dice3number +
        "-fill icon-" +
        game[game.paradeSelected].dice3color
    );
  } else {
    $("#dice3 > i").addClass("bi bi-3-circle-fill");
  }

  if (game[game.paradeSelected] && game[game.paradeSelected].dice4number) {
    $("#dice4 > i").addClass(
      "bi bi-dice-" +
        game[game.paradeSelected].dice4number +
        "-fill icon-" +
        game[game.paradeSelected].dice4color
    );
  } else {
    $("#dice4 > i").addClass("bi bi-4-circle-fill");
  }
});

$("#dicePickerModal").on("hidden.bs.modal", function (e) {
  hideScoreParades();

  calculateMaxScores();

  calculateBonusScores();

  if (game.allScoresAreFill()) {
    showTotalScore();
  }
});
