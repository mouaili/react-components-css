import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2.32rem;
  color: rgb(152, 36, 89);
  font-style: italic;
  font-weight: 700;
`;

const TitleH2 = ({ children }) => {
  return <Title>{children}</Title>;
};

export default TitleH2;
