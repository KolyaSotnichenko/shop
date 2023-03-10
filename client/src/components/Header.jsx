import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Header = () => {

  return (
    <Box
      component='header'
      sx={{
        position: 'relative',
        mb: '50px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link to="/">
          <Box
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: '20px'
            }}
          >Test Shop</Box>
        </Link>
        <NavBar />
      </Box>
    </Box>
  )
}

export default Header