import {
  createGrid,
  createStatus,
  getSpaces,
  setEnd,
  setWin,
  removeContent,
  setStatus,
  setSpace,
} from "./html.js";

export const ticTacToe = () => {
  let turnoX = false;
  let turno = 1;
  let hasTie = false;
  let hasEnded = false;

  let p1 = "X";
  let p2 = "O";

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleClick = (e) => {
    const space = e.target;
    if (hasEnded || hasTie || space.innerText != "") return;
    const val = turnoX ? "X" : "O";
    setSpace(space, val);
    checkInput();
  };

  const checkInput = () => {
    const spaces = getSpaces();

    for (let pattern of winPatterns) {
      let val1 = spaces[pattern[0]].innerText;
      let val2 = spaces[pattern[1]].innerText;
      let val3 = spaces[pattern[2]].innerText;

      if (
        val1 != "" &&
        val2 != "" &&
        val3 != "" &&
        val1 == val2 &&
        val2 == val3
      ) {
        hasEnded = true;
        setWin(spaces, pattern);
        endGame(spaces);
        return;
      }
    }
    changeTurn(spaces);
  };

  const changeTurn = (spaces) => {
    turnoX = !turnoX;
    turno = ++turno;
    if (turno == 10) setGame(true, true);
    if (hasEnded) endGame(spaces);
    changeStatus();
  };

  const setGame = (tie, ended) => {
    hasTie = tie;
    hasEnded = ended;
  };

  const setRandomOrder = () => {
    turnoX =
      Math.floor(Math.random() * (10 - 1 + 1) + 1) % 2 == 0 ? true : false;
  };

  const changeName = (e) => {
    const input = e.target;
    const includesX = input.id.includes("X");
    const originalValue = includesX ? p1 : p2;
    const setValue = includesX ? setP1 : setP2;
    let value = e.target.value || originalValue;
    input.value = value;
    setValue(value);
    changeStatus();
  };

  const setP1 = (player) => {
    p1 = player;
  };

  const setP2 = (player) => {
    p2 = player;
  };

  const changeStatus = () => {
    const curPlayer = turnoX ? p1 : p2;
    const status = hasEnded
      ? hasTie
        ? "Empate!"
        : `Victoria de ${curPlayer}!`
      : turno == 1
      ? `Empieza ${curPlayer}`
      : `Turno ${turno} : Juega ${curPlayer}`;
    setStatus(status);
  };

  const endGame = (spaces) => {
    setEnd(spaces);
    changeStatus();
  };

  const startGame = () => {
    setRandomOrder();
    turno = 1;
    setGame(false, false);
    const spaces = getSpaces();
    removeContent(spaces);
    changeStatus();
  };

  const runGame = () => {
    createGrid(handleClick);
    createStatus(changeName, startGame);
    startGame();
  };

  runGame();
};
