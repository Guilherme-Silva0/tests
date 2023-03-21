import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.darker};
  border: none;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.blue};
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
