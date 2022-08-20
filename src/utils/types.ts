import { Theme } from "@material-ui/core"
import React from "react"
import { AppTheme } from "./theme"

export type AppRoute = {
    path : string, exact : boolean, 
    component : React.LazyExoticComponent<() => JSX.Element>
}

export type AppStylePropType = Theme & { colors : AppTheme, isDark: boolean}