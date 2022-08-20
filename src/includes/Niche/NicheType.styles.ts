import styled from "styled-components";

import { keyframes } from "styled-components";

const scaleUpAnimation = keyframes`
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.1);
  }
`;

const scaleUpAnimationMax = keyframes`
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.05);
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 80%;
  display: none;
`;
export const Work = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: none;
`

export const Container = styled.div`
  --border-width: 0.5px;
  --border-radius: 10px;
  width: 370px;
  margin: 25px;
  border-radius: var(--border-radius);
  border-width: var(--border-width);
  background: linear-gradient(
    var(--angle),
    rgba(211, 32, 39, 0.7) 0%,
    #b620e0 59.8%,
    rgba(50, 197, 255, 0.7) 110.39%
  );
  border-style: none;
  position: relative;
  z-index: 1;
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
  :hover {
    animation: ${scaleUpAnimation} 0.2s ease-in-out forwards;
  }
  :hover > img {
    display: none;
  }
  :hover > ${Video} {
    display: block;
    //height: 380px;
  }
  :hover > ${Work} {
    display: block;
  }
  @media (max-width: 425px) {
    transform: scale(0.90);
    margin: 0;
  }
  @media (max-width: 840px) {
    :hover {
      animation: ${scaleUpAnimationMax} 0.2s ease-in-out forwards;
    }
  }
`;