export const openCloseDropdowns = function () {
  const getMenuItems = document.querySelectorAll(".nav-item");
  const getDropDownDifficulty = document.querySelector(".difficulty-dropdown");
  const getDropDownResults = document.querySelector(".results-dropdown");

  let dropdownDifficultyIsOpened = false;
  let dropdownResultsIsOpened = false;

  function openDropdown(index) {
    if (index === 0 && dropdownDifficultyIsOpened === false) {
      getDropDownDifficulty.classList.remove("hide_dropdown");
      getDropDownDifficulty.classList.remove("animation_close_dropdown");
      getDropDownDifficulty.classList.add("animation_open_dropdown");
      setTimeout(function () {
        dropdownDifficultyIsOpened = true;
      }, 1000);
    } else if (index === 5 && dropdownResultsIsOpened === false) {
      getDropDownResults.classList.remove("hide_dropdown");
      getDropDownResults.classList.remove("animation_close_dropdown");
      getDropDownResults.classList.add("animation_open_dropdown");
      setTimeout(function () {
        dropdownResultsIsOpened = true;
      }, 1000);
    }
  }

  function closeDropdown(index) {
    if (index === 0 && dropdownDifficultyIsOpened === true) {
      getDropDownDifficulty.classList.remove("animation_open_dropdown");
      getDropDownDifficulty.classList.add("animation_close_dropdown");
      setTimeout(function () {
        getDropDownDifficulty.classList.add("hide_dropdown");
      }, 985);
      setTimeout(function () {
        dropdownDifficultyIsOpened = false;
      }, 1000);
    } else if (index === 5 && dropdownResultsIsOpened === true) {
      getDropDownResults.classList.remove("animation_open_dropdown");
      getDropDownResults.classList.add("animation_close_dropdown");
      setTimeout(function () {
        getDropDownResults.classList.add("hide_dropdown");
      }, 985);
      setTimeout(function () {
        dropdownResultsIsOpened = false;
      }, 1000);
    }
  }
  /*make a button disabled*/
  /*handler*/
  for (let i = 0; i < getMenuItems.length; i++) {
    getMenuItems[i].addEventListener("click", (event) => {
      if (event.target) {
        openDropdown(i);
        closeDropdown(i);
      }
    });
  }
};
openCloseDropdowns();
