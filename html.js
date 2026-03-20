export const createGrid = (funSpace) => {
  const space = document.createElement("div");
  space.classList.add("body");

  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.classList.add("flex-el");

  for (let i = 0; i < 9; i++) {
    const s = document.createElement("span");
    s.classList.add("space");
    s.innerText = ``;
    s.addEventListener("click", funSpace);
    grid.appendChild(s);
  }

  space.appendChild(grid);
  document.body.appendChild(space);
};

export const getSpaces = () => {
  return document.querySelectorAll(".space");
};

export const createStatus = (funChange, funGame) => {
  const players = ["X", "O"];

  const body = document.querySelector(".body");

  const space = document.createElement("div");
  space.classList.add("flex-el");

  const info = document.createElement("div");

  const btn = document.createElement("button");
  btn.innerText = "Reiniciar";
  btn.classList.add("btn");
  btn.addEventListener("click", funGame);

  const btnSpace = document.createElement("div");
  btnSpace.classList.add("flex");
  btnSpace.appendChild(btn);

  const status = document.createElement("h1");
  status.id = "status";

  const nameSpace = document.createElement("div");
  nameSpace.classList.add("flex");

  for (const player of players) {
    const pSignature = `jugador${player}`;

    const div = document.createElement("div");

    const input = setInput(player, pSignature, funChange);

    const br = document.createElement("br");

    const label = document.createElement("label");
    label.innerText = `Jugador ${player}`;
    label.htmlFor = pSignature;

    div.appendChild(label);
    div.appendChild(br);
    div.appendChild(input);
    nameSpace.appendChild(div);
  }

  info.appendChild(status);
  info.appendChild(nameSpace);
  info.appendChild(btnSpace);
  space.appendChild(info);
  body.appendChild(space);
};

const setInput = (pValue, pSignature, functionEvent) => {
  const input = document.createElement("input");
  input.id = pSignature;
  input.placeholder = `Ingresar el nombre del jugador`;
  input.name = pSignature;
  input.value = pValue;
  input.required = true;
  input.addEventListener("change", functionEvent);
  return input;
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
