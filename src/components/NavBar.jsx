import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { ShoppingBag } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Order from './Order'

const navLinks = [
    {
        path: '/cabinet',
        title: 'Кабінет'
    }
]

const NavBar = (props) => {

    const { orders, onDelete } = props

    const [cartOpen, setCartOpen] = useState(false)

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
                        <Order key={item.id} item={item} onDelete={onDelete}/>
                    )): (
                        <Typography
                            sx={{
                                textAlign: 'center'
                            }}
                        >
                            Корзина порожня
                        </Typography>
                    )}
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
                        transform:'scale(1.3)'
                    }
                }}
            >
                <Link key={index} style={{textDecoration: 'none'}} to={item.path}>
                    <Typography
                        sx={{
                            color: 'black'
                        }}
                    >
                        {item.title}
                    </Typography>
                </Link>
            </Box>
        ))}
    </Box>
  )
}

export default NavBar