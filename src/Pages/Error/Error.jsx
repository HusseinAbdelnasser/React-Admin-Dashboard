import React from 'react'
import Lottie from 'lottie-react';
import NotFound from '../../../public/not-found.json';
import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <Lottie
        animationData={NotFound} 
        style={{width:"400px", marginTop: "100px"}}
      />
      <Typography  sx={{color: theme.palette.text.primary, cursor: "pointer"}} onClick={() => navigate("/")}>
        How about going back to safety?
      </Typography>
    </Box>
  )
}

export default Error