import React from "react";
import {makeStyles} from "@material-ui/core";
import {DropdownStyles} from "./Dropdown.styles";
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
        padding: '0 15px',
        color: '#8184A3',
        // background: 'red',
        textTransform: 'capitalize',
        background: 'url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right white',
        backgroundPositionX: '95%',
        appearance:'none'
    }
}))
export default function Dropdown () {
    const classes = style();
    return (
        <div className={classes.container}>
            <label className={classes.label}>Niche</label>
            <DropdownStyles>
                <option>choose category</option>
                <option>artist</option>
                <option>Cinematographer</option>
                <option>Musician</option>
                <option>author</option>
                <option>poet</option>
                <option>gamer</option>
                <option>fashion designer</option>
                <option>comedian</option>
                <option>content creator</option>
                <option>influencer</option>
                <option>photographer</option>
                <option>brand</option>
            </DropdownStyles>
        </div>
    )
}