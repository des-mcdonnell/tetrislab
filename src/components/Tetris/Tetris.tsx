"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInterval } from "usehooks-ts";

import Stage from "../Stage/Stage";
import Scoreboard from "@/components/Scoreboard/Scoreboard";

// custom hooks
import { usePlayer } from "@/hooks/usePlayer";
import { useStage } from "@/hooks/useStage";
import { useGameStatus } from "@/hooks/useGameStatus";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { createStage, checkCollision } from "@/utils/gameHelpers";
import { INTERVAL_METRICS_DELAY } from "@/constants";

import styles from "./Tetris.module.scss";

type TetrisProps = {
  onComplete: () => void;
};

function Tetris({ onComplete }: TetrisProps) {
  const { dispatch, isPaused } = useTetrisLabContext();

  const tetrisRef = useRef<HTMLButtonElement | null>(null);

  const [droptime, setDroptime] = useState<number | null>(null);
  const [gameover, setGameover] = useState<boolean>(false);

  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  console.log("droptime:", droptime);
  console.log("score:", score);
  console.log("rows:", rows);
  console.log("rowsCleared:", rowsCleared);
  console.log("level:", level);

  useInterval(() => {
    const intervalMetric = {
      delay: INTERVAL_METRICS_DELAY,
      time: Date.now(),
      score,
      level,
      rows,
    };

    dispatch({ type: "ADD_INTERVAL_METRICS", intervalMetric });
  }, INTERVAL_METRICS_DELAY);

  useEffect(() => {
    if (gameover) {
      onComplete();
    }
  }, [gameover, onComplete]);

  const handleGameOver = async () => {
    await dispatch({
      type: "ADD_GAME_END",
      game: {
        gameScore: score,
        gameRows: rows,
        gameLevel: level,
      },
    });

    setGameover(true);
    setDroptime(null);
  };

  useEffect(() => {
    // reset stage
    setStage(createStage());
    setDroptime(1000);
    resetPlayer();
    setGameover(false);
    setScore(0);
    setRows(0);
    setLevel(0);

    dispatch({ type: "ADD_GAME_START" });
  }, [dispatch, resetPlayer, setLevel, setRows, setScore, setStage]);

  function movePlayer(direction: number) {
    if (!checkCollision(player, stage, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 });
    }
  }

  function drop() {
    // increase lvl when player clears 10 rows
    if (rows > (level + 1) * 10) {
      const newLevel = level + 1;
      setLevel((prev) => prev + 1);
      // also increase speed
      setDroptime(1000 / (newLevel + 1));
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false });
    } else {
      // Gameover
      if (player.position.y < 1) {
        handleGameOver();
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true });
    }
  }

  const keyUp = ({ keyCode }: { keyCode: number }) => {
    if (!gameover) {
      if (keyCode === 40) {
        setDroptime(level === 0 ? 1000 : 1000 / (level + 1));
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
        if (!isPaused) {
          movePlayer(-1);
        }
      } else if (keyCode === 39) {
        if (!isPaused) {
          movePlayer(1);
        }
      } else if (keyCode === 40) {
        console.log("40");
        if (!isPaused) {
          dropPlayer();
        }
      } else if (keyCode === 38 /*up*/ || keyCode === 88 /*X*/) {
        if (!isPaused) {
          playerRotate(stage, 1);
        }
      } else if (keyCode === 90 /*Z*/) {
        if (!isPaused) {
          playerRotate(stage, -1);
        }
      }
    }
  };

  useInterval(() => {
    if (!isPaused) {
      drop();
    }
  }, droptime);

  // Ensure focus on Tetris 'button'

  const focusOnTetris = () => {
    if (tetrisRef?.current) {
      tetrisRef.current.focus();
    }
  };

  // 1. When resumed after pause
  useEffect(() => {
    if (!isPaused) {
      focusOnTetris();
    }
  }, [isPaused]);

  // 2. When Tetris 'button' is blurred, i.e. when user clicks on background outside of game
  const handleBlur = () => {
    focusOnTetris();
  };

  // 3. When tab is reactivated
  const handleVisibilityChange = useCallback(() => {
    if (document.visibilityState === "visible") {
      focusOnTetris();
    }
  }, []);

  useEffect(() => {
    // Set focus to the input element when the component mounts
    if (tetrisRef.current) {
      tetrisRef.current.focus();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleVisibilityChange]);

  return (
    <button
      tabIndex={0}
      autoFocus={true}
      onKeyUp={keyUp}
      onKeyDown={(e) => move(e)}
      className={styles.tetris}
      ref={tetrisRef}
      onBlur={handleBlur}
      data-cy="tetris-button"
    >
      <Scoreboard score={score} rows={rows} level={level} />
      <Stage stage={stage} />
    </button>
  );
}

export default Tetris;
