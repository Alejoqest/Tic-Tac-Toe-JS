export const elements = {
  grid: document.querySelector(".grid"),
  status: document.querySelector("#status"),
  btn: document.querySelector(".btn"),
  playersName: document.querySelectorAll("input"),
  spaces: document.querySelectorAll(".space")
};

export const setEvents = (gridClickFun, nameFun, resetFun) => {
  elements.grid.addEventListener("click", (e) => {
    const space = e.target.closest(".space");
    if (!space) return;
    gridClickFun(space);
  });

  for (const player of elements.playersName) {
    player.addEventListener("change", nameFun);
  }

  elements.btn.addEventListener("click", resetFun);
};
