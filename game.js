let x = true;
let moves = 0;
const placed = [];
let isPlaying = false;
let xScore = 0;
let oScore = 0;


//Scoreboard Size Check
if($("div h3").length/2 >= 7) {
     $(".container").css("height", "320px");
}

//Play Button
$(".Play").on("click", function() {
     for(var i = 1; i <= 9; i++) {
          $("#" + i).html("<img src = ''>");
          moves = 0; x = true; placed.length = 0;
          $("h1").text("Tic-Tac-Toe");
          $(".lines").hide();
     }
     isPlaying = true;
     $(this).hide(200);
});

//Placing X and O
$("td div").on("click", function() {
     if(isPlaying) {
          //Placing X
          if (x) {
               if (placed[this.id] == null && winner() == undefined) {
                    $("#" + this.id).html("<img src = 'images/close.png'>");
                    $("#" + this.id).hide().slideDown(200);
                    placed[this.id] = "X";
                    moves++;
                    x = false;
               }
          }
          //Placing O
          else {
               if (placed[this.id] == null && winner() == undefined) {
                    $("#" + this.id).html("<img src = 'images/circle.png'>");
                    $("#" + this.id).hide().show(200);
                    placed[this.id] = "O";
                    moves++;
                    x = true;
               }
          }

          if (moves >= 3) {
               //Checking if game has ended and there is a winner
               if (winner() != undefined) {
                    if (winner() != "Draw") {
                         $("h1").text("Winner is " + winner());
                         $(".Play").text("Restart");
                         $(".Play").show(200);
                         if(winner() == "X") {
                              //Adding +1 point for the player X
                              $("h3").eq($("h3").length - 2).text("1");
                              xScore += 1;
                              $(".sumX").text(xScore);
                         } else {
                              //Adding +1 point for the player O
                              $("h3").eq($("h3").length - 1).text("1");
                              oScore += 1;
                              $(".sumO").text(oScore);
                         }
                         //Adding new game scores to the scoreboard
                         document.querySelector(".container").appendChild(document.createElement("h3")).classList.add("col-6");
                         $("h3").eq($("h3").length - 1).text("0");
                         document.querySelector(".container").appendChild(document.createElement("h3")).classList.add("col-6");
                         $("h3").eq($("h3").length - 1).text("0");
                    } else {
                         //If the game is a draw
                         $("h1").text("It's a " + winner());
                         //Adding 0.5 points to the players
                         $("h3").eq($("h3").length - 2).text("0.5");
                         $("h3").eq($("h3").length - 1).text("0.5");
                         $(".Play").text("Restart");
                         $(".Play").show(200);
                         //Adding new game 0 0 scores
                         document.querySelector(".container").appendChild(document.createElement("h3")).classList.add("col-6");
                         $("h3").eq($("h3").length - 1).text("0");
                         document.querySelector(".container").appendChild(document.createElement("h3")).classList.add("col-6");
                         $("h3").eq($("h3").length - 1).text("0");
                         xScore += 0.5;
                         oScore += 0.5;
                         $(".sumX").text(xScore);
                         $(".sumO").text(oScore);
                    }
                    if($("h3").length >= 14) {
                         $(".container").css("height", "290px");
                    }
               }
          }
     }
});

//Determine the Winner
function winner() {
     let winner = "Draw";

     //Check the winner diagonally
     if(placed[5] == placed[1] && placed[5] == placed[9] && placed[5] != null) {
          winner = placed[5];
          isPlaying = false;
          $(".line-7").show(200);
          return winner;
     }
     if(placed[5] == placed[3] && placed[5] == placed[7] && placed[5] != null) {
          winner = placed[5];
          isPlaying = false;
          $(".line-8").show(200);
          return winner;
     }

     //Check the winner vertically
     if(placed[1] == placed[4] && placed[4] == placed[7] && placed[4] != null) {
          winner = placed[4];
          isPlaying = false;
          return winner;
     }
     if(placed[2] == placed[5] && placed[5] == placed[8] && placed[5] != null) {
          winner = placed[5];
          isPlaying = false;
          return winner;
     }
     if(placed[3] == placed[6] && placed[6] == placed[9] && placed[6] != null) {
          winner = placed[6];
          isPlaying = false;
          return winner;
     }

     //Check the winner horizontally
     if(placed[1] == placed[2] && placed[2] == placed[3] && placed[2] != null) {
          winner = placed[2];
          isPlaying = false;
          return winner;
     }
     if(placed[4] == placed[5] && placed[5] == placed[6] && placed[5] != null) {
          winner = placed[5];
          isPlaying = false;
          return winner;
     }
     if(placed[7] == placed[8] && placed[8] == placed[9] && placed[8] != null) {
          winner = placed[8];
          isPlaying = false;
          return winner;
     }

     if (winner == "Draw") {
          if (moves >= 9) {
               isPlaying = false;
               return winner;
          }
     }

}
