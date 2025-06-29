import React, { useEffect, useState, useRef } from "react";
import TimeInput from "../../components/TimeInput";
import {
  Container,
  TimerWrapper,
  Title,
  Display,
  TimerNumbers,
  ButtonsWrapper,
  ActiveButton,
  StyledSlider,
  StyledProgress,
} from "./CountdownStyled";
import { LinksWrapper } from "../Timer/TimerStyled";
import { Link } from "react-router-dom";
import { StyledButton } from "../MainPage/MainPageStyled";

export default function Countdown() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [initialTime, setInitialTime] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            new Audio("/alarm.mp3").play();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    const totalSeconds = Number(e.target.value);
    setMinutes(Math.floor(totalSeconds / 60));
    setSeconds(totalSeconds % 60);
  }

  const totalSeconds = minutes * 60 + seconds;

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(totalSeconds);
      setInitialTime(totalSeconds);
    }
  }, [minutes, seconds]);

  const progress = 100 - Math.floor((timeLeft / initialTime) * 100);

  function reset() {
    setIsRunning(false);
    setTimeLeft(initialTime);
  }

  function formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  return (
    <Container>
      <LinksWrapper>
        <Link to="/">
          <StyledButton>Go Back</StyledButton>
        </Link>
        <Link to="/timer">
          <StyledButton>Timer</StyledButton>
        </Link>
      </LinksWrapper>

      <TimerWrapper>
        <Title>Countdown</Title>

        <TimeInput
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          disabled={isRunning}
        />

        <StyledSlider
          type="range"
          min={0}
          max={3600}
          step={15}
          value={minutes * 60 + seconds}
          onChange={handleSliderChange}
          disabled={isRunning}
        />

        <Display>
          <TimerNumbers>{formatTime(timeLeft)}</TimerNumbers>
        </Display>

        <StyledProgress value={progress} max={100} />

        <ButtonsWrapper>
          <ActiveButton onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Pause" : "Start"}
          </ActiveButton>
          <ActiveButton onClick={reset}>Reset</ActiveButton>
        </ButtonsWrapper>
      </TimerWrapper>
    </Container>
  );
}
