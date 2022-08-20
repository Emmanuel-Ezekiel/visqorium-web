import React from 'react';
import { routeNames } from "./routeNames"
import { AppRoute } from './types';

const Landing = React.lazy(() => import("../pages/Landing/Landing"));
const waitList = React.lazy(() => import("../pages/WaitList/WaitList"));
const niche = React.lazy(() => import("../pages/Niche/Niche"));
const Contact = React.lazy(() => import("../pages/ContactUs/ContactUs"));
const Team = React.lazy(() => import("../pages/Team/Team"));
const AboutUs = React.lazy(() => import("../pages/AboutUs/AboutUs"));
const notFound = React.lazy(() => import("../pages/Error/Error"));
export const routes: AppRoute[] = [
    { path: routeNames().landing, exact: true, component: Landing },
    { path: routeNames().waitlist, exact: true, component: waitList },
    { path: routeNames().niches, exact: true, component: niche },
    { path: routeNames().contact, exact: true, component: Contact },
    { path: routeNames().company, exact: true, component: Team },
    { path: routeNames().aboutus, exact: true, component: AboutUs },
    { path: '*', exact: false, component: notFound },
]
/**
 * 404 page must be the last index in this array and it is without a path
 */
export const headerlessRoutes = [

]