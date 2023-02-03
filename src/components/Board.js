import { useEffect, useState } from "react";
import { Chess, load } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function Board() {
  const [game, setGame] = useState();

  useEffect(() => {
    setGame(
      // new Chess("r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1 b - - 0 19")
      new Chess(
        window.location.pathname.replace(/%20/g, " ").substring(1) ||
          "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
      )
    );
  }, []);

  const makeMove = (move) => {
    const gameCopy = new Chess();
    gameCopy.load(game.fen());
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result;
  };

  // function makeRandomMove() {
  //   const possibleMoves = game.moves();
  //   if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
  //     return; // exit if the game is over
  //   const randomIndex = Math.floor(Math.random() * possibleMoves.length);
  //   makeMove(possibleMoves[randomIndex]);
  // }

  //   function onDrop(sourceSquare, targetSquare) {
  //     const move = makeAMove({
  //       from: sourceSquare,
  //       to: targetSquare,
  //       promotion: "q", // always promote to a queen for example simplicity
  //     });

  //     // illegal move
  //     if (move === null) return false;
  //     setTimeout(makeRandomMove, 200);
  //     return true;
  //   }
  const onDrop = (startSquare, endSquare) => {
    const move = makeMove({
      from: startSquare,
      to: endSquare,
      promotion: "q",
    });

    if (move === null) return false;
    return true;
  };

  // console.log(game?.isGameOver());
  // console.log(game?.moves());
  return (
    <Chessboard
      boardWidth={window.innerHeight - 10}
      position={game?.fen()}
      onPieceDrop={onDrop}
    />
  );
}
