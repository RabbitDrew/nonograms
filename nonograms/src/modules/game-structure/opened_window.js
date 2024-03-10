//change the field size according pushed btn on the dropdown panel
export function getIndexOftheButton(index) {
  if (index === 0) {
    return 5;
  } else if (index === 1) {
    return 10;
  } else if (index === 2) {
    return 15;
  }
}
/*flag of enabled windows*/
export function isWindowOpened(size) {
  let objOfFlags = {
    enableField5x5: false,
    enableField10x10: false,
    enableField15x15: false,
  };
  // assigne what is field is enabled
  for (let key in objOfFlags) {
    if (key === "enableField" + size + "x" + size) {
      objOfFlags[key] = true;
    } else {
      objOfFlags[key] = false;
    }
  }
  return objOfFlags;
}
