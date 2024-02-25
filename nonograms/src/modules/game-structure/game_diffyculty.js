export const fieldIsEnable = function () {
  const getDropdownItemDifficulty = document.querySelectorAll(
    ".dropdown-item__difficulty",
  );
  let fieldSize = 5;
  function getIndexOftheButton(index) {
    if (index === 0) {
      fieldSize = 5;
    } else if (index === 1) {
      fieldSize = 10;
    } else if (index === 2) {
      fieldSize = 15;
    }
  }
  /*flag of opened window*/
  let enableField5x5 = false;
  let enableField10x10 = false;
  let enableField15x15 = false;
  function isWindowOpened() {
    if (fieldSize === 5) {
      enableField5x5 = true;
      enableField10x10 = false;
      enableField15x15 = false;
    } else if (fieldSize === 10) {
      enableField5x5 = false;
      enableField10x10 = true;
      enableField15x15 = false;
    } else if (fieldSize === 15) {
      enableField5x5 = false;
      enableField10x10 = false;
      enableField15x15 = true;
    }
  }
  isWindowOpened(); //enable 5x5 flag
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
  for (let i = 0; i < getDropdownItemDifficulty.length; i++) {
    getDropdownItemDifficulty[i].addEventListener("click", (event) => {
      getIndexOftheButton(i);
      addRows(fieldSize);
      removeCellsAndRows();
      addCells(fieldSize);
      isWindowOpened();
    });
  }
};
