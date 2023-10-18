import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LoadingComponent = (i18n) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="backgroundDirt"
        >
            <Typography fontSize={30} className='loading'>
                {i18n("commons.loading")}
            </Typography>
        </Box>
    );
};

export default LoadingComponent;