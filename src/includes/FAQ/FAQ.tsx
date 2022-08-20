import { Typography, Accordion, makeStyles, AccordionSummary, AccordionDetails } from '@material-ui/core'
import React, {useEffect} from 'react'
import { AppStylePropType } from '../../utils/types';
import { Add } from '@material-ui/icons';
import RemoveIcon from '@mui/icons-material/Remove';
import { CustomTextGradient } from ".."
import data from './data.json'
const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    root : {
        padding : 20,    
        paddingTop : 50,
        paddingBottom : 50,
        display : "flex",
        justifyContent : "center",
        flexDirection : "column",
        alignItems : "center",
        fontSize : 24,
    },
    header : {
        fontSize : 48,
        marginBottom : 50,
        fontWeight : 700,
        background: '-webkit-linear-gradient(180deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        [breakpoints.down("sm")] : {
            fontSize : 24,
        }
    },
    container : {
        [breakpoints.up("md")] : {
            width : "80%"
        }
    },
    accordion : {
        marginBottom : 10,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        boxShadow: 'none'
    },
    typo : {
        fontSize : 24,
    }
}))

export default function FAQ () {
    const classes = style();
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
            console.log(panel)
            setExpanded(isExpanded ? panel : false);
        }
    return (
        <div className={classes.root}>
            <h2 className={classes.header}>Frequently Asked Questions.</h2>
            <div className={classes.container}>
                {data['faq'].map((item, index) => {
                    return <Accordion
                        key={index}
                        className={classes.accordion}
                        expanded={expanded === `panel${index+1}`}
                        onChange={handleChange(`panel${index+1}`)}
                    >
                        <AccordionSummary
                            expandIcon={expanded === `panel${index+1}` ?<RemoveIcon/>:<Add />}
                            aria-controls={`panel${index+1}bh-content`}
                            id={`panel${index+1}bh-header`}
                        >
                            <Typography className={classes.typo}>{item.q}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.typo}>{item.a}</Typography>
                        </AccordionDetails>
                    </Accordion>
                })}
            </div>
        </div>
    )
}