import { body } from "../header/header.js";

export const creatGameStructure = function (size) {
  /*main*/
  const createMain = document.createElement("main");
  createMain.classList.add("main");
  body.appendChild(createMain);
  /*left side of the page*/
  const createLeftPart = document.createElement("div");
  createLeftPart.classList.add("main-left__part");
  createMain.appendChild(createLeftPart);
  /*right part of the page*/
  const createRightPart = document.createElement("div");
  createRightPart.classList.add("main-right__part");
  createMain.appendChild(createRightPart);
  /*game-structure*/
  const createGameField = document.createElement("div");
  createGameField.classList.add("right-game--field");
  createRightPart.appendChild(createGameField);
  /*top part of field*/
  const createGameTop = document.createElement("div");
  createGameTop.classList.add("game__top");
  createGameField.appendChild(createGameTop);
  /*top-left*/
  const createGmaeType = document.createElement("div");
  createGmaeType.classList.add("game-type");
  createGameTop.appendChild(createGmaeType);
  /*top-right*/

  const createGamenumbersRows = document.createElement("div");
  createGamenumbersRows.classList.add("game-numbers__rows");
  createGameTop.appendChild(createGamenumbersRows);

  for (let i = 0; i < 3; i++) {
    const createNumbersRow = document.createElement("div");
    createNumbersRow.classList.add("numbers-row");
    createGamenumbersRows.appendChild(createNumbersRow);
  }
  const getNumbersRow = document.querySelectorAll(".numbers-row");
  for (let i = 0; i < getNumbersRow.length; i++) {
    for (let j = 0; j < 5; j++) {
      //example to change size
      const createRowCell = document.createElement("div");
      createRowCell.classList.add("row-cell");
      getNumbersRow[i].appendChild(createRowCell);
    }
  }

  /*bottom part of field*/
  const createGameBottom = document.createElement("div");
  createGameBottom.classList.add("game__bottom");
  createGameField.appendChild(createGameBottom);
  /*bottom left*/
  const createGameNumbersColumns = document.createElement("div");
  createGameNumbersColumns.classList.add("game-numbers__column");
  createGameBottom.appendChild(createGameNumbersColumns);

  for (let i = 0; i < 3; i++) {
    const createNumbersCollumn = document.createElement("div");
    createNumbersCollumn.classList.add("number-column");
    createGameNumbersColumns.appendChild(createNumbersCollumn);
  }

  const getNumbersCollumn = document.querySelectorAll(".number-column");
  for (let i = 0; i < getNumbersCollumn.length; i++) {
    for (let j = 0; j < 5; j++) {
      const creatColumnCell = document.createElement("div");
      creatColumnCell.classList.add("column-cell");
      getNumbersCollumn[i].appendChild(creatColumnCell);
    }
  }
  /*bottom right*/
  const createGameCells = document.createElement("div");
  createGameCells.classList.add("game-cells");
  createGameBottom.appendChild(createGameCells);
  for (let i = 0; i < 5; i++) {
    const creatEmptyCellRows = document.createElement("div");
    creatEmptyCellRows.classList.add("cells-row");
    createGameCells.appendChild(creatEmptyCellRows);
  }
  const getEmptyCellRows = document.querySelectorAll(".cells-row");
  for (let i = 0; i < getEmptyCellRows.length; i++) {
    for (let j = 0; j < 5; j++) {
      const creatEmptyCell = document.createElement("div");
      creatEmptyCell.classList.add("row-cell");
      getEmptyCellRows[i].appendChild(creatEmptyCell);
    }
  }
};

creatGameStructure(s);
