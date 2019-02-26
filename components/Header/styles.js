import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 1rem 0;
`;

export const Navigation = styled.nav`
  margin: 1rem 0;
  padding: 1rem 0;
  border: 1px solid #aeaeae;
  border-left: none;
  border-right: none;

  a {
    font-family: 'Roboto', sans-serif;
    color: #aeaeae;
    text-decoration: none;
    margin: 0 1rem 0 0;
    font-style: italic;
    letter-spacing: 0.05rem;
    font-size: 1.2rem;
    position: relative;

    &:hover {
      font-weight: bold;
    }

    &:not(:last-child):after {
      content: '';
      position: absolute;
      border-color: transparent transparent transparent #e2e1e1;
      border-style: solid;
      border-width: 2px;
      transform: skewX(-15deg);
      top: 0;
      bottom: 0;
      right: -12px;
    }
  }
`;
