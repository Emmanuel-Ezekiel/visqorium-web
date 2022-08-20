import React from "react";
import {makeStyles} from "@material-ui/core";
const style = makeStyles(({breakpoints}) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '10px',
        width: '100%'
    },
    label: {
        paddingLeft: 3,
        textTransform: 'capitalize',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '13px'
    },
    input: {
        border: '1px solid #DCDDEB',
        borderRadius: '6.5px',
        height: '30px',
        paddingLeft: '15px',
        '&::placeholder': {
            color: '#8184A3'
        }
    }
}))

export default function TextField (props: any) {
    const classes = style();
    return (
        <div className={classes.container}>
            <label className={classes.label}>{props.label}</label>
            <input className={classes.input} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}