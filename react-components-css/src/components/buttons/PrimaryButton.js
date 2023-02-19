import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: tomato;
  border-radius: 3px;
  border: none;
  color: white;
`;

const PrimaryButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default PrimaryButton;
