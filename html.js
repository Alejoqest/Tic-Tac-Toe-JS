export const getSpaces = () => {
  return document.querySelectorAll(".space");
};

export const getStatus = () => {
  return document.querySelector("#status");
};

export const removeContent = (spaces) => {
  const classes = ["end", "X", "O", "win"];
  for (const space of spaces) {
    for (const c of classes) {
      space.classList.remove(c);
    }
    space.innerText = "";
  }
};

export const setEnd = (spaces) => {
  for (const space of spaces) {
    space.classList.toggle("end");
  }
};

export const setWin = (spaces, pattern) => {
  for (let i = 0; i < pattern.length; i++) {
    spaces[pattern[i]].classList.toggle("win");
  }
};

export const setStatus = (status) => {
  const state = getStatus();
  state.innerText = status;
};

export const setSpace = (space, value) => {
  space.innerText = value;
  space.classList.toggle(value);
};
