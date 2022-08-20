import React from "react";
import {makeStyles} from "@material-ui/core";
import img from '../../../../public/images/Team/2.png';
import {AppStylePropType} from "../../../utils/types";
import LinkedInIcon from '../../../assets/Icons/LinkedIn.png';
import TwitterIcon from '../../../assets/Icons/Twitter.png';
const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    root : {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative',
        margin: '1vw 3vw',
        "@media (max-width: 425px)": {
            margin: '10px 0px',
            transform: 'scale(0.95)',
            width: '50%',
        }
    },
    "@keyframes hoverHide": {
        "0%": {
            filter: 'none'
        },
        "100%": {
            filter: 'brightness(0) invert(1)'
        }
    },
    profilePic: {
        display: 'block',
        borderRadius: 20,
        height: '150px',
        position: 'relative',
        '&:hover': {
            animation: '$hoverHide 0.6s forwards 0s'
        },
        '&:hover + div': {
            animation: '$hoverShow .6s forwards 0s'
        }
    },
    "@keyframes hoverShow": {
        "0%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        }
    },
    socialMedia: {
        opacity: 0,
        width: '99%',
        height: '150px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        WebkitAlignContent: 'space-evenly',
        borderRadius: 20,
        background: 'linear-gradient(180deg, #3FA6DC -0.1%, #8B459A 53.92%, #D02332 99.62%)',
        gap: 0,
        '&:hover': {
            animation: '$hoverShow .6s forwards 0s'
        }
    },
    Icon : {
        width: 40,
        height: 40,
    },
    name: {
        margin: '15px 0 0 0',
        fontSize: 18,
        fontWeight: 600,
        color: colors.white
    },
    role: {
        margin: 7,
        fontSize: 14,
        fontWeight: 600,
        color: '#C4C4C4',
        "@media (max-width: 425px)": {
            margin: 0,
        }
    }
}))

export default function Member (props: any) {
    const classes = style();
    const redirect = (link: string) => {
        window.open(link, "_blank")
    }
    return (
        <div className={classes.root}>
            <img className={classes.profilePic} src={process.env.PUBLIC_URL + '/images/Team' + props.src} alt={'profile_pic'}/>
            <div className={classes.socialMedia}>
                {
                    props.twitter !== "" ? <img
                        className={classes.Icon}
                        onClick={(e)=>(redirect(props.twitter))}
                        src={TwitterIcon}/> : null
                }
                {
                    props.linkedin !== "" ? <img
                        className={classes.Icon}
                        onClick={(e)=>(redirect(props.linkedin))}
                        src={LinkedInIcon}/> : null
                }
            </div>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.role}>{props.role}</p>
        </div>
    )
}