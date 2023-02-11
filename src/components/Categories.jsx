import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const Categories = (props) => {

    const {chooseCategory} = props

    const [categories, setCategories] = useState([
        {
            key: 'all',
            name: 'Всі'
        },
        {
            key: 'smartphones',
            name: 'Смартфони'
        },
        {
            key: 'laptops',
            name: 'Ноутбуки'
        },
        {
            key: 'tablets',
            name: 'Планшети'
        },
    ])

  return (
    <Box
        component='ul'
        sx={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
            mb: '30px'
        }}
    >
        {categories.map(category => (
            <Box 
                component='li' 
                key={category.key}
                sx={{
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'red',
                    }
                }}
                onClick={() => chooseCategory(category.key)}
            >
                <Typography>
                    {category.name}
                </Typography>
            </Box>
        ))}
    </Box>
  )
}

export default Categories