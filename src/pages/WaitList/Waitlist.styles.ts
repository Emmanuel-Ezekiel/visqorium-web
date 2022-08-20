import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
  margin-bottom: 10%;
  color: #fff;
  width: 74%;
  height: 70vh;
  border-style: none;
  position: relative;
  z-index: 1;
  border-left: 0.5px solid rgba(211, 32, 39, 0.7);
  border-right: 0.5px solid rgba(50, 197, 255, 0.7);
  border-radius:28px;
  background-image: linear-gradient(90deg, rgba(211, 32, 39, 0.7), #B620E0), linear-gradient(90deg, rgba(50, 197, 255, 0.7), #B620E0);
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 100% 0.5px;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  
  &::before {
    content: "";
    position: absolute;
    top: var(--border-width);
    left: var(--border-width);
    height: calc(100% - calc(var(--border-width)) * 2);
    width: calc(100% - calc(var(--border-width)) * 2);
    border-radius: calc(var(--border-radius) - var(--border-width));
    z-index: -1;
  }
  
  @media (max-width: 425px){
    height: auto;
    padding: 10px;
    width: 92%;
  }
`

export const InnerContainer = styled.div`
  width: 40%;
  input:focus{
    outline: none;
  }
  @media (max-width: 425px){
    width: 90%;
  }
`