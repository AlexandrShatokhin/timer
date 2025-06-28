import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:rgb(245, 247, 217);
  gap: 20%;
`;

export const StyledButton = styled.button`
  padding: 40px 60px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color:rgb(36, 222, 129);
  color: #fff;
  
  cursor: pointer;
  
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color:rgb(15, 241, 136);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(82,183,136,0.5);
  }
`;
