import {Container} from "./GradientCircle.styles";

interface IContainerProps {
    size: number;
    top: number,
    bottom: number,
    right: number,
    left: number
}

export default function GradientCircle (props: IContainerProps) {
    console.log(props)
    return (
        <Container
            size={props.size}
            top={props.top}
            left={props.left}
            right={props.right}
            bottom={props.bottom}
        ></Container>
    )
}