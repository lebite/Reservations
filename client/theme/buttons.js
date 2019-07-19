import styled from 'styled-components';

export const TimeButton = styled.button`
  cursor: pointer;
  background: #da3743;
  color: white;
  margin: .5em;
  padding: 0 .25rem;
  border: 2px solid #da3743;
  border-radius: 2px;
  min-width: 72px;
  height: 32px;
  font-size: .875rem;

  &:hover, &:active ._6f29c471 {
    background: #eea0a5;
    border: 2px solid #eea0a5;
  }
`;

export const FindButton = styled.button`
  cursor: pointer;
  padding: .75rem 1rem;
  text-decoration: none;
  background-color: #da3743;
  color: #fff;
  border: none;
  font-size: 1rem;
  line-height: 1.5;
  width: 18rem;

  &:hover, &:active ._6f29c471 {
    background: #eea0a5;
  }
`;
