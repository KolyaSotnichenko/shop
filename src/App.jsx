import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { Banner, Categories, Filter, Layout, ProductList } from "./components"
import { getProducts } from "./services/api"
import { firebaseClient } from "./services/firebase/firebase"
import { auth0Client }  from "./services/auth0"


function App() {

  const [products, setProducts] = useState([])
  const [currentProducts, setCurrentProducts] = useState(products)

  useEffect(() => {
    getProducts()
        .then(data => {
            setProducts(data)
        })
    
    setCurrentProducts(products)
  }, [products])

  const chooseCategory = (category) => {

    if(category === 'all'){
      return setCurrentProducts(products)
    }

    setCurrentProducts(
      products.filter(obj => obj.category === category)
    )
  }

  const chooseFilter = (filter) => {
    if(filter === 'all'){
      return setCurrentProducts(products)
    }
    if(filter === 'fromSmallerToLager'){
      setCurrentProducts(
        [...currentProducts].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      )
    }
    if(filter === 'fromLagerToSmaller'){
      setCurrentProducts(
        [...currentProducts].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      )
    }
    if(filter === 'popular'){
      setCurrentProducts(
        currentProducts.filter(obj => obj.popularity >= 500)
      )
    }
  }

  return (
    <Layout>
      <Box
        component="main"
      >
        <Banner />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Categories chooseCategory={chooseCategory} />
          <Filter chooseFilter={chooseFilter} />
        </Box>
        <ProductList products={currentProducts} />
      </Box>
    </Layout>
  )
}

export default App
