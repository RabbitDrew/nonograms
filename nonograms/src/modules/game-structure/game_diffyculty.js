export const fieldIsEnable = function () {
  const getDropdownItemDifficulty = document.querySelectorAll(
    ".dropdown-item__difficulty",
  );

  let fildIsEnable = 5;
  function getIndexOftheButton(index) {
    if (index === 0) {
      fildIsEnable = 5;
    } else if (index === 1) {
      fildIsEnable = 10;
    } else if ((index === 2)) {
      fildIsEnable = 15;
    }
    console.log(fildIsEnable);
  }

  function reateFielcd(size) {
    const getNumbersRow = document.querySelectorAll(".numbers-row");
    for (let i = 0; i < getNumbersRow.length; i++) {
      for (let j = 0; j < size; j++) {
        const createRowCell = document.createElement("div");
        createRowCell.classList.add("row-cell");
        getNumbersRow[i].appendChild(createRowCell);
      }
    }
    console.log(size);
  }


  for (let i = 0; i < getDropdownItemDifficulty.length; i++) {
    getDropdownItemDifficulty[i].addEventListener("click", (event) => {
      getIndexOftheButton(i);
      reateFielcd(fildIsEnable);
    });
  }

};
