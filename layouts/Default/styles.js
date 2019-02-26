import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');

  body {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }
`;

export const Layout = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;
