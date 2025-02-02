import { useEffect, useState } from "react";

import Alert from "@mui/material/Alert";

import Stage from "../Stage/Stage";

import { useTetrisLabContext } from "@/context/TetrisLabContext";

// custom hooks
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useInterval } from "../../hooks/useInterval";
import { useGameStatus } from "../../hooks/useGameStatus";

//utils
import { createStage, checkCollision } from "../../utils/gameHelpers";

import styles from "./Tetris.module.scss";

function Tetris() {
  const [droptime, setDroptime] = useState<number | null>(null);
  const [gameover, setGameover] = useState<boolean>(false);

  const { state } = useTetrisLabContext();
  const { playing } = state;

  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  useEffect(() => {
    // reset stage
    setStage(createStage());
    setDroptime(1000);
    resetPlayer();
    setGameover(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  }, [
    playing,
    setStage,
    createStage,
    setDroptime,
    resetPlayer,
    setGameover,
    setScore,
    setRows,
    setLevel,
  ]);

  function movePlayer(direction: number) {
    if (!checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 });
    }
  }

  function drop() {
    // increase lvl when player clears 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // also increase speed
      setDroptime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false });
    } else {
      // Gameover
      if (player.position.y < 1) {
        setGameover(true);
        setDroptime(null);
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true });
    }
  }

  const keyUp = ({ keyCode }: { keyCode: number }) => {
    if (!gameover) {
      if (keyCode === 40) {
        // console.log('interval on');
        setDroptime(1000 / (level + 1) + 200);
      }
    }
  };

  function dropPlayer() {
    setDroptime(null);
    // console.log('interval off');
    drop();
  }

  const move = ({ keyCode }: { keyCode: number }) => {
    if (!gameover) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38 /*up*/ || keyCode === 88 /*X*/) {
        playerRotate(stage, 1);
      } else if (keyCode === 90 /*Z*/) {
        playerRotate(stage, -1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, droptime);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyUp={keyUp}
      onKeyDown={(e) => move(e)}
      className={styles.tetris}
    >
      {gameover && <Alert severity="error">Game Over!</Alert>}

      <Stage stage={stage} />

      <ul className={styles.info}>
        <li>Score: {score.toString()}</li>
        <li>Rows: {rows.toString()}</li>
        <li>Level: {level.toString()}</li>
      </ul>
    </div>
  );
}

export default Tetris;
