import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addOrder } from '../store/orderSlice'
import Layout from './Layout'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {

  const location = useLocation()
  const item = location.state

  const dispatch = useDispatch()

  const addToOrders = (item) => {
    dispatch(addOrder({ item }))
  }

  return (
    <Layout>
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
            src={item.image}
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
              {item.description}
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
              {`${item.price}$`}
            </Typography>
          </Box>
          <Box
            sx={{
              mb: '200px'
            }}
          >
            {/* <Button 
              variant="contained"
              onClick={() => {
                if (localStorage.getItem('token')) {
                    return addToOrders(item)
                }
                toast.error(<Typography
                    onClick={() => auth0Client.signIn()}
                >
                    Щоб додати товар в корзину, Вам потрібно <Box component="span" sx={{ color: 'blue' }}>зареєструватись!</Box>
                </Typography>);
                }}
            >
              Купити
            </Button> */}
            <Button
              variant="contained"
              onClick={() => addToOrders(item)}
            >
              Купити
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Detail