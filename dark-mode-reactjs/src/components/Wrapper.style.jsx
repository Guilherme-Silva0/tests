import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.text};
  width: 400px;
  height: 550px;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 20px 20px 60px ${({ theme }) => theme.shandow1},
    -20px -20px 60px ${({ theme }) => theme.shandow2};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 15px;
  padding: 40px;

  transition: 0.5s;
`;
