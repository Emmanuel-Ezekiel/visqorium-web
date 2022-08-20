import styled from "styled-components";
export const Container = styled.div`
  //background-color: #61dafb;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  margin: 10% 0;
  padding: 0 10%;
  @media (max-width: 768px) {
   flex-direction: column;
    padding: 0 0.8rem;
  }
`
export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    width: 95%;
  }
`
export const InputContainer = styled.div`
  position: relative;
`

export const Header = styled.h1`
  //background-color: red;
  background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  line-height: 72px;
  font-size: 60px;
  width: 420px;
  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
    line-height: 22px;
  }
`
export const SubHeader = styled.p`
  position: absolute;
  bottom: -15px;
  left: 0px;
  background: linear-gradient(92.46deg, #FFFFFF 37.2%, rgba(255, 255, 255, 0.943656) 114.27%, rgba(50, 17, 60, 0.89) 154.44%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 400;
  line-height: 30px;
  font-size: 25px;
  opacity: 0.8;
  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
    line-height: 22px;
    position: relative;
    bottom: 0px;
  }
`


export const Input = styled.div`
  --border-width: 1px;
  --border-radius: 10px;
  height: 90px;
  width: 500px;
  border-radius: var(--border-radius);
  border-width: var(--border-width);
  background: linear-gradient(90deg, #D32027 0%, #B620E0 59.8%, #32C5FF 110.39%);
  border-style: none;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    width: 350px;
    height:58px;
  }
  input{
    position: absolute;
    background-color: black;
    border-radius: 10px;
    border: none;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    padding: 12px 20px;
    color: white;
    font-size: 18px;
    //padding-left: 20px;
    &::placeholder{
      font-size: 18px;
      background: linear-gradient(92.46deg, rgba(218, 170, 232, 0.76) 37.2%, rgba(255, 255, 255, 0.943656) 114.27%, rgba(50, 17, 60, 0.89) 154.44%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    
    &:focus{
      outline: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: var(--border-width);
    left: var(--border-width);
    height: calc(100% - calc(var(--border-width)) * 2);
    width: calc(100% - calc(var(--border-width)) * 2);
    border-radius: calc(var(--border-radius) - var(--border-width));
    background: black;
    z-index: -1;
  }

`
export const SubmitBtn = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 7%;
  top: 50%;
  transform: translate(0,-50%);
  z-index: 99;
`