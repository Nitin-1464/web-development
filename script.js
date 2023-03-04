//Winning Pattern Array
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //Player 'X' plays first
  let xTurn = true;
  let count = 0;

 // function to change  the  turn
 const changeTurn = () => {
    return turn === "x" ? "0" : "x" ; 

 }