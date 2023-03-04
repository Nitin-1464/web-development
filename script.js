
  //Player 'X' plays first
  let turn = "X";
  let isgame = false;
 

 // function to change  the  turn
 const changeTurn = () => {
    return turn === "X" ? "0": "X" ;
 }
  
 //win
 const checkwin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let win = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
  ]
  win.forEach( e => { 
   if (( boxtext[e[0]].value ===  boxtext[e[1]].value) && 
    ( boxtext[e[2]].value ===  boxtext[e[1]].value) && ( boxtext[e[0]].value !== "")){
    document.querySelector('.info').value = boxtext[e[0]].value + "Win"
    isgame  = true
    document.write("win")
    }
  })

 }

 //game loga
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector ('.boxtext');
  element.addEventListener('click',()=>{
    if ( boxtext.value === '' ){
        boxtext.value = turn;
       turn  = changeTurn();
      checkwin();
      if(!isgame){
      document.getElementsByClassName("info")[0].innerText  = "Turn for" + turn ;
      }
    }
  });
 });

 //reset
 reset.addEventListener('click',()=>{
  let boxtext = document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(element => {
    element.value = ""
  });
  turn = "X" ;
   
  document.getElementsByClassName("info")[0].innerText  = "Turn for" + turn ;
 })