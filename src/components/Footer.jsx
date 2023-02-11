import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        mt: '20px',
      }}
    >
      <Typography>
        Всі права захищені &copy;
      </Typography>
    </Box>
  )
}

export default Footer