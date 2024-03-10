import "./header_style.css";

import { createDropdownDifficulty } from "../modal-windows/dropdown.js";
import { creatDropdownResults } from "../modal-windows/dropdown.js";
import { createDropdownTheme } from "../modal-windows/dropdown.js";

export const body = document.querySelector(".page");
export const createHeader = function () {
  const createHeader = document.createElement("header");
  createHeader.classList.add("page-header");
  body.appendChild(createHeader);
  /*headader title*/
  const createHeaderTitle = document.createElement("div");
  createHeaderTitle.classList.add("header-title");
  createHeader.appendChild(createHeaderTitle);
  const createTitle = document.createElement("h1");
  createTitle.classList.add("title");
  createTitle.textContent = "nonograms";
  createHeaderTitle.appendChild(createTitle);
  /*header-nav*/
  const createHeaderNav = document.createElement("nav");
  createHeaderNav.classList.add("header-nav");
  createHeader.appendChild(createHeaderNav);
  const createNavWrapper = document.createElement("ul");
  createNavWrapper.classList.add("nav__wrapper");
  createHeaderNav.appendChild(createNavWrapper);
  for (let i = 0; i < 8; i++) {
    const createNavItem = document.createElement("li");
    createNavItem.classList.add("nav-item");
    createNavWrapper.appendChild(createNavItem);
  }
  const itemTitelsArr = [
    "game difficulty",
    "game theme",
    "reset",
    "solution",
    "save",
    "load the last game",
    "results",
    "dark mode",
    "light mode",
  ];
  const getMenuItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < getMenuItems.length; i++) {
    const createItemtitle = document.createElement("h2");
    if (i >= 0 && i < 8) {
      createItemtitle.classList.add("item-title");
      getMenuItems[i].appendChild(createItemtitle);
    } else if (i === 7) {
      createItemtitle.classList.add("item-title", "close_light");
      getMenuItems[i].appendChild(createItemtitle);
    } else if (i === 8) {
      createItemtitle.classList.add("item-title", "close_dark");
      getMenuItems[i].appendChild(createItemtitle);
    }
  }
  /*dropdown*/
  createDropdownDifficulty();
  createDropdownTheme();
  creatDropdownResults();
  const getItemTitle = document.querySelectorAll(".item-title");
  for (let i = 0; i < getItemTitle.length; i++) {
    getItemTitle[i].textContent = itemTitelsArr[i];
  }

  /*timer*/
  const createHeaderTimer = document.createElement("div");
  createHeaderTimer.classList.add("header-timer--theme");
  createHeader.appendChild(createHeaderTimer);
  for (let i = 0; i < 3; i++) {
    const createTimerTitle = document.createElement("h2");
    createTimerTitle.classList.add("timer-title");
    createHeaderTimer.appendChild(createTimerTitle);
  }
  const timerTitlesArr = ["XX", ":", "XX"];
  const getTimerTitle = document.querySelectorAll(".timer-title");
  for (let i = 0; i < getTimerTitle.length; i++) {
    getTimerTitle[i].textContent = timerTitlesArr[i];
  }
};
createHeader();
