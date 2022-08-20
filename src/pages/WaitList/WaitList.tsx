import { makeStyles } from '@material-ui/core'
import React from 'react'
import TextField from "./TextField/TextField";
import Subscription from "../../includes/Subscription/Subscription";
import Footer from "../../includes/Footer/Footer";
import Dropdown from "./Dropdown/Dropdown";
import PageHeader from "../../includes/PageHeader/PageHeader";
import {Container,InnerContainer} from "./Waitlist.styles";
import {JoinBtn} from "../../includes/Header2/Header2.styles";
import GradientCircle from "../../includes/GradientCircle/GradientCircle";
const style = makeStyles(({breakpoints}) => ({
    root : {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '50px',
        marginBottom: '10%',
        "@media (max-width: 425px)": {
            padding: ' 0 0.8rem',
        }
    },
    headerContainer: {
        width: '65%'
    },
    header : {
        fontWeight: 700,
        fontSize: '64px',
        lineHeight: '74px',
        textAlign: 'center',
        background: '-webkit-linear-gradient(180deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
    form: {
        background : '#F1F2F4',
        borderRadius: '28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        width: '80%',
        justifyContent: 'space-around',
        justifyItems: 'center',
        padding: '30px'
    },
    submitBtnContainer:{
        width: '40%',
        "@media (max-width: 425px)": {
            width: '90%',
        }
    },
    submitBtn: {
        float: 'right',
        background: 'linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)',
        borderRadius: 6.5,
        height: 41,
        width: 171,
        border: 0,
        cursor: 'pointer',
        margin: '20px 0',
        // btn text
        color: '#FFFFFF',
        fontWeight: 700,
        fontSize: 16

    }
}))
export default function WaitList () {
    const classes = style();
    return (
        <>
        <div className={classes.root}>
            <div style={{marginTop : '5%'}}/>
            <PageHeader
                withUnderline={true}
                title={'join the waitlist'}
                smallHeader={'Be the first to use Visqore Beta when we go live'}/>
            <Container>
                <GradientCircle
                    size={10}
                    top={-10}
                    right={-5}
                    bottom={0}
                    left={0}
                />
                <InnerContainer>
                    <TextField
                        label={'email'}
                        type={'email'}
                        placeholder={'Email address'}
                    />
                    <TextField
                        label={'name'}
                        type={'text'}
                        placeholder={'Full name'}
                    />
                    <Dropdown />
                </InnerContainer>
                <div className={classes.submitBtnContainer}>
                    <JoinBtn className={classes.submitBtn}>Submit now</JoinBtn>
                </div>
            </Container>
        </div>
        <Subscription/>
        <Footer/>
        </>
    )
}