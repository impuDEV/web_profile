import React, {useEffect} from 'react'
import {Box, Button} from "@mui/material";
import Loader from "../components/Loader";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import PostContainer from "../components/PostContainer";


export const MainPage = () => {
    const dispatch = useAppDispatch()


    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                }}
            >
                <PostContainer/>
            </Box>
        </React.Fragment>
    )
}