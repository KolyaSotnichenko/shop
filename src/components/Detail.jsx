import { Button, Typography } from '@mui/material'
import { Container, Box } from '@mui/system'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useLocation } from 'react-router-dom'

const Detail = () => {

    const location = useLocation()
    const item = location.state

    console.log(item)

  return (
    <Container maxWidth="md" sx={{paddingTop: '50px'}}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '20px',
            }}
        >
          <Box>
            <LazyLoadImage 
              height="400px"
              src={item.colors[0].images[0]}
              effect={blur}
              alt="Product"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flex: 0.8,
              flexDirection: 'column',
              pl: '50px',
              borderLeft: '1px solid lightgray',
              height: '400px'
            }}
          >
            <Box
             sx={{
              mb: '50px'
             }}
            >
              <Typography
                variant='h3'
              >
                {item.name}
              </Typography>
            </Box>
            <Box
              sx={{
                mb: '50px'
              }}
            >
              <Typography
                variant='h5'
              >
                {item.colors[0].description}
              </Typography>
            </Box>
            <Box
              sx={{
                mb: '50px'
              }}
            >
              <Typography
                variant='h4'
              >
                {`${item.colors[0].price}$`}
              </Typography>
            </Box>
            <Box
              sx={{
                mb: '200px'
              }}
            >
              <Button variant="contained">
                Купити
              </Button>
            </Box>
          </Box>
        </Box>
    </Container>
  )
}

export default Detail