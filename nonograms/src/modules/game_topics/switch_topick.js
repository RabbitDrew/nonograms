//делаем массив обеъектов
// в зависимости нажатой кнопки достаём тот объект который нужен
//передаём его в функцию getRows
//переназвать функцию getrows

function setFlagGame() {
  const objFlag = {
    numArrOwe: ["", "", "", "", ""],
    numArrOne: ["", "1", "", "1", ""],
    numArrTwo: ["5", "1", "3", "1", "3"],
    numColomnOwe: ["", "1", "", "", ""],
    numColomnone: ["", "1", "", "", ""],
    numColomnTwo: ["5", "1", "5", "1", "1"],
  };
  return objFlag;
}

function setAirplainGame() {
  const objFlag = {
    numArrOwe: ["", "", "", "", ""],
    numArrOne: ["", "2", "", "2", ""],
    numArrTwo: ["1", "1", "5", "1", "1"],
    numColomnOwe: ["", "", "", "", ""],
    numColomnone: ["", "", "", "", ""],
    numColomnTwo: ["1", "3", "5", "1", "3"],
  };
  return objFlag;
}

function setSandsWatch() {
  const objFlag = {
    numArrOwe: ["", "", "", "", ""],
    numArrOne: ["1", "2", "3", "2", "1"],
    numArrTwo: ["1", "2", "1", "2", "1"],
    numColomnOwe: ["", "", "", "", ""],
    numColomnone: ["", "", "", "1", ""],
    numColomnTwo: ["5", "3", "1", "1", "5"],
  };
  return objFlag;
}

function setTowerGame() {
  const objFlag = {
    numArrOwe: ["", "", "", "", ""],
    numArrOne: ["", "", "3", "", ""],
    numArrTwo: ["2", "4", "1", "4", "2"],
    numColomnOwe: ["1", "", "", "", ""],
    numColomnone: ["1", "", "", "1", ""],
    numColomnTwo: ["1", "5", "3", "1", "3"],
  };
  return objFlag;
}

function setCarGame() {
  const objFlag = {
    numArrOwe: ["", "", "", "", ""],
    numArrOne: ["", "", "", "", ""],
    numArrTwo: ["2", "4", "3", "4", "2"],
    numColomnOwe: ["", "", "", "", ""],
    numColomnone: ["", "", "", "", "1"],
    numColomnTwo: ["", "3", "5", "5", "1"],
  };
  return objFlag;
}
//function for writeing numbers in rows and collumns
export const getRows = function (objGameTheme) {
  //get rows h2 titles
  let rowOne = [];
  let rowTwo = [];
  let rowThree = [];
  const getNumbersRows = document.querySelectorAll(".numbers-row");
  for (let i = 0; i < getNumbersRows.length; i++) {
    if (i === 2) {
      rowThree = getNumbersRows[i].querySelectorAll(".row-cell > .cell__title");
    } else if (i === 1) {
      rowTwo = getNumbersRows[i].querySelectorAll(".row-cell > .cell__title");
    } else if (i === 0) {
      rowOne = getNumbersRows[i].querySelectorAll(".row-cell > .cell__title");
    }
  }
  //write number to the rows
  for (
    let i = 0;
    i < rowOne.length && i < rowTwo.length && i < rowThree.length;
    i++
  ) {
    rowOne[i].textContent = objGameTheme.numArrOwe[i];
    rowTwo[i].textContent = objGameTheme.numArrOne[i];
    rowThree[i].textContent = objGameTheme.numArrTwo[i];
  }

  //get columns h2 titles
  let columnOne = [];
  let columnTwo = [];
  let columnThree = [];
  const getNumbersCollumn = document.querySelectorAll(".number-column");
  for (let i = 0; i < getNumbersCollumn.length; i++) {
    if (i === 2) {
      columnThree = getNumbersCollumn[i].querySelectorAll(
        ".row-cell > .cell__title",
      );
    } else if (i === 1) {
      columnTwo = getNumbersCollumn[i].querySelectorAll(
        ".row-cell > .cell__title",
      );
    } else if (i === 0) {
      columnOne = getNumbersCollumn[i].querySelectorAll(
        ".row-cell > .cell__title",
      );
    }
    //write number to the columns
    for (
      let i = 0;
      i < columnOne.length && i < columnTwo.length && i < columnThree.length;
      i++
    ) {
      columnOne[i].textContent = objGameTheme.numColomnOwe[i];
      columnTwo[i].textContent = objGameTheme.numColomnone[i];
      columnThree[i].textContent = objGameTheme.numColomnTwo[i];
    }
  }
};
getRows(setFlagGame());
