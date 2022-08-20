import {makeStyles} from "@material-ui/core";
import {AppStylePropType} from "../../../../utils/types";
import icon from '../../../../assets/Icons/artiest.png'
import {Container} from "./Cards.styles";
const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    header: {
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center'
    },
    icon: {
        width: 80,
        height: 80
    }
}))

export default function Cards (props: any) {
    const classes = style()
    return (
        <Container>
            <p className={classes.header}>{props.title}</p>
            <img className={classes.icon}src={'./images/NicheIcons' + props.icon} alt={'icon'}/>
        </Container>
    )
}