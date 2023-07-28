// AnimatedObject.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const upAndDownAnimation = keyframes`
  0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AnimatedObjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${upAndDownAnimation} 2s infinite;
`;

const AnimatedText = styled.p`
  font-size: 20px;
  color: #000;
  font-weight: 500;
`;

const AnimatedObject = () => {
  return (
    <AnimatedObjectContainer>
      <AnimatedText>Welcome to Myweb</AnimatedText>
    </AnimatedObjectContainer>
  );
};

export default AnimatedObject;
