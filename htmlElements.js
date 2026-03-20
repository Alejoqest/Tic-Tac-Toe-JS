const elements = {
  grid: document.querySelector(".grid"),
  btn: document.querySelector(".btn"),
  playersName: document.querySelectorAll("input"),
};

export const setEvents = (gridClickFun, nameFun, resetFun) => {
  elements.grid.addEventListener("click", (e) => {
    const space = e.target.closest(".space");
    gridClickFun(space);
  });

  for (const player of elements.playersName) {
    player.addEventListener("change", nameFun);
  }

  elements.btn.addEventListener("click", resetFun);
};
