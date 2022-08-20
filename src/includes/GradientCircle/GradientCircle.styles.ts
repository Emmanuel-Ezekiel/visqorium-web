import styled, {keyframes} from "styled-components";

interface IContainerProps {
    size?: number;
    top?: number,
    bottom?: number,
    right?: number,
    left?: number
}

const float = keyframes`
  0% {
    /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
    transform: translatey(0px);
  }
  50% {
    /* box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2); */
    transform: translatey(-40px);
  }
  100% {
    /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
    transform: translatey(0px);
  }
`
const color = keyframes`
  to {
    --angle: 180deg;
  }

`
export const Container = styled.div<IContainerProps>`
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
      --angle: 0deg;
    width: ${(props: IContainerProps) => props.size !== undefined ? props.size + "%" : 0};
      height: auto;
    // height: ${(props: IContainerProps) => props.size !== undefined ? props.size + "%" : 0};
    border-radius: 50%;
    position: absolute;
    right:  ${(props: IContainerProps) => props.right !== undefined ? props.right + "%" : 0};
    top: ${(props: IContainerProps) => props.top !== undefined ? props.top + "%" : 0};
    left: ${(props: IContainerProps) => props.left !== undefined ? props.left + "%" : 0};
    bottom: ${(props: IContainerProps) => props.bottom !== undefined ? props.bottom + "%" : 0};
    //background-image: -webkit-linear-gradient(45deg, #3FA6DC, #8B459A,#D02332);
    //background-image: -o-linear-gradient(45deg, #3FA6DC, #8B459A,#D02332);
    background-image: linear-gradient(var(--angle), #3FA6DC, #8B459A,#D02332);
    opacity: 0.45;
    filter: blur(50px);
    animation: ${float} 5s ease-in-out infinite, ${color} 3s infinite alternate;
  z-index: -1;
  `
