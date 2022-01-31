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
     }
     isPlaying = true;
     $(this).hide(200);
});

//Placing X and O
$("td div").on("click", function() {
     if(isPlaying) {
          if (x) {
               if (placed[this.id] == null && winner() == undefined) {
                    $("#" + this.id).html("<img src = 'images/close.png'>");
                    $("#" + this.id).hide().slideDown(200);
                    placed[this.id] = "X";
                    moves++;
                    x = false;
               }
          } else {
               if (placed[this.id] == null && winner() == undefined) {
                    $("#" + this.id).html("<img src = 'images/circle.png'>");
                    $("#" + this.id).hide().show(200);
                    placed[this.id] = "O";
                    moves++;
                    x = true;
               }
          }
          if (moves >= 3) {
               if (winner() != undefined) {
                    if (winner() != "Draw") {
                         $("h1").text("Winner is " + winner());
                         $(".Play").text("Restart");
                         $(".Play").show(200);
                         if(winner() == "X") {
                              $("h3").eq($("h3").length - 2).text("1");
                              xScore += 1;
                              $(".sumX").text(xScore);
                         } else {
                              $("h3").eq($("h3").length - 1).text("1");
                              oScore += 1;
                              $(".sumO").text(oScore);
                         }
                         document.querySelector(".container").appendChild(document.createElement("h3")).classList.add("col-6");
                         $("h3").eq($("h3").length - 1).text("0");
                         document.querySelector(".container").appendChild(document.createElement("h3")).classList.add("col-6");
                         $("h3").eq($("h3").length - 1).text("0");
                    } else {
                         $("h1").text("It's a " + winner());
                         $("h3").eq($("h3").length - 2).text("0.5");
                         $("h3").eq($("h3").length - 1).text("0.5");
                         $(".Play").text("Restart");
                         $(".Play").show(200);
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
     //Check the winner from the middle square
     for (var i = 0; i < 4; i++) {
          if (placed[i + 1] == placed[5] && placed[5] == placed[9 - i] && placed[5] != null) {
               winner = placed[5];
               isPlaying = false;
               return winner;
          }
     }
     //Check the winner from side squares
     for (var i = 1; i <= 4; i++) {
          let sideMid = Math.ceil(i * 2);
          if (Math.ceil(sideMid / 3) == 2) {
               if (placed[sideMid] != null && placed[sideMid] == placed[sideMid - 3] && placed[sideMid] == placed[sideMid + 3]) {
                    winner = placed[sideMid];
                    isPlaying = false;
                    return winner;
               }
          } else {
               if (placed[sideMid] != null && placed[sideMid] == placed[sideMid - 1] && placed[sideMid] == placed[sideMid + 1]) {
                    winner = placed[sideMid];
                    isPlaying = false;
                    return winner;
               }
          }
     }

     if (winner == "Draw") {
          if (moves >= 9) {
               isPlaying = false;
               return winner;
          }
     }

}
