import "./dropdown-styles.css";
import { switchTheFlagOfEnabledWin } from "../game_topics/topic_list.js";
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
    createDropDownItemTitle.classList.add("dropdown-item--title__difficulty");
    getDropdownItemDifficulty[i].appendChild(createDropDownItemTitle);
  }
  const dropDownDifficultyTitleArr = ["5x5", "10x10", "15x15"];
  const getDropDownItemDifficultyTitle = document.querySelectorAll(
    ".dropdown-item--title__difficulty",
  );

  for (let i = 0; i < getDropDownItemDifficultyTitle.length; i++) {
    getDropDownItemDifficultyTitle[i].textContent =
      dropDownDifficultyTitleArr[i];
  }
};

//rewrite list of topics according difficulty of the game
/*dropdown theme*/
export const createDropdownTheme = function () {
  const getMenuItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < getMenuItems.length; i++) {
    if (i === 1) {
      const createThemeDropdown = document.createElement("ul");
      createThemeDropdown.classList.add(
        "theme-dropdown",
        "hide_dropdown",
        "animation_open_dropdown",
        "animation_close_dropdown",
      );
      getMenuItems[i].appendChild(createThemeDropdown);
    }
  }

  //------
  const getThemeDropdown = document.querySelector(".theme-dropdown");
  for (let i = 0; i < 5; i++) {
    const createDropdownItemTheme = document.createElement("li");
    createDropdownItemTheme.classList.add("dropdown-item__theme");
    getThemeDropdown.appendChild(createDropdownItemTheme);
  }

  const getDropdownItemTheme = document.querySelectorAll(
    ".dropdown-item__theme",
  );
  for (let i = 0; i < getDropdownItemTheme.length; i++) {
    const createDropDownItemTitle = document.createElement("h2");
    createDropDownItemTitle.classList.add("dropdown-item--title__theme");
    getDropdownItemTheme[i].appendChild(createDropDownItemTitle);
  }

  //assighn arr with list of topicks
  switchTheFlagOfEnabledWin();
  /*
  const dropDownThemeTitleArr = [
  "flag",
  "airplain",
  "sands watch",
  "tower",
  "car"]

  const getDropDownItemThemeTitle = document.querySelectorAll(
    ".dropdown-item--title__theme",
  );
  for (let i = 0; i < getDropDownItemThemeTitle.length; i++) {
    getDropDownItemThemeTitle[i].textContent = dropDownThemeTitleArr[i];
  }
  */
};
/*results list*/
export const creatDropdownResults = function () {
  const getMenuItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < getMenuItems.length; i++) {
    if (i === 6) {
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
