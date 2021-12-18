import React, {FC} from "react";
import {Divider, IconButton, Menu, MenuItem} from "@mui/material";
import {Settings} from "@mui/icons-material";
import ThemeMenuItem from "./ThemeMenuItem";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {showConfigMenu, hideConfigMenu} from '../../store/reducers/ConfigSlice'

const ConfigMenu: FC = () => {
    const anchorElement = useAppSelector(state => state.configReducer.anchorEl)
    const dispatch = useAppDispatch()

    const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(showConfigMenu(e.currentTarget))
    }

    const closeHandler = () => {
        dispatch(hideConfigMenu())
    }

    return (
        <React.Fragment>
            <IconButton color="inherit" onClick={handleMenuClick} sx={{ ml:2 }}>
                <Settings fontSize="large" />
            </IconButton>
            <Menu
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={closeHandler}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiSvgIcon-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        }
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>test</MenuItem>
                <Divider />
                <ThemeMenuItem />
            </Menu>
        </React.Fragment>
    )
}

export default ConfigMenu