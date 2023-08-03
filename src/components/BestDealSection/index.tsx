import { bestSellingProducts } from "../../constans";
import ProductCard from "../ProductCard";
const index = () => {
  return (
    <div className="flex flex-col my-28 px-36">
      <p className="font-bold text-4xl mb-10">Todays Best Deals For You!</p>
      <div className="grid grid-cols-4">
        {bestSellingProducts.map((product) => {
          return (
            <ProductCard
              ProductTitle={product.ProductTitle}
              ProductImage={product.ProductImage}
              Description={product.Description}
              Rating={product.Rating}
              RatedUsers={product.RatedUsers}
              Price={product.Price}
              currency={product.currency}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
