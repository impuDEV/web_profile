import React, {FC, useMemo} from 'react';
import {useRoutes} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
import {useAppSelector} from "./hooks/redux";
import {createTheme, ThemeProvider} from "@mui/material";
import {NavBar} from "./components/NavBar";


const App: FC = () => {
    const routes = useRoutes()
    const theme = useAppSelector(state => state.configReducer.colorTheme)


    const appTheme = useMemo(
        () => createTheme({
            palette: {
                // @ts-ignore
                mode: theme
            }
        }), [theme]
    )

    return (
        <ThemeProvider theme={appTheme}>
            <Router>
                <NavBar/>
                {routes}
            </Router>
        </ThemeProvider>
    );
};

export default App;