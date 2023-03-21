import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.text2};
  border: none;
  background-color: ${(props) => props.background || props.theme.tertiary};
  font-size: 17px;
  font-weight: bold;
  padding: 8px 19px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;
