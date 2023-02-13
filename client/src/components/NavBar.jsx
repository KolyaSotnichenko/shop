import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { ShoppingBag } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import Order from './Order'
import { auth0Client } from '../services/auth0'

const navLinks = [
    {
        path: '/cabinet',
        title: 'Кабінет'
    }
]

const NavBar = () => {

    const [cartOpen, setCartOpen] = useState(false)
    const orders = useSelector(state => state.orders.orders)

    const handleClick = () => {
        return auth0Client.signIn()
    }

    let sum = 0

    orders.forEach(order => sum += Number.parseFloat(order.price))

    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Box
                component='li'
                sx={{
                    listStyle: 'none',
                    position: 'relative'
                }}
                onClick={() => setCartOpen(!cartOpen)}
            >
                <ShoppingBag
                    sx={{
                        transition: 'all 0.2s ease-in-out',
                        cursor: 'pointer',
                        color: cartOpen && 'lightgray',
                        transform: cartOpen && 'scale(1.3)',
                        '&:hover': {
                            color: 'lightgray',
                            transform: 'scale(1.3)'
                        },
                    }}
                />

                {orders.length > 0 && (
                    <Box
                        sx={{
                            width: '15px',
                            height: '15px',
                            bgcolor: 'red',
                            position: 'absolute',
                            top: '10px',
                            right: 0,
                            borderRadius: '50%',
                            textAlign: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: '10px'
                            }}
                        >
                            {orders.length}
                        </Typography>
                    </Box>
                )}

                {cartOpen && (
                    <Paper
                        sx={{
                            position: 'absolute',
                            top: '30px',
                            right: 0,
                            width: '300px'

                        }}
                    >
                        {orders.length > 0 ? orders.map(item => (
                            <Order key={item.id} item={item} />
                        )) : (
                            <Typography
                                sx={{
                                    textAlign: 'center'
                                }}
                            >
                                Корзина порожня
                            </Typography>
                        )}
                        <Box
                            sx={{
                                float: 'right'
                            }}
                        >
                            <Typography>
                                {`Сума: ${sum}$`}
                            </Typography>
                        </Box>
                    </Paper>
                )}
            </Box>
            {navLinks.map((item, index) => (
                <Box
                    component="li"
                    key={index}
                    sx={{
                        listStyle: 'none',
                        ml: '25px',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            opacity: '0.5',
                            transform: 'scale(1.3)'
                        }
                    }}
                >
                    <Typography
                        onClick={handleClick}
                        sx={{
                            color: 'black',
                            cursor: 'pointer'
                        }}
                    >
                        {item.title}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default NavBar