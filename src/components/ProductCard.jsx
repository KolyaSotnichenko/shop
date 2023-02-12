import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { addOrder } from '../store/orderSlice';
import { firebaseClient } from '../services/firebase/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth0Client } from '../services/auth0';

const ProductCard = ({ item }) => {

    const [user, setUser] = useState()

    const dispatch = useDispatch()

    const addToOrders = (item) => {
        dispatch(addOrder({ item }))
    }

    useEffect(() => {
        {
            firebaseClient.setAuthStateListener(user => {
                if (user) {
                    setUser(user)
                }
            })
        }
    })

    return (
        <Card sx={{ maxWidth: 250, flex: 1 }}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product/${item.id}`} state={item} >
                <CardActionArea>
                    <LazyLoadImage
                        src={item.image}
                        height='250px'
                        width="100%"
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
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h6"
                        >
                            {`${item.price}$`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            {/* <CardActions>
                <Button size="medium" color="primary" onClick={() => addToOrders(item)}>
                    Купити
                </Button>
            </CardActions> */}
            <CardActions>
                <Button size="medium" color="primary" onClick={() => {
                    if (user) {
                        addToOrders(item)
                    }
                    toast.error(<Typography
                        onClick={() => auth0Client.signIn()}
                    >
                        Щоб додати товар в корзину, Вам потрібно <Box component="span" sx={{ color: 'blue' }}>зареєструватись!</Box>
                    </Typography>);
                }}>
                    Додати до корзини
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard