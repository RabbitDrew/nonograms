const body = document.querySelector(".page");

/*header*/
const header = document.createElement("header");
header.classList.add("header");
body.appendChild(header);

const headerTitleWrapper = document.createElement("div");
headerTitleWrapper.classList.add("header-title__wrapper");
header.appendChild(headerTitleWrapper);

const title = document.createElement("h2");
title.classList.add("title");
title.textContent = "nonograms";
headerTitleWrapper.appendChild(title);

const nav = document.createElement("nav");
nav.classList.add("nav");
header.appendChild(nav);

const navPanel = document.createElement("ul");
navPanel.classList.add("nav-panel");
nav.appendChild(navPanel);

const panelItem1 = document.createElement("li");
panelItem1.classList.add("panel-item");
navPanel.appendChild(panelItem1);

const panelItemTitle1 = document.createElement("h2");
panelItemTitle1.classList.add("panel-item__title", "start");
panelItemTitle1.textContent = "start the game";
panelItem1.appendChild(panelItemTitle1);

const panelItemTitle2 = document.createElement("h2");
panelItemTitle2.classList.add("panel-item__title", "stop");
panelItemTitle2.textContent = "stop the game";
panelItem1.appendChild(panelItemTitle2);

const panelItem2 = document.createElement("li");
panelItem2.classList.add("panel-item");
navPanel.appendChild(panelItem2);

const panelItemTitle3 = document.createElement("h2");
panelItemTitle3.classList.add("panel-item__title");
panelItemTitle3.textContent = "chose the game topic";
panelItem2.appendChild(panelItemTitle3);

const panelItem3 = document.createElement("li");
panelItem3.classList.add("panel-item");
navPanel.appendChild(panelItem3);

const panelItemTitle4 = document.createElement("h2");
panelItemTitle4.classList.add("panel-item__title");
panelItemTitle4.textContent = "reset the game";
panelItem3.appendChild(panelItemTitle4);

const panelItem4 = document.createElement("li");
panelItem4.classList.add("panel-item");
navPanel.appendChild(panelItem4);

const panelItemTitle5 = document.createElement("h2");
panelItemTitle5.classList.add("panel-item__title");
panelItemTitle5.textContent = "game difficulty";
panelItem4.appendChild(panelItemTitle5);

const headerTimer = document.createElement("div");
headerTimer.classList.add("header-timer");
header.appendChild(headerTimer);

const timerItem1 = document.createElement("h2");
timerItem1.classList.add("timer-item");
timerItem1.textContent = "00";
headerTimer.appendChild(timerItem1);

const timerItem2 = document.createElement("h2");
timerItem2.classList.add("timer-item");
timerItem2.textContent = ":";
headerTimer.appendChild(timerItem2);

const timerItem3 = document.createElement("h2");
timerItem3.classList.add("timer-item");
timerItem3.textContent = "00";
headerTimer.appendChild(timerItem3);

/*main*/
const main = document.createElement("main");
main.classList.add("container");
body.appendChild(main);

const right = document.createElement("div");
right.classList.add("right");
main.appendChild(right);

const attemptsWrapper = document.createElement("div");
attemptsWrapper.classList.add("attempts__wrapper");
right.appendChild(attemptsWrapper);

/*attempts*/
for (let i = 0; i < 4; i++) {
  const attemptsTitle = document.createElement("h2");
  attemptsTitle.classList.add("attempts__title");
  attemptsWrapper.appendChild(attemptsTitle);
}
const attemptsTitle = document.querySelectorAll(".attempts__title");
const attemptsValue = ["attempts", "0", "/", "3"];
for (let i = 0; i < attemptsTitle.length; i++) {
  attemptsTitle[i].textContent = attemptsValue[i];
}

/*game flag*/
const gameWrapper = document.createElement("div");
gameWrapper.classList.add("game__wrapper", "flag");
right.appendChild(gameWrapper);

const topPart = document.createElement("div");
topPart.classList.add("top");
gameWrapper.appendChild(topPart);

const gameDiff = document.createElement("div");
gameDiff.classList.add("game-diff");
topPart.appendChild(gameDiff);

const inputColor = document.createElement("input");
inputColor.setAttribute("id", "color");
inputColor.setAttribute("type", "color");
inputColor.setAttribute("name", "bg");
inputColor.setAttribute("value", "#000");
gameDiff.appendChild(inputColor);

const gameHeader = document.createElement("table");
gameHeader.classList.add("game-header");
topPart.appendChild(gameHeader);

