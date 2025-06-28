import { Link } from "react-router-dom";
import { Container, StyledButton } from "./MainPageStyled";

const MainPage = () => {
  return (
    <Container>
      <Link to="/timer">
        <StyledButton>Timer</StyledButton>
      </Link>
      <Link to="/countdown">
        <StyledButton>CountDown</StyledButton>
      </Link>
    </Container>
  );
};

export default MainPage;
