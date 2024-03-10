import { getIndexOftheButton } from "../game-structure/opened_window.js";
export const switchTheFlagOfEnabledWin = function () {
  let fieldSize = 5; //current field size
  let dropDownThemeTitleArr = []; //arr of topicks
  let listOne = ["flag", "airplain", "sands watch", "tower", "car"];
  let listTwo = ["house", "postcard", "baloon", "tv", "tree"];
  let listThree = ["house", "custle", "peaks", "sun", "churhc"];
  //get right topick according to size difficulties
  function switchList(size) {
    if (size === 5) {
      dropDownThemeTitleArr = listOne;
    } else if (size === 10) {
      dropDownThemeTitleArr = listTwo;
    } else if (size === 15) {
      dropDownThemeTitleArr = listThree;
    }
  }
  switchList(fieldSize);
  //write the right list of topoicks
  function rewriteList() {
    const getDropDownItemThemeTitle = document.querySelectorAll(
      ".dropdown-item--title__theme",
    );
    for (let i = 0; i < getDropDownItemThemeTitle.length; i++) {
      getDropDownItemThemeTitle[i].textContent = dropDownThemeTitleArr[i];
    }
  }
  rewriteList();
  //btn
  const getDropdownItemDifficulty = document.querySelectorAll(
    ".dropdown-item__difficulty",
  );
  for (let i = 0; i < getDropdownItemDifficulty.length; i++) {
    getDropdownItemDifficulty[i].addEventListener("click", (event) => {
      fieldSize = getIndexOftheButton(i);
      switchList(fieldSize);
      rewriteList(dropDownThemeTitleArr);
    });
  }
};
