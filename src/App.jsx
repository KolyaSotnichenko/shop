import { Box } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { Categories, Footer, Header, ProductList } from "./components"
import { getProducts } from "./services/api"


function App() {

  const [products, setProducts] = useState([])
  const [currentProducts, setCurrentProducts] = useState(products)
  const [orders, setOrders] = useState([])

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

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id))
  }

  const addToOrders = (item) => {

    let isInArray = false

    orders.forEach(order => {
      if(order.id === item.id) isInArray = true
    })

    if(!isInArray) setOrders([...orders, item])
  }

  return (
    <Container maxWidth="lg" sx={{margin: '50px auto'}}>
      <Header orders={orders} onDelete={deleteOrder} />
      <Box
        component="main"
      >
        <Categories chooseCategory={chooseCategory} />
        <ProductList products={currentProducts} addItem={addToOrders} />
      </Box>
      <Footer />
    </Container>
  )
}

export default App
