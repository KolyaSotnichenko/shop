import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Delete } from '@mui/icons-material'
import { Box, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../store/orderSlice';

const Order = (props) => {

    const { item } = props

    const dispatch = useDispatch()

    const handleAction = (id) => {
        dispatch(removeOrder(id))
    }

    return (
        <Card sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'space-between', pl: '10px' }}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product/${item.id}`} state={item} >
                <CardActionArea
                    sx={{
                        display: 'flex',
                    }}
                >
                    <LazyLoadImage
                        src={item.image}
                        height='50px'
                        effect={blur}
                        style={{
                            objectFit: 'contain'
                        }}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{
                                fontSize: '16px'
                            }}
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h6"
                            sx={{
                                fontSize: '12px'
                            }}
                        >
                            {`${item.price}$`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Box
                    onClick={() => handleAction(item.id)}
                >
                    <Delete
                        sx={{
                            transition: 'all 0.2s ease-in-out',
                            cursor: 'pointer',
                            color: '#222',
                            '&:hover': {
                                color: 'lightgray',
                                transform: 'scale(1.3)'
                            },
                        }}
                    />
                </Box>
            </CardActions>
        </Card>
    )
}

export default Order