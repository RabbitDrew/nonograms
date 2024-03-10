import { getIndexOftheButton } from "./opened_window.js";
export const fieldIsEnable = function () {
  const getDropdownItemDifficulty = document.querySelectorAll(
    ".dropdown-item__difficulty",
  );
  //current field size
  let fieldSize = 5;
  /*set number of rows of empty cells for game*/
  const getGemeCellsRows = document.querySelector(".game-cells");
  function addRows(size) {
    getGemeCellsRows.innerHTML = "";
    for (let i = 0; i < size; i++) {
      const creatEmptyCellRows = document.createElement("div");
      creatEmptyCellRows.classList.add("cells-row");
      getGemeCellsRows.appendChild(creatEmptyCellRows);
    }
  }
  addRows(fieldSize); //enable 5x5 rows
  /*clean the whole field before change the field size*/
  function removeCellsAndRows() {
    const getNumbersRow = document.querySelectorAll(".numbers-row");
    const getNumbersCollumn = document.querySelectorAll(".number-column");
    const getEmptyCellRows = document.querySelectorAll(".cells-row");
    let getArr = [];
    getArr.push(...getNumbersRow, ...getNumbersCollumn, ...getEmptyCellRows);
    for (let i = 0; i < getArr.length; i++) {
      getArr[i].innerHTML = "";
    }
  }
  /*set diffyculty by changeing amount of number of cells nad rows of the game field*/
  //seting cell for all part of the field
  function addCells(size) {
    const getNumbersRow = document.querySelectorAll(".numbers-row");
    const getNumbersCollumn = document.querySelectorAll(".number-column");
    const getEmptyCellRows = document.querySelectorAll(".cells-row");
    let getArr = [];
    getArr.push(...getNumbersRow, ...getNumbersCollumn, ...getEmptyCellRows);
    for (let i = 0; i < getArr.length; i++) {
      for (let k = 0; k < size; k++) {
        const createRowCell = document.createElement("div");
        createRowCell.classList.add("row-cell");
        getArr[i].appendChild(createRowCell);
      }
    }
  }
  addCells(fieldSize); //enable 5x5 cells
  //set h2 tag for adding titles in cells
  function addCellTitle() {
    const getRowCell = document.querySelectorAll(".row-cell");
    for (let i = 0; i < getRowCell.length; i++) {
      const createRowCellTitle = document.createElement("h2");
      createRowCellTitle.classList.add("cell__title");
      getRowCell[i].appendChild(createRowCellTitle);
    }
  }
  addCellTitle(); //enable 5x5 cell
  for (let i = 0; i < getDropdownItemDifficulty.length; i++) {
    getDropdownItemDifficulty[i].addEventListener("click", (event) => {
      fieldSize = getIndexOftheButton(i);
      addRows(fieldSize);
      removeCellsAndRows();
      addCells(fieldSize);
      addCellTitle();
    });
  }
};
