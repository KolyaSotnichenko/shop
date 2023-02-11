import { Box } from "@mui/material"
import { Container } from "@mui/system"
import { Footer, Header, ProductList } from "./components"


function App() {

  return (
    <Container maxWidth="lg" sx={{margin: '50px auto'}}>
      <Header />
      <Box
        component="main"
      >
        <ProductList />
      </Box>
      <Footer />
    </Container>
  )
}

export default App
