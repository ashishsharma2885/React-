import './App.css'
import  FunctionalComponet  from './components/functional-components'
import ProductList from './components/products'

const dummyProductData = ["Product 1", "Product 2", "Product 3"]

function App() {
  return (
   <div>
    <h1>React Js Concept 2024</h1>
    {/* <FunctionalComponet /> */}
    <ProductList listofProducts={dummyProductData} name="Ashish Sharma" city="Delhi"/>
   </div>
  )
}

export default App
