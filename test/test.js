// Start with an iffe and expose the public variable on global
(function () {
  // "it" function defines the test case
  function it(desc, func) {
    //encapsulate the func call in try/catch block so that testing does not stop if one test fails
    try {
      func();
      // If the test case passes then log the test case description in the browser console with a checkmark
      console.log("\x1b[32m%s\x1b[0m", "\u2714 " + desc);
    } catch (error) {
      // log the error on the console with an 'x'
      console.log("\n");
      console.log("\x1b[31m%s\x1b[0m", "\u2718 " + desc);
      console.error(error);
      console.log("\n");
    }
  }

  function assert(isTrue) {
    if (!isTrue) {
      throw new Error();
    }
  }

  function resetAllParades() {
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
    gameParades.forEach((element) => {
      game[element].dice1color = "";
      game[element].dice1number = "";
      game[element].dice2color = "";
      game[element].dice2number = "";
      game[element].dice3color = "";
      game[element].dice3number = "";
      game[element].dice4color = "";
      game[element].dice4number = "";
      game[element].maxScore = false;
    });
  }

  it("everyItemsInArrayAreEquals to be true", () => {
    const sameItemsInArray = everyItemsInArrayAreEquals([1, 1]);
    assert(sameItemsInArray);
  });

  it("number are between 10 and 15", () => {
    assert(numberIsBetween(13, 10, 15));
  });

  it("number are not between 10 and 15", () => {
    assert(!numberIsBetween(9, 10, 15));
  });

  it("number are not between 10 and 15", () => {
    assert(!numberIsBetween(16, 10, 15));
  });

  it("array has duplicate values", () => {
    const hasDuplicatesValues = arrayHasDuplicatesValues([1, 1]);
    assert(hasDuplicatesValues);
  });

  it("array don't have duplicate values", () => {
    const hasDuplicatesValues = arrayHasDuplicatesValues([1, 2]);
    assert(!hasDuplicatesValues);
  });

  it("number Is Even", () => {
    assert(numberIsEven(2));
  });

  it("number Is Odd", () => {
    assert(!numberIsEven(3));
  });

  const arrayValuesMock = [
    { color: "blue", number: 1 },
    { color: "blue", number: 1 },
    { color: "blue", number: 1 },
    { color: "blue", number: 1 },
  ];

  it("number Appear on Array", () => {
    const hasNumber = numberAppearOnArray(arrayValuesMock, 1);
    assert(hasNumber);
  });

  it("number doesn't Appear on Array", () => {
    const hasNumber = numberAppearOnArray(arrayValuesMock, 3);
    assert(!hasNumber);
  });

  it("find the color on array of arrays", () => {
    let arrayOfArrays = [];
    arrayOfArrays.push(arrayValuesMock);
    arrayOfArrays.push(arrayValuesMock);
    const hasColor = colorAppearOnArrayOfArray(arrayOfArrays, "blue");
    assert(hasColor);
  });

  it("don't find number on array of arrays", () => {
    let arrayOfArrays = [];
    arrayOfArrays.push(arrayValuesMock);
    arrayOfArrays.push(arrayValuesMock);
    const hasNumber = numberAppearOnArrayOfArray(arrayOfArrays, 3);
    assert(!hasNumber);
  });

  it("array is sequential", () => {
    const isSequential = arrayIsSequential([3, 4, 5, 6]);
    assert(isSequential);
  });

  it("array is not sequential", () => {
    const isSequential = arrayIsSequential([3, 4, 4, 6]);
    assert(!isSequential);
  });

  it("array is not sequential - v2", () => {
    const isSequential = arrayIsSequential([3, 1, 4, 6]);
    assert(!isSequential);
  });

  it("array is not sequential - v3", () => {
    const isSequential = arrayIsSequential([1, 3, 4, 6]);
    assert(!isSequential);
  });

  it("compare two objects JSON", () => {
    const areEqual = objectsAreSame(arrayValuesMock, arrayValuesMock);
    assert(areEqual);
  });

  it("convert parade to array", () => {
    const parade = {
      dice1number: 1,
      dice1color: "red",
      dice2number: 2,
      dice2color: "green",
      dice3number: 3,
      dice3color: "blue",
      dice4number: 4,
      dice4color: "yellow",
    };

    const isArray = paradeToArray(parade);
    assert(isArray[0].color == "red");
  });

  it("sort array by number", () => {
    const paradeValues = [
      { color: "blue", number: 2 },
      { color: "blue", number: 3 },
      { color: "blue", number: 4 },
      { color: "blue", number: 1 },
    ];
    const arraySortedByNumber = sortByNumber(paradeValues);
    assert(arraySortedByNumber[0].number == 1);
  });

  it("sort array by number", () => {
    const paradeValues = [
      { color: "yellow", number: 2 },
      { color: "blue", number: 3 },
      { color: "green", number: 4 },
      { color: "blue", number: 1 },
    ];
    const arraySortedByNumberColor = sortArrayByNumberAndColor(paradeValues);
    assert(arraySortedByNumberColor[0].number == 1);
    assert(arraySortedByNumberColor[0].color == "blue");
  });

  it("calculate maxScore parade1", () => {
    resetAllParades();
    hideScoreParades();

    game.parade1.dice1color = "blue";
    game.parade1.dice1number = 5;
    game.parade1.dice2color = "blue";
    game.parade1.dice2number = 5;
    game.parade1.dice3color = "blue";
    game.parade1.dice3number = 2;
    game.parade1.dice4color = "blue";
    game.parade1.dice4number = 2;

    calculateMaxScores();

    assert(game.parade1.score == 10);
  });

  it("calculate maxScore parade1 - not maxScore", () => {
    resetAllParades();
    hideScoreParades();

    game.parade1.dice1color = "blue";
    game.parade1.dice1number = 5;
    game.parade1.dice2color = "blue";
    game.parade1.dice2number = 5;
    game.parade1.dice3color = "blue";
    game.parade1.dice3number = 2;
    game.parade1.dice4color = "yellow";
    game.parade1.dice4number = 1;

    calculateMaxScores();

    assert(game.parade1.score == "");
  });

  it("calculate maxScore parade2", () => {
    resetAllParades();
    hideScoreParades();

    game.parade2.dice1color = "red";
    game.parade2.dice1number = 3;
    game.parade2.dice2color = "red";
    game.parade2.dice2number = 3;
    game.parade2.dice3color = "blue";
    game.parade2.dice3number = 2;
    game.parade2.dice4color = "blue";
    game.parade2.dice4number = 2;

    calculateMaxScores();

    assert(game.parade2.score == 10);
  });

  it("calculate maxScore parade2 - not maxScore", () => {
    resetAllParades();
    hideScoreParades();

    game.parade2.dice1color = "red";
    game.parade2.dice1number = 3;
    game.parade2.dice2color = "red";
    game.parade2.dice2number = 3;
    game.parade2.dice3color = "blue";
    game.parade2.dice3number = 1;
    game.parade2.dice4color = "blue";
    game.parade2.dice4number = 2;

    calculateMaxScores();

    assert(game.parade2.score == "");
  });

  it("calculate maxScore parade3", () => {
    resetAllParades();
    hideScoreParades();

    game.parade1.dice1color = "yellow";
    game.parade1.dice1number = "4";
    game.parade1.dice2color = "yellow";
    game.parade1.dice2number = "3";
    game.parade1.dice3color = "yellow";
    game.parade1.dice3number = "2";
    game.parade1.dice4color = "yellow";
    game.parade1.dice4number = "1";

    game.parade2.dice1color = "green";
    game.parade2.dice1number = "2";
    game.parade2.dice2color = "yellow";
    game.parade2.dice2number = "3";
    game.parade2.dice3color = "yellow";
    game.parade2.dice3number = "2";
    game.parade2.dice4color = "yellow";
    game.parade2.dice4number = "1";

    game.parade3.dice1color = "yellow";
    game.parade3.dice1number = "4";
    game.parade3.dice2color = "green";
    game.parade3.dice2number = "2";
    game.parade3.dice3color = "red";
    game.parade3.dice3number = "1";
    game.parade3.dice4color = "blue";
    game.parade3.dice4number = "3";

    game.parade4.dice1color = "red";
    game.parade4.dice1number = "1";
    game.parade4.dice2color = "red";
    game.parade4.dice2number = "1";
    game.parade4.dice3color = "red";
    game.parade4.dice3number = "1";
    game.parade4.dice4color = "red";
    game.parade4.dice4number = "1";

    game.parade5.dice1color = "blue";
    game.parade5.dice1number = "3";
    game.parade5.dice2color = "red";
    game.parade5.dice2number = "1";
    game.parade5.dice3color = "red";
    game.parade5.dice3number = "1";
    game.parade5.dice4color = "red";
    game.parade5.dice4number = "1";

    game.parade6.dice1color = "red";
    game.parade6.dice1number = "1";
    game.parade6.dice2color = "red";
    game.parade6.dice2number = "1";
    game.parade6.dice3color = "red";
    game.parade6.dice3number = "1";
    game.parade6.dice4color = "red";
    game.parade6.dice4number = "1";

    game.parade7.dice1color = "red";
    game.parade7.dice1number = "1";
    game.parade7.dice2color = "red";
    game.parade7.dice2number = "1";
    game.parade7.dice3color = "red";
    game.parade7.dice3number = "1";
    game.parade7.dice4color = "red";
    game.parade7.dice4number = "1";

    game.parade8.dice1color = "red";
    game.parade8.dice1number = "1";
    game.parade8.dice2color = "red";
    game.parade8.dice2number = "1";
    game.parade8.dice3color = "red";
    game.parade8.dice3number = "1";
    game.parade8.dice4color = "red";
    game.parade8.dice4number = "1";
    calculateMaxScores();

    assert(game.parade3.score == 10);
  });

  it("calculate maxScore parade3 - not maxScore", () => {
    resetAllParades();
    hideScoreParades();

    game.parade1.dice1color = "yellow";
    game.parade1.dice1number = "4";
    game.parade1.dice2color = "yellow";
    game.parade1.dice2number = "3";
    game.parade1.dice3color = "yellow";
    game.parade1.dice3number = "2";
    game.parade1.dice4color = "yellow";
    game.parade1.dice4number = "1";

    game.parade2.dice1color = "green";
    game.parade2.dice1number = "2";
    game.parade2.dice2color = "yellow";
    game.parade2.dice2number = "3";
    game.parade2.dice3color = "yellow";
    game.parade2.dice3number = "2";
    game.parade2.dice4color = "yellow";
    game.parade2.dice4number = "1";

    game.parade3.dice1color = "yellow";
    game.parade3.dice1number = "4";
    game.parade3.dice2color = "green";
    game.parade3.dice2number = "2";
    game.parade3.dice3color = "red";
    game.parade3.dice3number = "1";
    game.parade3.dice4color = "yellow";
    game.parade3.dice4number = "3";

    game.parade4.dice1color = "red";
    game.parade4.dice1number = "1";
    game.parade4.dice2color = "red";
    game.parade4.dice2number = "1";
    game.parade4.dice3color = "red";
    game.parade4.dice3number = "1";
    game.parade4.dice4color = "red";
    game.parade4.dice4number = "1";

    calculateMaxScores();

    assert(game.parade3.score == "");
  });

  it("calculate maxScore parade3 - not maxScore v2", () => {
    resetAllParades();
    hideScoreParades();

    game.parade1.dice1color = "yellow";
    game.parade1.dice1number = "4";
    game.parade1.dice2color = "yellow";
    game.parade1.dice2number = "3";
    game.parade1.dice3color = "yellow";
    game.parade1.dice3number = "2";
    game.parade1.dice4color = "yellow";
    game.parade1.dice4number = "1";

    game.parade2.dice1color = "green";
    game.parade2.dice1number = "2";
    game.parade2.dice2color = "yellow";
    game.parade2.dice2number = "3";
    game.parade2.dice3color = "yellow";
    game.parade2.dice3number = "2";
    game.parade2.dice4color = "yellow";
    game.parade2.dice4number = "1";

    game.parade3.dice1color = "yellow";
    game.parade3.dice1number = "4";
    game.parade3.dice2color = "green";
    game.parade3.dice2number = "2";
    game.parade3.dice3color = "red";
    game.parade3.dice3number = "1";
    game.parade3.dice4color = "red";
    game.parade3.dice4number = "2";

    game.parade4.dice1color = "red";
    game.parade4.dice1number = "1";
    game.parade4.dice2color = "red";
    game.parade4.dice2number = "1";
    game.parade4.dice3color = "red";
    game.parade4.dice3number = "1";
    game.parade4.dice4color = "red";
    game.parade4.dice4number = "1";

    calculateMaxScores();

    assert(game.parade3.score == "");
  });

  it("calculate maxScore parade4", () => {
    resetAllParades();
    hideScoreParades();

    game.parade4.dice1color = "red";
    game.parade4.dice1number = 3;
    game.parade4.dice2color = "yellow";
    game.parade4.dice2number = 6;
    game.parade4.dice3color = "blue";
    game.parade4.dice3number = 2;
    game.parade4.dice4color = "green";
    game.parade4.dice4number = 5;

    calculateMaxScores();

    assert(game.parade4.score == 10);
  });

  it("calculate maxScore parade4 - not maxScore", () => {
    resetAllParades();
    hideScoreParades();

    game.parade4.dice1color = "red";
    game.parade4.dice1number = 3;
    game.parade4.dice2color = "yellow";
    game.parade4.dice2number = 6;
    game.parade4.dice3color = "blue";
    game.parade4.dice3number = 2;
    game.parade4.dice4color = "green";
    game.parade4.dice4number = 2;

    calculateMaxScores();

    assert(game.parade4.score == "");
  });

  it("calculate maxScore parade5", () => {
    resetAllParades();
    hideScoreParades();

    game.parade4.dice1color = "red";
    game.parade4.dice1number = 3;
    game.parade4.dice2color = "yellow";
    game.parade4.dice2number = 6;
    game.parade4.dice3color = "blue";
    game.parade4.dice3number = 2;
    game.parade4.dice4color = "green";
    game.parade4.dice4number = 5;

    game.parade5.dice1color = "red";
    game.parade5.dice1number = 3;
    game.parade5.dice2color = "yellow";
    game.parade5.dice2number = 6;
    game.parade5.dice3color = "blue";
    game.parade5.dice3number = 2;
    game.parade5.dice4color = "green";
    game.parade5.dice4number = 5;

    calculateMaxScores();

    assert(game.parade4.score == 10);
    assert(game.parade5.score == 10);
  });

  it("calculate maxScore parade5 - not maxScore", () => {
    resetAllParades();
    hideScoreParades();

    game.parade4.dice1color = "red";
    game.parade4.dice1number = 3;
    game.parade4.dice2color = "yellow";
    game.parade4.dice2number = 6;
    game.parade4.dice3color = "blue";
    game.parade4.dice3number = 2;
    game.parade4.dice4color = "green";
    game.parade4.dice4number = 5;

    game.parade5.dice1color = "red";
    game.parade5.dice1number = 3;
    game.parade5.dice2color = "yellow";
    game.parade5.dice2number = 6;
    game.parade5.dice3color = "blue";
    game.parade5.dice3number = 2;
    game.parade5.dice4color = "green";
    game.parade5.dice4number = 1;

    calculateMaxScores();

    assert(game.parade4.score == 10);
    assert(game.parade5.score == "");
  });

  it("calculate maxScore parade6", () => {
    resetAllParades();
    hideScoreParades();

    game.parade6.dice1color = "red";
    game.parade6.dice1number = 3;
    game.parade6.dice2color = "yellow";
    game.parade6.dice2number = 1;
    game.parade6.dice3color = "blue";
    game.parade6.dice3number = 2;
    game.parade6.dice4color = "green";
    game.parade6.dice4number = 4;

    calculateMaxScores();

    assert(game.parade6.score == 10);
  });

  it("calculate maxScore parade6 - not maxScore", () => {
    resetAllParades();
    hideScoreParades();

    game.parade6.dice1color = "red";
    game.parade6.dice1number = 1;
    game.parade6.dice2color = "yellow";
    game.parade6.dice2number = 1;
    game.parade6.dice3color = "blue";
    game.parade6.dice3number = 2;
    game.parade6.dice4color = "green";
    game.parade6.dice4number = 5;

    calculateMaxScores();

    assert(game.parade6.score == "");
  });

  it("calculate maxScore parade7", () => {
    resetAllParades();
    hideScoreParades();

    game.parade7.dice1color = "red";
    game.parade7.dice1number = 3;
    game.parade7.dice2color = "red";
    game.parade7.dice2number = 3;
    game.parade7.dice3color = "red";
    game.parade7.dice3number = 3;
    game.parade7.dice4color = "red";
    game.parade7.dice4number = 3;

    calculateMaxScores();

    assert(game.parade7.score == 10);
  });

  it("calculate maxScore parade7 - not maxScore", () => {
    resetAllParades();
    hideScoreParades();

    game.parade7.dice1color = "red";
    game.parade7.dice1number = 3;
    game.parade7.dice2color = "red";
    game.parade7.dice2number = 3;
    game.parade7.dice3color = "red";
    game.parade7.dice3number = 3;
    game.parade7.dice4color = "red";
    game.parade7.dice4number = 2;

    calculateMaxScores();

    assert(game.parade7.score == "");
  });

  it("calculate maxScore parade8", () => {
    resetAllParades();
    hideScoreParades();

    game.parade7.dice1color = "red";
    game.parade7.dice1number = 3;
    game.parade7.dice2color = "red";
    game.parade7.dice2number = 3;
    game.parade7.dice3color = "red";
    game.parade7.dice3number = 3;
    game.parade7.dice4color = "red";
    game.parade7.dice4number = 3;

    game.parade8.dice1color = "red";
    game.parade8.dice1number = 1;
    game.parade8.dice2color = "red";
    game.parade8.dice2number = 1;
    game.parade8.dice3color = "red";
    game.parade8.dice3number = 1;
    game.parade8.dice4color = "yellow";
    game.parade8.dice4number = 1;
    calculateMaxScores();

    assert(game.parade7.score == 10);
    assert(game.parade8.score == 10);
  });

  it("calculate maxScore parade8 - not maxScore", () => {
    resetAllParades();
    hideScoreParades();

    game.parade7.dice1color = "red";
    game.parade7.dice1number = 3;
    game.parade7.dice2color = "red";
    game.parade7.dice2number = 3;
    game.parade7.dice3color = "red";
    game.parade7.dice3number = 3;
    game.parade7.dice4color = "red";
    game.parade7.dice4number = 3;

    game.parade8.dice1color = "red";
    game.parade8.dice1number = 1;
    game.parade8.dice2color = "red";
    game.parade8.dice2number = 1;
    game.parade8.dice3color = "red";
    game.parade8.dice3number = 1;
    game.parade8.dice4color = "red";
    game.parade8.dice4number = 3;
    calculateMaxScores();

    assert(game.parade7.score == 10);
    assert(game.parade8.score == "");
  });

  //todo: parade9
  //Coloque 4 dados com cores ou valores não presentes em nenhum outro quesito.
  it("calculate maxScore parade9", () => {
    resetAllParades();
    hideScoreParades();

    game.parade1.dice1color = "yellow";
    game.parade1.dice1number = "4";
    game.parade1.dice2color = "yellow";
    game.parade1.dice2number = "3";
    game.parade1.dice3color = "yellow";
    game.parade1.dice3number = "2";
    game.parade1.dice4color = "yellow";
    game.parade1.dice4number = "1";

    game.parade2.dice1color = "green";
    game.parade2.dice1number = "2";
    game.parade2.dice2color = "green";
    game.parade2.dice2number = "3";
    game.parade2.dice3color = "green";
    game.parade2.dice3number = "2";
    game.parade2.dice4color = "green";
    game.parade2.dice4number = "1";

    game.parade3.dice1color = "red";
    game.parade3.dice1number = "4";
    game.parade3.dice2color = "red";
    game.parade3.dice2number = "2";
    game.parade3.dice3color = "red";
    game.parade3.dice3number = "1";
    game.parade3.dice4color = "red";
    game.parade3.dice4number = "3";

    game.parade4.dice1color = "blue";
    game.parade4.dice1number = "1";
    game.parade4.dice2color = "blue";
    game.parade4.dice2number = "1";
    game.parade4.dice3color = "blue";
    game.parade4.dice3number = "1";
    game.parade4.dice4color = "blue";
    game.parade4.dice4number = "1";

    game.parade5.dice1color = "blue";
    game.parade5.dice1number = "3";
    game.parade5.dice2color = "red";
    game.parade5.dice2number = "1";
    game.parade5.dice3color = "red";
    game.parade5.dice3number = "1";
    game.parade5.dice4color = "red";
    game.parade5.dice4number = "1";

    game.parade6.dice1color = "red";
    game.parade6.dice1number = "1";
    game.parade6.dice2color = "red";
    game.parade6.dice2number = "1";
    game.parade6.dice3color = "red";
    game.parade6.dice3number = "1";
    game.parade6.dice4color = "red";
    game.parade6.dice4number = "1";

    game.parade7.dice1color = "red";
    game.parade7.dice1number = "1";
    game.parade7.dice2color = "red";
    game.parade7.dice2number = "1";
    game.parade7.dice3color = "red";
    game.parade7.dice3number = "1";
    game.parade7.dice4color = "red";
    game.parade7.dice4number = "1";

    game.parade8.dice1color = "red";
    game.parade8.dice1number = "1";
    game.parade8.dice2color = "red";
    game.parade8.dice2number = "1";
    game.parade8.dice3color = "red";
    game.parade8.dice3number = "1";
    game.parade8.dice4color = "red";
    game.parade8.dice4number = "1";

    game.parade9.dice1color = "orange";
    game.parade9.dice1number = "1";
    game.parade9.dice2color = "orange";
    game.parade9.dice2number = "2";
    game.parade9.dice3color = "orange";
    game.parade9.dice3number = "3";
    game.parade9.dice4color = "orange";
    game.parade9.dice4number = "4";

    calculateMaxScores();

    assert(game.parade9.score == 10);
  });
})();
