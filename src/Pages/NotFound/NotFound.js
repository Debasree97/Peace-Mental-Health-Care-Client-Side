import { Box } from '@mui/system';
import React from 'react';
import notfound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <Box sx={{ display: "flex", justifyContent:"center"}}>
            <img style={{width:"50%"}} src={notfound} alt="" />
        </Box>
    );
};

export default NotFound;