import { bestSellingProducts,genre } from "../../constans";
import CapsuleButton2 from "../CapsuleButton2";
import ProductCard from "../ProductCard";
const index = () => {
  return (
    <div className="flex flex-col my-28 px-36">
      <p className="font-bold text-4xl mb-10">Todays Best Deals For You!</p>
      <div className="w-full flex gap-x-3">
        {genre.map(genre =>
        <div key={genre.id}>
          <CapsuleButton2 title={genre.title}
          style="bg-white active:bg-[#003D29] active:text-white text-black border-[1px] border-slate-200 flex items-center justify-center
          text-base font-medium rounded-full px-4 py-4
          cursor-pointer
        "
        
          />
        </div>)}
      </div>
      <div className="grid grid-cols-4">
        {bestSellingProducts.map((product) => {
          return (
            <div key={product.id}>
            <ProductCard
              ProductTitle={product.ProductTitle}
              ProductImage={product.ProductImage}
              Description={product.Description}
              Rating={product.Rating}
              RatedUsers={product.RatedUsers}
              Price={product.Price}
              currency={product.currency}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
