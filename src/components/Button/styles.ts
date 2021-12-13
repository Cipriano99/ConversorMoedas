import styled from 'styled-components';

export const ButtonStyle = styled.button`
  height: 48px;
  width: 100%;
  max-width: 320px;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 0 24px;
  margin: 16px 0 8px;

  &:hover {
    filter: brightness(1.1);
  }
`;
