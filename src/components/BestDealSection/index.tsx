import { bestSellingProducts,genre } from "../../constans";
import ProductCard from "../ProductCard";
import GenreButton from "../GenreButton";
import { useState } from "react";

const index = () => {

   const initialArr=genre.map((_e,i)=>{
    if(i===0){
      return(
        {id:i,active:true}
      )
    }
       return(
        {id:i, active:false}
       )
   })  
  const [isClicked, setIsClicked] = useState(initialArr);
  const onClick=(index:number)=>{
    const newArr=isClicked.map((_e,i)=>{

      if(i===index){
        return(
          {id:index,active:true}
        )
      }
      return(
        {id:i,active:false}
      )
    })
  
    setIsClicked(newArr)

  }
  return (
    <div className="flex flex-col my-10 items-center">
      <p className="sectionTitle w-[90%]">Todays Best Deals For You!</p>
      <div className="flex flex-wrap
       gap-x-3 gap-y-2 mb-8 w-[90%]">
        {genre.map((genre,index) =>
        <div key={genre.id}>
          <GenreButton title={genre.title}
          isClicked={isClicked[index].active}
        onClick={()=>{
          onClick(index)
        }}
          />
        </div>)}
      </div>
      <div className="grid grid-cols-2 w-[85%] gap-x-4 gap-y-8">
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
