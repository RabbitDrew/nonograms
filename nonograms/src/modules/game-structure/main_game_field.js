import { body } from "../header/header.js";
import { fieldIsEnable } from "../game-structure/game_diffyculty.js";
export const creatGameStructure = function (size) {
  /* main page structure*/
  const createMain = document.createElement("main");
  createMain.classList.add("main");
  body.appendChild(createMain);
  //left side of the page
  const createLeftPart = document.createElement("div");
  createLeftPart.classList.add("main-left__part");
  createMain.appendChild(createLeftPart);
  //right part of the page
  const createRightPart = document.createElement("div");
  createRightPart.classList.add("main-right__part");
  createMain.appendChild(createRightPart);
  /*game-structure*/
  const createGameField = document.createElement("div");
  createGameField.classList.add("right-game--field");
  createRightPart.appendChild(createGameField);
  //top part of field
  const createGameTop = document.createElement("div");
  createGameTop.classList.add("game__top");
  createGameField.appendChild(createGameTop);
  //top-left
  const createGmaeType = document.createElement("div");
  createGmaeType.classList.add("game-type");
  createGameTop.appendChild(createGmaeType);
  //top-right; left-bottom; right-bottom
  const createGamenumbersRows = document.createElement("div");
  createGamenumbersRows.classList.add("game-numbers__rows");
  createGameTop.appendChild(createGamenumbersRows);
  for (let i = 0; i < 3; i++) {
    const createNumbersRow = document.createElement("div");
    createNumbersRow.classList.add("numbers-row");
    createGamenumbersRows.appendChild(createNumbersRow);
  }
  const createGameBottom = document.createElement("div");
  createGameBottom.classList.add("game__bottom");
  createGameField.appendChild(createGameBottom);
  const createGameNumbersColumns = document.createElement("div");
  createGameNumbersColumns.classList.add("game-numbers__column");
  createGameBottom.appendChild(createGameNumbersColumns);
  for (let i = 0; i < 3; i++) {
    const createNumbersCollumn = document.createElement("div");
    createNumbersCollumn.classList.add("number-column");
    createGameNumbersColumns.appendChild(createNumbersCollumn);
  }
  const createGameCells = document.createElement("div");
  createGameCells.classList.add("game-cells");
  createGameBottom.appendChild(createGameCells);
  fieldIsEnable(); /*function for setting diffyculty*/
};

creatGameStructure();
