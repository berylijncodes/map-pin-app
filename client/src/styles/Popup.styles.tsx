import styled from 'styled-components';

export const StyledPopup = styled.div`
  width: 300px;
  height: 25 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    border-bottom: 2px solid #5543ca;
    color: #5543ca;
    cursor: text;
    font-size: 0.8rem;
    line-height: 26px;
    margin: 0.5em 0;
    width: max-content;
    text-transform: capitalize;
    transition: transform 0.2s ease-in-out;
  }

  h4,
  p,
  span {
    font-size: 1rem;
  }

  div {
    color: #d4af37;
  }
  span {
    color: #918e9b;
  }
`;