const headerBody = document.createElement("tbody");
headerBody.classList.add("header-body");
gameHeader.appendChild(headerBody);

for (let i = 0; i < 3; i++) {
  const headerRow = document.createElement("tr");
  headerRow.classList.add("header-row");
  headerBody.appendChild(headerRow);
}
//
const headerRow = document.querySelectorAll(".header-row");
for (let i = 0; i < headerRow.length; i++) {
  for (let j = 0; j < 5; j++) {
    const rowCell = document.createElement("td");
    rowCell.classList.add("row-cell");
    headerRow[i].appendChild(rowCell);
  }
}
//
const rowCell = document.querySelectorAll(".row-cell");
for (let i = 0; i < rowCell.length; i++) {
  const cellTitle = document.createElement("h2");
  cellTitle.classList.add("cell-title");
  rowCell[i].appendChild(cellTitle);
}

const cellTitle = document.querySelectorAll(".cell-title");
cellTitle[6].textContent = "1";
cellTitle[8].textContent = "1";
cellTitle[10].textContent = "5";
cellTitle[11].textContent = "1";
cellTitle[12].textContent = "3";
cellTitle[13].textContent = "1";
cellTitle[14].textContent = "3";

const leftPart = document.createElement("div");
leftPart.classList.add("left");
gameWrapper.appendChild(leftPart);

const gameAside = document.createElement("table");
gameAside.classList.add("game-aside");
leftPart.appendChild(gameAside);

const asideBody = document.createElement("tbody");
asideBody.classList.add("aside-body");
gameAside.appendChild(asideBody);

for (let i = 0; i < 5; i++) {
  const asideColumn = document.createElement("tr");
  asideColumn.classList.add("aside-column");
  asideBody.appendChild(asideColumn);
}

const asideColumn = document.querySelectorAll(".aside-column");
for (let i = 0; i < asideColumn.length; i++) {
  for (let j = 0; j < 3; j++) {
    const columnCell = document.createElement("td");
    columnCell.classList.add("column-cell");
    asideColumn[i].appendChild(columnCell);
  }
}

const columnCell = document.querySelectorAll(".column-cell");
for (let i = 0; i < columnCell.length; i++) {
  const columnCellTitle = document.createElement("h2");
  columnCellTitle.classList.add("cell-title__column");
  columnCell[i].appendChild(columnCellTitle);
}

const columnCellTitle = document.querySelectorAll(".cell-title__column");
columnCellTitle[2].textContent = "5";
columnCellTitle[3].textContent = "1";
columnCellTitle[4].textContent = "1";
columnCellTitle[5].textContent = "1";
columnCellTitle[8].textContent = "5";
columnCellTitle[11].textContent = "1";
columnCellTitle[14].textContent = "1";

const gameField = document.createElement("table");
gameField.classList.add("game-field");
leftPart.appendChild(gameField);

const fieldBody = document.createElement("tbody");
fieldBody.classList.add("field-body");
gameField.appendChild(fieldBody);

for (let i = 0; i < 5; i++) {
  const bodyRow = document.createElement("tr");
  bodyRow.classList.add("body-row");
  fieldBody.appendChild(bodyRow);
}

const bodyRow = document.querySelectorAll(".body-row");
for (let i = 0; i < bodyRow.length; i++) {
  for (let j = 0; j < 5; j++) {
    const rowCellBody = document.createElement("td");
    rowCellBody.classList.add("row-cell__body");
    bodyRow[i].appendChild(rowCellBody);
  }
}

/*modla window*/
const gameTopic = document.createElement("div");
gameTopic.classList.add(
  "game-topics__wrapper",
  "topics-animation_open",
  "topics-animation_close",
  "topics-hidden",
);
main.appendChild(gameTopic);

const topicsWrapper = document.createElement("div");
topicsWrapper.classList.add("topics__wrapper");
gameTopic.appendChild(topicsWrapper);

const topics = document.createElement("div");
topics.classList.add("topics");
topicsWrapper.appendChild(topics);

for (let i = 0; i < 3; i++) {
  const topicTitle = document.createElement("h2");
  topicTitle.classList.add("topic-title");
  topics.appendChild(topicTitle);
}

const topicsTitle = document.querySelectorAll(".topic-title");
const arrTopics = ["flag", "sands watch", "airplain"];
for (let i = 0; i < topicsTitle.length; i++) {
  topicsTitle[i].textContent = arrTopics[i];
}
