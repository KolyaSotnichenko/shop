import { Box } from "@mui/material"
// import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { Categories, Footer, Header, Layout, ProductList } from "./components"
import { getProducts } from "./services/api"
import { useSelector } from "react-redux"


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
      products.filter(obj => {
        return obj.category === category
      })
    )
  }

  return (
    <Layout>
      <Box
        component="main"
      >
        <Categories chooseCategory={chooseCategory} />
        <ProductList products={currentProducts} />
      </Box>
    </Layout>
  )
}

export default App
