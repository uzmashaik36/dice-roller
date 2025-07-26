 
    function getDiceFace(number) {
      if (number === 1) return "⚀";
      else if (number === 2) return "⚁";
      else if (number === 3) return "⚂";
      else if (number === 4) return "⚃";
      else if (number === 5) return "⚄";
      else return "⚅";
    }

    function rollDice() {
      const dice = document.getElementById("dice");
      const roll = Math.floor(Math.random() * 6) + 1;
      dice.style.transform = "rotate(360deg)";
      setTimeout(() => {
        dice.textContent = getDiceFace(roll);
        dice.style.transform = "rotate(0deg)";
      }, 300);

      const winnerEl = document.getElementById("winner");


      if (roll === 6) {
        winnerEl.style.display = "block";
        confetti();
      }else{
        winnerEl.style.display = "none";
      }
    }
  