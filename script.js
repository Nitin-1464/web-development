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

  /*button click rapeat*/
  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").empty();
    });
  });
  /*element*/
 
  let current = 0;
  function change(event){
    if(current == 0){
      event.value = "X";    
      current = 1;
      document.getElementById(event.id).disabled = true;
    }
    else{
      event.value = "O";
      document.getElementById(event.id).disabled = true;
      current = 0 ;
    }
  }
