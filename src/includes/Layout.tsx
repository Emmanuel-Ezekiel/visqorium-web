import { ReactNode, Suspense } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppRoute, AppStylePropType } from "../utils/types";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Header2 from './Header2/Header2';
import MobileHeader from './MobileHeader/MobileHeader'

const useStyles = makeStyles(({colors, breakpoints} : AppStylePropType) => ({
    mobile: {
        [breakpoints.down("sm")]: {
            marginBottom: 70
        },
    },
    loading : {
        minHeight : 400,
        display : "flex",
        alignItems : 'center',
        justifyContent : "center",
        fontWeight : "bold",
        fontSize : 24,
    }
}));

export default function Layout({routes} : {routes : AppRoute[]}){
    const classes = useStyles();
    return (
        <>
          <Router>
            <Header2/>
              <MobileHeader/>
            <Suspense fallback={<div className={classes.loading}>loading...</div>}>
                <Routes>
                {routes && routes.map((route, index)=>{
                    const {component : Component, path} = route;
                    // console.log(path);
                    return <Route key={index} path={path} 
                        element={<Component/>}
                    />
                })}
                </Routes>
            </Suspense>
           </Router>
        </>
    )
}
