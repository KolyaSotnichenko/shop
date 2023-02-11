import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/api'
import ProductCard from './ProductCard'

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(data => {
                setProducts(data)
            })
    }, [products])

  return (
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px'
        }}
    >
        {products.map((item, index) => (
            <ProductCard key={index} item={item} />
        ))}
    </Box>
  )
}

export default ProductList