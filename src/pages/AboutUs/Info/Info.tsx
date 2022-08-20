import {makeStyles} from "@material-ui/core";
import backgroundMobile from "../../../assets/backgrounds/Mobile.png";
const style = makeStyles(({breakpoints}) => ({
    root : {
       // background: 'red',
        display: 'inline-block',
        "@media (max-width: 425px)": {
            width: '300px',
        }
    },
    h5: {
        margin: 0,
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.15,
        color: '#fff',
        "@media (max-width: 425px)": {
            fontSize: 20,
        }
    },
    p: {
        fontSize: 20,
        fontWeight: 400,
        color: '#fff',
        "@media (max-width: 425px)": {
            fontSize: 16,
        }
    }
}))
export default function Info (props: any) {
    const classes = style();
    return (
        <div className={classes.root}>
            <h5 className={classes.h5}>{props.header}</h5>
            <p className={classes.p}>{props.text}</p>
        </div>
    )
}