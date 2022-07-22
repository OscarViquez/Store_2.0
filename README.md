# Store_2.0

        const response = await fetch('http://localhost:5500/products')

### Fetching Data from Array of Products

import { productsData } from '../../products';

useEffect(() => {
const displayProducts = async () => {
try {
// const response = await fetch(productsData)
// const data = await response.json()
setAllProducts(productsData)
}

      catch (error) {
        console.log(error)
      }
    };
    displayProducts()

}, [])

### Fetching Data from Backend

    useEffect(() => {
    const displayProducts = async () => {
      try {
        const response = await fetch('http://localhost:5500/products')
        const data = await response.json()
        setAllProducts(data)
      }

      catch (error) {
        console.log(error)
      }
    };
    displayProducts()

}, [])
