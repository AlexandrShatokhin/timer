import { Link } from "react-router-dom";
import { Container, LinksWrapper } from "./TimerStyled";
import { StyledButton } from "../MainPage/MainPageStyled";

const Timer = () => {
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
      <div>
        <h1>Timer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          deleniti harum praesentium enim similique, ullam soluta tenetur
          ducimus! Cum commodi modi sed earum alias ipsa, officia voluptatibus
          illum quaerat placeat.
        </p>
      </div>
    </Container>
  );
};

export default Timer;
