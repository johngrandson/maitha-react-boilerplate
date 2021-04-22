import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Loader from '../../components/loader';

const Home = () => {
  const [value, click] = useState(0);
  const [visibility, setVisibility] = useState(true);

  const handleClick = (count) => click((prevState) => prevState + count);
  const handleVisible = () => setVisibility(!visibility);

  return (
    <>
      <Loader visible={visibility} />
      {!visibility && (
        <Container>
          Hi, increment the value:
          <Number>{value}</Number>
          <Button type='button' onClick={() => handleClick(1)}>
            increment
          </Button>
        </Container>
      )}
      <Container>
        <Button type='button' onClick={handleVisible}>
          {visibility ? 'Finish loading' : 'Start loading'}
        </Button>
      </Container>
    </>
  );
};

const Number = styled.span`
  font-size: 50px;
  font-weight: bold;
  display: block;
`;

const Container = styled.h1`
  font-size: 40px;
  width: 100%;
  display: block;
  text-align: center;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  width: 15%;
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

Home.propTypes = {
  value: PropTypes.number,
  click: PropTypes.func.isRequired,
};

export default Home;
