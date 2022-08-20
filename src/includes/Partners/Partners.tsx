import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames';
import { AppStylePropType } from '../../utils/types';
import PageHeader from "../PageHeader/PageHeader";
import GradientCircle from "../GradientCircle/GradientCircle";
const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    root : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        padding : 20,
        paddingBottom : 100,
        // position: 'relative'
    },
    container : {
        display : "flex",
        width : "80%",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        [breakpoints.up("md")] : {
            width : "70%"
        }
    },
    header : {
        fontSize : 40,
        fontWeight : 700,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        marginBottom : 50,
        [breakpoints.down("sm")] : {
            fontSize : 24,
        }
    },
    item : {
        display : "flex",
        columnGap: 100,
        justifyContent : "space-evenly",
        alignItems : "center",
        [breakpoints.down("sm")] : {
            columnGap: 10,
        }
    },
    imageContainer : {
        marginTop: '15%',
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "center",

    },
    img: {
        [breakpoints.down("sm")] : {
            width: '80px'
        }
    }
}));
const partners = [
    "career1", "career2", "career3","career4"
]
export default function Partners () {
    const classes = style();
    return (
        <div className={classes.root}>
            <GradientCircle
                size={25}
                top={80}
                left={0}
                bottom={0}
                right={0}
            />
            <div className={classes.container}>
                <PageHeader title={'Partners & Backers'} withUnderline={true}/>
                <div className={classes.item}>
                    {partners.map((item, index) => {
                        return <div key={index}>
                            <div className={classes.imageContainer}>
                                <img className={classes.img} src={`/images/partners/${item}.png`}/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}