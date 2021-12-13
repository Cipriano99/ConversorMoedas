import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 24px;
  margin: 0 auto;

  section {
    width: 90%;
    max-width: 1080px;
    margin: 24px 0;

    h3 {
      text-align: center;
    }

    hr {
      margin: 8px 0;
    }

    form,
    .resultado {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 16px;
      flex-wrap: wrap;
      margin-top: 24px;
    }
  }
`;
