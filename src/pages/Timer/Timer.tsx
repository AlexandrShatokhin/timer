import { Link } from "react-router-dom";
import {
  ActiveButton,
  ButtonsWrapper,
  Container,
  Display,
  LinksWrapper,
  TimerNumbers,
  TimerWrapper,
  Title,
} from "./TimerStyled";
import { StyledButton } from "../MainPage/MainPageStyled";
import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElepsedTime] = useState(0);
  const [flagIsStop, setFlagIsStop] = useState(false);
  const intervalRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElepsedTime(Date.now() - startTimeRef.current);
      }, 40);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  function changeIntervalState() {
    if (!isRunning) {
      setIsRunning(true);
      setFlagIsStop(true);
      startTimeRef.current = Date.now() - elapsedTime;
    } else {
      setIsRunning(false);
    }
  }

  function resetState() {
    setIsRunning(false);
    setFlagIsStop(false);
    setElepsedTime(0);
  }

  function changeActiveBtn() {
    if (!isRunning && !flagIsStop) {
      return "Start";
    } else if (!isRunning && flagIsStop) {
      return "Resume";
    } else {
      return "Stop";
    }
  }

  function formatTime() {
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((elapsedTime / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor(elapsedTime % 1000 / 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <Container>
      <LinksWrapper>
        <Link to="/">
          <StyledButton>Go Back</StyledButton>
        </Link>
        <Link to="/countdown">
          <StyledButton>CountDown</StyledButton>
        </Link>
      </LinksWrapper>
      <TimerWrapper>
        <Title>Timer</Title>
        <Display>
          <TimerNumbers>{formatTime()}</TimerNumbers>
        </Display>
        <ButtonsWrapper>
          <ActiveButton onClick={changeIntervalState}>
            {changeActiveBtn()}
          </ActiveButton>
          <ActiveButton onClick={resetState}>Reset</ActiveButton>
        </ButtonsWrapper>
      </TimerWrapper>
    </Container>
  );
};

export default Timer;
