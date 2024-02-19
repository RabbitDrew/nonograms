/*choseing difficulties*/
export const createDropdownDifficulty = function () {
  const getMenuItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < getMenuItems.length; i++) {
    if (i === 0) {
      const createDifficultyDropdown = document.createElement("ul");
      createDifficultyDropdown.classList.add(
        "difficulty-dropdown",
        "hide_dropdown",
        "animation_open_dropdown",
        "animation_close_dropdown",
      );
      getMenuItems[i].appendChild(createDifficultyDropdown);
    }
  }
  const getDifficultyDropDown = document.querySelector(".difficulty-dropdown");
  for (let i = 0; i < 3; i++) {
    const dropdownItemDifficulty = document.createElement("li");
    dropdownItemDifficulty.classList.add("dropdown-item__difficulty");
    getDifficultyDropDown.appendChild(dropdownItemDifficulty);
  }
  const getDropdownItemDifficulty = document.querySelectorAll(
    ".dropdown-item__difficulty",
  );
  for (let i = 0; i < getDropdownItemDifficulty.length; i++) {
    const createDropDownItemTitle = document.createElement("h2");
    createDropDownItemTitle.classList.add("dropdown-item__title");
    getDropdownItemDifficulty[i].appendChild(createDropDownItemTitle);
  }
  const dropDownTitleArr = ["5x5", "10x10", "15x15"];
  const getDropDownItemTitle = document.querySelectorAll(
    ".dropdown-item__title",
  );
  for (let i = 0; i < getDropDownItemTitle.length; i++) {
    getDropDownItemTitle[i].textContent = dropDownTitleArr[i];
  }
};
/*results list*/
export const creatDropdownResults = function () {
  const getMenuItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < getMenuItems.length; i++) {
    if (i === 5) {
      const createResultsDropdown = document.createElement("ul");
      createResultsDropdown.classList.add(
        "results-dropdown",
        "hide_dropdown",
        "animation_open_dropdown",
        "animation_close_dropdown",
      );
      getMenuItems[i].appendChild(createResultsDropdown);
    }
  }

  /*example string in the results dropdown*/
  const getResultsDropdown = document.querySelector(".results-dropdown");
  const creatDropdownItemResults = document.createElement("li");
  creatDropdownItemResults.classList.add("dropdown-item__results");
  getResultsDropdown.appendChild(creatDropdownItemResults);
  for (let i = 0; i < 2; i++) {
    const createDropdownItems = document.createElement("div");
    if (i === 0) {
      createDropdownItems.classList.add("item-picture__wrapper");
    } else if (i === 1) {
      createDropdownItems.classList.add("item-finish--time__wrapper");
    }
    creatDropdownItemResults.appendChild(createDropdownItems);
  }
  const getItemPictureWrapper = document.querySelector(
    ".item-picture__wrapper",
  );
  const createItimPicture = document.createElement("h2");
  createItimPicture.classList.add("item-picture");
  createItimPicture.textContent = "Flag";
  getItemPictureWrapper.appendChild(createItimPicture);

  const getItemFinishTimeWrapper = document.querySelector(
    ".item-finish--time__wrapper",
  );
  for (let i = 0; i < 3; i++) {
    const creatTimerTitle = document.createElement("h2");
    creatTimerTitle.classList.add("item-finish");
    getItemFinishTimeWrapper.appendChild(creatTimerTitle);
  }
  const getTimerTitle = document.querySelectorAll(".item-finish");
  const itemFinishArr = ["XX", ":", "XX"];
  for (let i = 0; i < getTimerTitle.length; i++) {
    getTimerTitle[i].textContent = itemFinishArr[i];
  }
};
