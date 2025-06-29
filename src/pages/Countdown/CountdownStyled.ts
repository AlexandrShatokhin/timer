import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(245, 247, 217);
  gap: 20%;
  padding: 40px 20px;
`;

export const TimerWrapper = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  max-width: 800px;
  border: 3px solid;
  border-radius: 50px;
  background-color: white;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 42px;
  text-align: center;
`;

export const Display = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  background-color: rgb(241, 250, 215);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 114, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 115, 255, 0);
    background-color: #e0f7fa;
    cursor: pointer;
  }
`;

export const TimerNumbers = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 36px auto;
`;

export const ActiveButton = styled.button`
  width: 120px;
  padding: 20px;
  margin: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 114, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 114, 255, 0.4);
    background: linear-gradient(135deg, #0099cc, #006699);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
    background: linear-gradient(135deg, #006699, #003366);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 198, 255, 0.3),
      inset 0 0 8px rgba(0, 114, 255, 0.3);
    background: linear-gradient(135deg, #00bfff, #0066cc);
    transition: box-shadow 0.3s ease;
  }
`;

export const StyledSlider = styled.input`
  width: 100%;
  margin: 20px 0;
`;

export const StyledProgress = styled.progress`
  width: 100%;
  height: 16px;
  border-radius: 8px;
  overflow: hidden;
  &::-webkit-progress-bar {
    background-color: #eee;
  }
  &::-webkit-progress-value {
    background-color: #007bff;
  }
`;
