import { Box } from '@mui/system'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import bannerImg from '/assets/banner.jpg'
import NavBar from './NavBar'

const Header = () => { 

  return (
    <Box
      component='header'
      sx={{
        position: 'relative'
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
        <Box 
          component="span"
          sx={{
            fontWeight: 600,
            fontSize: '20px'
          }}
        >Test Shop</Box>
        <NavBar/>
      </Box>
      <Box
        sx={{
          margin: '50px 0',
          width: '100%',
          height: '500px',
        }}
      >
        <LazyLoadImage 
          src={bannerImg}
          style={{
            width: '100%',
          }}
          effect={blur}
          alt="Banner image"
        />
      </Box>
    </Box>
  )
}

export default Header