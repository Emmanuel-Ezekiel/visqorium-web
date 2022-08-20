import styled from "styled-components";
import { keyframes,createGlobalStyle } from 'styled-components';

const borderAnimation = keyframes`
  to {
    --angle: 360deg;
  }

`
export const Container = styled.div`
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
  --angle: 0deg;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  --border-width: 0.5px;
  --border-radius: 10px;
  height: 13rem;
  width: 17rem;
  margin: 25px;
  border-radius: var(--border-radius);
  border-width: var(--border-width);
  background: linear-gradient(var(--angle), rgba(211, 32, 39, 0.7) 0%, #B620E0 59.8%, rgba(50, 197, 255, 0.7) 110.39%);
  border-style: none;
  position: relative;
  z-index: 1;
  animation: 1.6s linear 0.6s infinite normal none running ${borderAnimation};
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
      @media (max-width: 425px){
        margin: 0 0 20px 0;
      }
`
