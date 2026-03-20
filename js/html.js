import { elements } from "./htmlElements.js";

export const getValues = () => {
  return [...elements.spaces].map((v) => v.innerText);
}

export const clearNames = () => {
  const players = elements.playersName;
  for (const player of players) {
    player.value = player.id.split("jugador").filter((v) => v != ",").pop();
  }
}

export const removeContent = () => {
  const spaces = elements.spaces;
  const classes = ["end", "X", "O", "win"];
  for (const space of spaces) {
    for (const c of classes) {
      space.classList.remove(c);
    }
    space.innerText = "";
  }
};

export const setEnd = () => {
  const spaces = elements.spaces;
  for (const space of spaces) {
    space.classList.toggle("end");
  }
};

export const setWin = (pattern) => {
  const spaces = elements.spaces;
  for (let i = 0; i < pattern.length; i++) {
    spaces[pattern[i]].classList.toggle("win");
  }
};

export const setStatus = (status) => {
  const state = elements.status;
  state.innerText = status;
};

export const setSpace = (space, value) => {
  space.innerText = value;
  space.classList.toggle(value);
};
