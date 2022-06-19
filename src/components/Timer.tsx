import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

export const Timer: React.FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTimer, setBlackTimer] = useState(300);
  const [whiteTimer, setWhiteTimer] = useState(300);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const decrement =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;

    timer.current = setInterval(decrement, 1000);
  }

  function decrementBlackTimer() {
    setBlackTimer((prev) => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTimer((prev) => prev - 1);
  }

  function handleRestart() {
    setWhiteTimer(300);
    setBlackTimer(300);
    restart();
  }

  if (blackTimer === -1) {
    alert("Белые победили");
  }

  if (whiteTimer === -1) {
    alert("Черные победили");
  }

  return (
    <div>
      <div>
        <Button onClick={handleRestart}>Restart game</Button>
      </div>
      <h3>Черные - {blackTimer}</h3>
      <h3>Белые - {whiteTimer}</h3>
    </div>
  );
};
