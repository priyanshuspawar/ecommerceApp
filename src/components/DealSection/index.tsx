import { deals } from "../../constans";
import DealCard from "./DealCard";


interface DealCardprops{
  title?: string;
}

const index = ({title="Get Up To 70% Off"}:DealCardprops) => {
  return (
    <div className="flex flex-col items-center my-6">
      <p className="font-bold text-3xl mb-6 w-[85%]">{title}</p>
    <div className="flex w-[85%] gap-x-4">
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
