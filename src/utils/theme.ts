export type AppTheme = Partial<{
    pageBackground: string,
    gradient : string,
    primary : string,
    secondary : string,
    accent : string,
    white : string,
    white2 : string,
    black : string,
    background : string
}>

const light : AppTheme = {
    primary : "#3FA6DC",
    secondary : "#8B459A",
    accent : "#D02332",
    gradient : "linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
    white : "white",
    white2: '#F7F7F7',
    black : "black",
    background : "#F1F2F4",
}
const set2 : AppTheme = {
    
}
export const appTheme : { dark : AppTheme, light : AppTheme } = {
    dark: {
    },
    light: {
        ...light
        
    }
}
