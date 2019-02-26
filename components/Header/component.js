import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Container, Navigation } from './styles';

export const Header = ({ title }) => (
  <Container>
    <h1>{title}</h1>
    <Navigation>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Navigation>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string
};
