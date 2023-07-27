import RatingStars from "./RatingStars";

interface props {
  ProductTitle: string;
  ProductImage: string;
  Description: string;
  Rating: Number;
  RatedUsers: Number;
  Price: Number;
  currency: string;
}

const ProductCard = (props: props) => {
  return (
    <div className="flex flex-col w-[25%] h-2/5">
      <div className="w-[100%] flex items-center justify-center object-contain bg-[#F5F6F6]">
        <img src={props.ProductImage}  className="object-contain"
        width={"70%"} height={"70%"}
        />
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-lg">{props?.ProductTitle}</p> 
        <p className="font-bold text-lg">{`${props?.Price}`}</p>
      </div>
      <p className="font-light text-xs">{props?.Description}</p>
      <RatingStars/>
      {/* <p>{`${props?.Rating} ${props?.RatedUsers}`}</p> */}
    </div>
  );
};

export default ProductCard;
