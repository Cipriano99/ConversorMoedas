import styled from 'styled-components';

export const SelectStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;

  label {
    font-weight: bold;
  }

  select {
    height: 48px;
    color: var(--secondary-color);
    background-color: var(--field-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    padding: 0 8px;
    margin: 8px 0;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
