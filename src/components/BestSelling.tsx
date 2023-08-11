import { bestSell } from "../constans";

const BestSelling = () => {
  return (
    <div className="w-full flex flex-col items-center my-8">
      <p className="sectionTitle w-[90%]">Best Selling Store </p>
      <div className="grid grid-cols-2 gap-2 w-[90%]">
        {bestSell.map((store) => {
          return (
            <div className="rounded-xl flex flex-col relative group flex-grow " key={store.id}>
              

              {/* brand logo */}
              
              <img
                src={store.storeImg}
                className="absolute z-30 top-[38%] left-4 border-white rounded-full"
              />
            
              
              {/* backdrop */}
              <div className="flex overflow-hidden rounded-xl ">
                <img
                  src={store.Img}
                  className="  w-full rounded-xl  group-hover:rotate-3 transition transform-gpu  duration-300 group-hover:scale-125 ease-in "
                />
              </div>

              {/* details */}
              <div  className="py-6 px-3">
              <p className="font-bold text-base pt-3">{store.title}</p>
              <p className=" text-[#4D4D4D] text-xs mb-1">{store.category}</p>
              <div className="flex flex-row items-center gap-x-2">
                <img src={store.desImg} className="h-2 w-2" />
                <p className=" text-[#CE689A] text-[10px]">
                  {store.description}
                </p>
              </div>
              </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};
export default BestSelling;
