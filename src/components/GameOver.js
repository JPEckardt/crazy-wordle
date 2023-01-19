import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, setGameOver, correctWord, currAttempt } =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Super du hast das Word erraten, wie toll!"
          : "Haha, du hast verloren 🥸"}
      </h3>
      <h1>Richtig: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>Du hast das Word in {currAttempt.attempt} Versuchen erraten </h3>
      )}
    </div>
  );
}

export default GameOver;
