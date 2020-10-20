import styled from 'styled-components'

export const Container = styled.div`
  .colored:nth-child(1) {
    background: #CBCBCB;
  }
  .colored:nth-child(2) {
    background: #B2B2B2;
  }
  .colored:nth-child(3) {
    background: #999999;
  }
  .colored:nth-child(4) {
    background: #808080;
  }
  .colored:nth-child(5) {
    background: #666666;
  }
  .colored:nth-child(6) {
    background: #4D4D4D;
  }
  .colored:nth-child(7) {
    background: #1B1B1B;
  }
`
export const CenterDiv = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 100;
      justify-content: center;
      align-items: center;
      margin: auto;
      /* width: 50%; */
      padding-top: 300px;

  `;

export const Spacer = styled.div`
  height: 15vh;
  background: #1B1B1B;
`;


export const NameUser = styled.p`
  font-size: 24px;
`;