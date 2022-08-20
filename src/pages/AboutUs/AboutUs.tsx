import {makeStyles} from "@material-ui/core";
import  Footer  from "../../includes/Footer/Footer";
import Subscription from "../../includes/Subscription/Subscription";
import laptop from '../../assets/backgrounds/laptop.png';
import background from '../../assets/backgrounds/background.png';
import backgroundMobile from '../../assets/backgrounds/Mobile.png';
import Info from "./Info/Info";
import Connect from "./Connect/Connect";
import icon1 from '../../assets/Icons/career2.png'
import icon2 from '../../assets/Icons/career1.png'
const style = makeStyles(({breakpoints}) => ({
    root : {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10%',

    },
    upperContainer: {
        background: `url(${background})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "&& p": {
            color: '#FFFFFF',
        },
        "@media (max-width: 425px)": {
            background: `url(${backgroundMobile})`,
        }
    },
    header1: {
        marginTop: 60
    },
    header2: {
        fontSize: 32,
        fontWeight: 500,
        letterSpacing: 0.19,
        marginTop: 0,
        marginBottom: 100,
        textAlign: 'center',
        "@media (max-width: 425px)": {
            fontSize: 24,
            marginBottom: 5
            // background: 'red'
        }
    },
    laptop: {
        width: '50%',
        mixBlendMode: 'screen',
        "@media (max-width: 425px)": {
            width: '100%',
        }
    },
    container: {
        // background: 'yellow',
        width: '55%',
        margin: '10% auto',
        "@media (max-width: 425px)": {
            width: '95%',
            margin: '15% 3%'
        }
    },
    innerContainer: {
        marginTop: '12%'
    },
    bottomContainer: {
        // background: 'yellow',
        padding: '0 18px',
        borderBottom: 'none',
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: '3px solid #2EADE1',
        "&& p": {
            color: '#212529',
            fontWeight: 400,
            fontSize: 22
        },
        "@media (max-width: 425px)": {
            padding: '0 10px',
            "&& p": {
                fontSize: 16
            }
        }
    },
    lastContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '5%',
        justifyContent: 'center',
        marginBottom: '15%',
        // background: 'blue'
    }
}))
export default function AboutUs () {
    const classes = style();
    return (
        <div className={classes.root}>
            <div className={classes.upperContainer}>
                <p className={classes.header1}>Welcome to Visqorium Labs</p>
                <p className={classes.header2}>Africa’s first Creator-centric Blockchain Ecosystem.</p>
                <img className={classes.laptop} src={laptop} alt={'laptop'}/>
            </div>
            <div className={classes.container}>
                <Info
                    header={'About Visqorium Labs'}
                    text={'Visqorium Labs is an Africa-centric Blockchain ecosystem built to power Next-Generation Creators.'}
                />
                <div className={classes.innerContainer}>
                    <Info
                        header={'The Mission'}
                        text={'Tokenized communities stand to revolutionize frameworks around money, value and coordination,\n' +
                            '                            ushering in Web3’s Creator & Ownership Economy. Who will be on the ground floor of this sea change?\n' +
                            '                            Equal parts curator, influencer and communities, Forefront aims to be the content and community\n' +
                            '                            hub of the booming social token space.'}
                    />
                    <div className={classes.bottomContainer}>
                        <p>Visqorium’s mission is to explore and harness the full potential of NFTs through various Web 3.0 solutions, by fusing it with multiple industries and enhancing its use-cases.</p>
                    </div>
                </div>
            </div>
            <div className={classes.lastContainer}>
                <Connect
                    icon={icon1}
                    header={'Help us future of Web3'}
                    text={'Learn more about us or see current openings to join us!'}
                    btnText={'See open opportunities'}
                />
                <Connect
                    icon={icon2}
                    header={'Be a part of our Community'}
                    text={'Keep tabs on all-things-Visqorium.'}
                    btnText={'Explore'}
                />
            </div>
            <Subscription/>
            <Footer/>
        </div>

    )
}