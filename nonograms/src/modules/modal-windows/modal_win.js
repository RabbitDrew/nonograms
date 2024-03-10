import "./modal_win_styles.css";
export const createWinWindow = function () {
  const getMain = document.querySelector(".main");
  const createModlaWinBgWrapper = document.createElement("section");
  createModlaWinBgWrapper.classList.add(
    "modal-win--bg__wrapper",
    "hide-modal-win",
    "modal-win-open_animation",
    "modal-win-close_animation",
  );
  getMain.appendChild(createModlaWinBgWrapper);
  const createWinWindowContainer = document.createElement("div");
  createWinWindowContainer.classList.add("win-window__container");
  createModlaWinBgWrapper.appendChild(createWinWindowContainer);

  const getWinWindowContainer = document.querySelector(
    ".win-window__container",
  );
  const createWindow = document.createElement("div");
  createWindow.classList.add("window");
  getWinWindowContainer.appendChild(createWindow);

  const getWindow = document.querySelector(".window");
  for (let i = 0; i < 2; i++) {
    const createWindowTitleWin = document.createElement("h2");
    createWindowTitleWin.classList.add("window-title__win");
    if (i === 0) {
      createWindowTitleWin.textContent = "good job,";
    } else if (i === 1) {
      createWindowTitleWin.textContent = "you've won";
    }
    getWindow.appendChild(createWindowTitleWin);
  }
  const createWindowBtn = document.createElement("div");
  createWindowBtn.classList.add("window-btn");
  getWindow.appendChild(createWindowBtn);
  const createBtnTitleWin = document.createElement("h2");
  createBtnTitleWin.classList.add("btn-title__win");
  createBtnTitleWin.textContent = "play again";
  createWindowBtn.appendChild(createBtnTitleWin);
};
createWinWindow();
