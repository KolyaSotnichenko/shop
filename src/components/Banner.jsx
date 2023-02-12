import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Box } from '@mui/system'
import bannerImg from '/assets/banner.jpg'

const Banner = () => {
  return (
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
  )
}

export default Banner