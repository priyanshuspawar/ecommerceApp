import { deals } from "../../constans";
import DealCard from "./DealCard";
const index = () => {
  return (
    <div className="my-16 px-32 flex justify-around">
      {deals.map((deal) => {
        return (
          <DealCard
            title={deal.title}
            bgColor={deal.bgColor}
            currency={deal.currency}
            textColor={deal.textColor}
            imgPath={deal.imgPath}
            discount={deal.discount}
          />
        );
      })}
    </div>
  );
};

export default index;
