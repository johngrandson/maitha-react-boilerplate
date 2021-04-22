import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Loader = ({ visible }) => (visible ? (
  <Container>
    <h1>Loading...</h1>
  </Container>
) : null);

const Container = styled.div`
  font-size: 20px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
