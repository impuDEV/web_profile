import React, {FC} from "react";
import MenuItem from "@mui/material/MenuItem";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { toggleThemeColor } from "../../store/reducers/ConfigSlice";

const ThemeMenuItem: FC = () => {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.configReducer.colorTheme)//redux(state => state.config.colorTheme)

    return (
        <MenuItem onClick={() => dispatch(toggleThemeColor())}>
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
            {theme} mode
        </MenuItem>
    )
}

export default ThemeMenuItem