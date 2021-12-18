import React from 'react';
import {postAPI} from "../services/PostService";
import {Box} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import PostItem from "./PostItem";
import Loader from "./Loader";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(
        7,
        // { pollingInterval: 10000 }       // repeat request from server (msec)
    )
    return (
        <React.Fragment>
            <Box
                sx={{ width: '100%', padding: 20 }}
            >
                {isLoading && <Loader/>}
                {error && <h1>Loading error.....</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </Box>
        </React.Fragment>
    )
}

export default PostContainer;