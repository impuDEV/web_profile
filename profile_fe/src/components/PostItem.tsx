import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Box} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = ({post}) => {
    const styles = useStyles()

    return (
        <Box className={styles.post}>
            {post.id}. {post.title}
            <button onClick={() => {alert('TBD...')}}>Delete</button>
        </Box>
    );
};

const useStyles= makeStyles(() => createStyles({
    post: {
        padding: '20px',
        border: '1px solid teal',
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

export default PostItem;
