import React from 'react';
import {Box, CircularProgress} from "@mui/material";

function Loader(props: any) {
    return (
        <Box style={{color: "#FF7F00", display: "block", margin: "auto", ...props.style}}>
            <CircularProgress size={76} thickness={2} color={"inherit"}/>
        </Box>
    );
}

export default Loader;