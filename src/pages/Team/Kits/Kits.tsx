import {makeStyles} from "@material-ui/core";
import {AppStylePropType} from "../../../utils/types";
import {useNavigate} from "react-router-dom";

const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderLeft: '0.5px solid rgba(211, 32, 39, 0.7)',
        borderRight: '0.5px solid rgba(50, 197, 255, 0.7)',
        backgroundImage: 'linear-gradient(90deg, rgba(211, 32, 39, 0.7), #B620E0), linear-gradient(90deg, rgba(50, 197, 255, 0.7), #B620E0)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundSize: '100% 0.5px',
        backgroundPosition: '0 0, 0 100%',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        padding: '25px',
        width: '32%',
        minWidth: '300px',
        borderRadius: '24px',
        "@media (max-width: 425px)": {
            marginBottom: '20px'
        }
    },
    header: {
        fontSize: 32,
        fontWeight: 500,
        color: colors.white,
        margin : 0,
        padding: 0
    },
    btn: {
        background: colors.white,
        border: 'none',
        borderRadius: '10px',
        margin: '16px 0',
        padding: 16,
        cursor: 'pointer'
    }
}))
export default function Kits (props: any) {
    const classes = style();
    let navigate = useNavigate();
    return (
        <div className={classes.container}>
            <h5 className={classes.header}>{props.title}</h5>
            <p>{props.header}</p>
            <button onClick={(e)=>(navigate(props.link))} className={classes.btn}>{props.btnText} &#62;&#62;</button>
        </div>
    )
}