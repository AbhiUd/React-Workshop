import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  color: blue;
`;
const Card = styled.div`
  padding: 10px;
  width: 500px;
  height: 50px;
  background: yellow;
  margin:20px;
`;
const Template = () => {
  return (
    <>
      <Card>
        <Title>React Workshop</Title>
      </Card>
    </>
  );
};

export default Template;
