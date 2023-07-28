import { products } from "../../constans"
import ProductCard from "../ProductCard"


const index = () => {
  const product= products[0];
  return (
    <div className="flex w-full px-11 mb-72">
     <ProductCard ProductTitle={product.ProductTitle} ProductImage={product.ProductImage} Description={product.Description} Rating={product.Rating} RatedUsers={product.RatedUsers} Price={product.Price} currency={product.currency}/>
    
    
    
    
    </div>
  )
}

export default index