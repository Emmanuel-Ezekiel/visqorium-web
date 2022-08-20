import styled from "styled-components";
export const Container = styled.div`
  margin: 5.5rem;
  display: flex;
  justify-content: center;
  //--border-width: 0.5px;
  //--border-radius: 10px;
  color: #fff;

  //border-radius: var(--border-radius);
  //border-width: var(--border-width);
  //background-image: linear-gradient(90deg, rgba(211, 32, 39, 0.7) 0%, #B620E0 59.8%, rgba(50, 197, 255, 0.7) 110.39%);
  //background-color: rgba(0, 0, 0, 0.5);
  border-style: none;
  position: relative;
  z-index: 1;
  border-left: 0.5px solid rgba(211, 32, 39, 0.7);
  border-right: 0.5px solid rgba(50, 197, 255, 0.7);
  border-radius: 10px;

  background-image: linear-gradient(90deg, rgba(211, 32, 39, 0.7), #b620e0),
    linear-gradient(90deg, rgba(50, 197, 255, 0.7), #b620e0);
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
  @media (max-width: 768px) {
    padding: 30px;
    margin: 0.8rem;
  }
`;
