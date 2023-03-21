import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
  height: 550px;
  background-color: #1f2937;
  box-shadow: 20px 20px 60px #0e1421, -20px -20px 60px #141c2d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-radius: 15px;

  & a {
    color: #111827;
    text-decoration: none;
    background-color: #d2335c;
    font-size: 17px;
    font-weight: bold;
    padding: 4px 15px;
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`;
