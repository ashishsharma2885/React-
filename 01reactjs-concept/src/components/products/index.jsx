import ProductItem from "./components/product-item";
import "./style.css";


function ProductList({name, city, listofProducts}){

    return(
        <div>
            <h3 className="title">Ecommerce Project</h3>
            {/* <ProductItem/> */}
           <h4>Name is {name}, he/she is belongs to this city {city}</h4>
        <ul>
           {listofProducts.map((item, index) => (
           <ProductItem singleProductItem={item} key={index} />
           ))}
        </ul>
        </div>
    )
}
export default ProductList