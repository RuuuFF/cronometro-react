import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;

    > i {
      font-size: 1.2rem;
      line-height: 0;
      color: #f1f1f1;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.96);
    }
  }
`;