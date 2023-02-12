import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { Banner, Categories, Layout, ProductList } from "./components"
import { getProducts } from "./services/api"
import { firebaseClient } from "./services/firebase/firebase"
import { auth0Client }  from "./services/auth0"


function App() {

  const [products, setProducts] = useState([])
  const [currentProducts, setCurrentProducts] = useState(products)

  // useEffect(() => {
  //   const loggedInThroughCallback = auth0Client.handleCallback()

  //   if(loggedInThroughCallback){
  //     setFirebaseCustomToken()
  //   }

  // }, [])
  
  // const setFirebaseCustomToken = async () => {
  //   const response = await fetch('http://localhost:3001/firebase', {
  //     headers: {
  //       'Authorization': `Bearer ${auth0Client.getIdToken()}`,
  //     },
  //   });
  
  //   const data = await response.json();
  //   await firebaseClient.setToken(data.firebaseToken);
  //   await firebaseClient.updateProfile(auth0Client.getProfile());
  //   await firebaseClient.addUser()
  // }

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
        <Banner />
        <Categories chooseCategory={chooseCategory} />
        <ProductList products={currentProducts} />
      </Box>
    </Layout>
  )
}

export default App
