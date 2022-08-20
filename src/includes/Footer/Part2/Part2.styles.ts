import styled from "styled-components";

interface IContainerProps { 
  theme?: any;
  align?: string;
}


export const Container = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
    margin: 0 0.8rem;
    padding-top: 35px;
  }
`
export const InnerContainer = styled.div<IContainerProps>`
  //background-color: #61dafb;
  display: flex;
  flex-direction: column;
  align-items:  ${(props: IContainerProps) => props.theme.align !== undefined ? props.theme.align : "none"};
  width: 35%;
  @media (max-width: 425px) {
    //background: red;
    margin-bottom: 20px;
    align-items:  flex-start;
    width: 100%;
  }
  p{
    color: rgba(255, 255, 255, 0.5);
  }
  
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  p{
    font-size: 27px;
    font-weight: 400;
    padding-left: 20px;
    border-left: 1px solid white;
    color: white;
  }
  img{
    margin-right: 20px;
  }
  h3 {
    color: white;
    font-weight: 900;
    font-size: 32px;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 425px) {
    h3 {
      font-size: 28px;
    }
  }
`