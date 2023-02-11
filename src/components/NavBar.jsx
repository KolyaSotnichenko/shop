import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
    {
        path: '/cabinet',
        title: 'Кабінет'
    }
]

const NavBar = () => {
  return (
    <Box
        component="ul"
    >
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