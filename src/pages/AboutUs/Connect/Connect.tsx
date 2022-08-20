import {makeStyles} from "@material-ui/core";
const style = makeStyles(({breakpoints}) => ({
    root : {
        display: 'inline-block',
        // background: 'yellow',
        width: '500px',
        "@media (max-width: 425px)": {
            width: '95%',
            fontSize: 24,
            margin: '10px 0 10px 10px',
        }
    },
    icon: {},
    h5: {
        fontWeight: 700,
        fontSize: 32,
        margin: '25px 0 0 0',
        "@media (max-width: 425px)": {
            fontSize: 24
        }
    },
    p: {
        fontWeight: 500,
        fontSize: 18,
        color: '#404040',
        "@media (max-width: 425px)": {
            fontSize: 16
        }
    },
    btn: {
        fontWeight: 700,
        fontSize: 16,
        color: '#8B459A',
        margin: '14px 0',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        "&& :hover": {
            color: '#26132c',
        }
    }

}))
export default function Connect (props: any) {
    const classes = style();
    return (
        <div className={classes.root}>
            <img className={classes.icon} alt={'icon'} src={props.icon}/>
            <h5 className={classes.h5}>{props.header}</h5>
            <p className={classes.p}>{props.text}</p>
            <button className={classes.btn}>{props.btnText} &#8594;</button>
        </div>
    )
}