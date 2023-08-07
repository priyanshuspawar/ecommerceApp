import { deals } from "../../constans";
import DealCard from "./DealCard";


interface DealCardprops{
  title?: string;
}

const index = ({title="Get Up To 70% Off"}:DealCardprops) => {
  return (
    <div className="flex flex-col">
      <p className="font-bold text-3xl mb-8 mx-36">{title}</p>
    <div className="my-16 px-32 flex justify-around">
      {deals.map((deal) => {
        return (
          <div key={deal.id}>
          <DealCard
            title={deal.title}
            bgColor={deal.bgColor}
            currency={deal.currency}
            textColor={deal.textColor}
            imgPath={deal.imgPath}
            discount={deal.discount}
          />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default index;
