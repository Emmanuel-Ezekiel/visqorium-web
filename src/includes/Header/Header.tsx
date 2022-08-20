import { IconButton, makeStyles, useTheme } from '@material-ui/core'
import React from 'react'
import { AppStylePropType } from '../../utils/types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { routeNames } from '../../utils';
import classNames from 'classnames';
import { CustomTextGradient } from '../CustomTextGradient';
import SubItem from './SubItem/SubItem';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
const style = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    root : {
        
    }, 
    nav : {

        padding : 20,
        alignItems : "center",
        "@media (max-width: 425px)": {
            padding : '5px 10px',
        }
    },
    toolbar : {
        width : "90%",
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        [breakpoints.down("sm")] : {
            width : "98%",
        }
    },
    container : {
        display : "flex"
    },
    logo : {
        fontWeight : "bold",
        fontSize : 20,
        textDecoration : "none",
    },
    navGroup : {
        display : "flex",
        justifyContent : "space-between",
        [breakpoints.down("sm")] : {
          display : "none",
        }
    },
    navText : {
        textDecoration : "none",
        padding : 10,
        // fontFamily: "Aeonik",
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: 0,
        textAlign: "left",
        color : colors.black,
        position: 'relative',
        "&& > p": {
            margin: 0,
            padding: 0
        },
        '&:hover': {
            background: '-webkit-linear-gradient(0deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        '&:hover > div': {
            visibility: 'visible',
            opacity: 1,
        }
    },
    subNavigationBar: {
        visibility: 'hidden',
        opacity: 0,
        padding: '0 20px',
        position: 'absolute',
        background: colors.white,
        top: 40,
        left: '-200%',
        width: '330px',
        borderTop: '1.5px solid #B620E0',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: 'none',
        transition: 'visibility 0s, opacity 0.5s linear',
        "&::before": {
            content: '""',
            position: 'absolute',
            top: '-10px',
            left: '50%',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '10px solid #B620E0'
        }
    },

    resetLink : {
        textDecoration : "none"
    },
    account : {
        height: 51,
        width: 162,
        borderRadius: 32,
        // border : "solid 1px",
        background : colors.gradient,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        [breakpoints.down("sm")] : {
          display : "none",
        }
    },
    newAccountText : {
        fontFamily: "Avenir",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 19,
        color : colors.white
    },
    iconBtn : {
        padding : 0,
        marginLeft : 20,
        "@media (max-width: 425px)": {
            display: 'none'
        }
    }
}))
// styled components

const MobileMenu = styled.a`
  width: 40px;
  height: 40px;
  display: inline-block;
  position: relative;
  display: none;
  margin:0;
  padding:0;

  i {
    position: absolute;
    display: block;
    height: 2px;
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
    width: 30px;
    left: 0px;
    -webkit-transition: all .3s;
    transition: all .3s;
  }

  i:nth-child(1) {
    top: 16px;
  }

  i:nth-child(2) {
    top: 24px;
  }

  i:nth-child(3) {
    top: 32px;
  }

  &:active i:nth-child(1) {
    top: 25px;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  &:active i:nth-child(2) {
    background: transparent;
  }

  &:active i:nth-child(3) {
    top: 25px;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
  }

    @media (max-width: 425px) {
      display: block;
    }
`

export default function Header () {
    const classes = style();
    const { colors } = useTheme() as AppStylePropType,
    { primary, secondary, accent } = colors || {};
    return (
        <>
          <AppBar position="relative" color="transparent" elevation={0} className={classes.nav}>
            <Toolbar disableGutters className={classes.toolbar}>
              <Link to="/" className={classNames(classes.container, classes.logo)}>
                  <img src={logo} className={classes.logo} alt={'logo'}/>
              </Link>
    
              <div className={classNames(classes.container, classes.navGroup)}>
                <Link to={routeNames().products} className={classes.navText}>
                    <p>Products</p>
                    <div className={classNames(classes.subNavigationBar)}>
                        <SubItem />
                        <SubItem />
                        <SubItem />
                    </div>
                </Link>
                <Link to={routeNames().creators} className={classes.navText}>
                  For Creators
                </Link>
                <Link to={routeNames().devs} className={classes.navText}>
                  For Developers
                </Link>
                <Link to={routeNames().mission} className={classes.navText}>
                  Mission
                </Link>
                <Link to={routeNames().company} className={classes.navText}>
                  Company
                </Link>
                <Link to={routeNames().contact} className={classes.navText}>
                  Contacts
                    <div className={classNames(classes.subNavigationBar)}>
                        <SubItem />
                        <SubItem />
                        <SubItem />
                    </div>
                </Link>
              </div>
                <div className={classes.container}>
                    <Link to={routeNames().account} className={classNames(classes.resetLink, classes.account)}>
                        <span className={classes.newAccountText}>Create Account</span>
                    </Link>
                    {/*<IconButton className={classes.iconBtn}>*/}
                    {/*    <img src="/images/header/theme.png" title="visqorium blockchain"/>*/}
                    {/*</IconButton>*/}
                    <MobileMenu>
                        <i></i>
                        <i></i>
                        <i></i>
                    </MobileMenu>
                </div>
            </Toolbar>
          </AppBar>
        </>
    );
}