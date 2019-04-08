import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple as brandPrimary, pink as brandSecondary, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    type: "dark",
    palette: {
        primary: {
            // main: brandPrimary[900],
            main: '#5300b8',
        },
        secondary: {
            // light: '#0066ff',
            main: brandSecondary.A400,
            // dark: will be calculated from palette.secondary.main,
            // contrastText: brandPrimary[900],
        },
        common: {
            black: "#fff",
            white: "#000",
        },
        background: {
            paper: grey[50],
            default: grey[400],
        },
        text: {
            // disabled: "rgba(255,255,255, 0.38)",
            // hint: "rgba(255,255,255, 0.38)",
            // primary: "rgba(255,255,255, 0.87)",
            // secondary: "rgba(255,255,255, 0.54)",
        },
        // contrastThreshold: 3,
        // tonalOffset: 0.2,
    },
    shape: {
        borderRadius: 3,
    },
    spacing: {
        unit: 8,
    },
    typography: {
        useNextVariants: true,
    },
});

// console.log(theme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </MuiThemeProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
