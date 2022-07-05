import { createTheme } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { palette } from '@mui/system';


const theme = createTheme({
    palette: {
        primary: {
            main: '#251F1F'
        },
        secondary: {
            main: '#FF7700'
        },
        text: {
            primary: "rgb(0,0,0)",
            secondary: "rgb(255,255,255)",
        },
        mode: 'dark',
    },}
)

export default theme;