import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 40px 61px;
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  color: #ffffff;
  border-style: none;
  position: relative;
  z-index: 1;
  border-radius: 24px;
  border: 0.5px solid;
  background: rgba(0, 0, 0, 0.5);
  border-left: 0.5px solid rgba(211, 32, 39, 0.7);
  border-right: 0.5px solid rgba(50, 197, 255, 0.7);
  background-image: linear-gradient(90deg, rgba(211, 32, 39, 0.7), #b620e0),
    linear-gradient(90deg, rgba(50, 197, 255, 0.7), #b620e0);
  background-color: rgba(0, 0, 0, 0.5);
  background-size: 100% 0.5px;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  /* padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 0.2fr;
  gap: 50px;*/
  /* margin-bottom: 3%; */
  /* width: 73vw; */
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
  > div:nth-child(2) {
    > div:nth-child(2) {
      p {
        color: #c4c4c4;
      }
      h4 {
        font-style: italic;
        font-weight: 500;
      }
    }
  }
  > div:nth-child(3) {
    p {
      color: rgb(50, 197, 255);
    }
  }
  @media (max-width: 980px) {
    width: 80%;
    margin: auto;
    padding: 10px 21px;
    h3 {
      font-size: 25px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  > div {
    flex: 1;
  }
  @media (max-width: 980px) {
    gap: 10px;
    flex-direction: column;
  }
`;
