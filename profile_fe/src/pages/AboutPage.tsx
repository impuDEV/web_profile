import React, {useEffect} from 'react'
import {Box} from "@mui/material";
import Loader from "../components/Loader";
import {fetchUsers} from "../store/actions/ActionCreators";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export const AboutPage = () => {
    const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.usersReducer)


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

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
                {isLoading && <Loader/>}
                {error && <h1>{error}</h1>}
                {JSON.stringify(users, null, 2)}

            </Box>
        </React.Fragment>

    )
}