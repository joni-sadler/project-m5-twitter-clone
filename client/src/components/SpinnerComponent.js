import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "react-icons-kit";
import { spinner } from "react-icons-kit/icomoon/spinner";

const SpinnerComponent = () => {
  return (
    <Wrapper>
      <Icon icon={spinner} size={40}/>
    </Wrapper>
  )
}

const spinAction = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div` 
  animation: ${spinAction} 1000ms; 
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default SpinnerComponent;
