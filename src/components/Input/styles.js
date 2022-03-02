import styled from 'styled-components'

const color = '#f1f1f1';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;

  > span {
    font-size: 2.2rem;
    color: ${color};
    width: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 0.4rem;
    position: relative;
    z-index: 3;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    .input-set {
      display: flex;
      flex-direction: column;

      button {
        background-color: transparent;
        opacity: 0.6;
        color: ${color};
        padding: 4px;
        position: relative;
        z-index: 1;

        &:hover {
          opacity: 1;
        }
      }

      input {
        background-color: #101010;
        text-align: center;
        font-size: 2.4rem;
        color: ${color}aa;
        padding: 12px 0;
        width: 80px;
        position: relative;
        z-index: 1;

        &:focus {
          background-color: #212121;
          color: ${color};
          outline: 1px solid ${color};
          z-index: 2;
        }

        &::-webkit-inner-spin-button, 
        &::-webkit-outer-spin-button { 
          -webkit-appearance: none;
        }
      } 
    }
  }
`;