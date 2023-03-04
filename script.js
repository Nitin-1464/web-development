
  //Player 'X' plays first
  let turn = "X";
 

 // function to change  the  turn
 const changeTurn = () => {
    return turn === "x" ? "0": "X"
 }
 //win
 const checkwin = () => {
  let wins = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
  ];

 }

 //game loga
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector ('.boxtext');
  element.addEventListener('click',()=>{
    if ( boxtext.value === '' ){
        boxtext.value = turn;
       turn  = changeTurn ();
      checkwin();
      document.getElementsByClassName("info")[0].innerText  = "Turn for" + turn;
    }
  })
 })