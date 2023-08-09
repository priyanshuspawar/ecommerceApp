import { Brands } from "../constans";

const ChooseBrand = () => {
  return (
    <div className="flex-col flex items-center my-6">
      <p className="font-bold text-3xl mb-8 w-[85%]">Choose By Brand </p>
      <div className=" grid grid-cols-4 gap-8 overflow-hidden w-[85%]">
        {Brands.map((brand) => {
          return (
            <div className=" flex  rounded-xl bg-[#F5F6F6]  p-6 border border-transparent hover:border-black">
              <img
                src={brand.Img}
                className="hover:scale-125 ease-in transition transform-gpu mr-4 "
              />
              <div className="flex flex-col">
                <p className="font-semibold  text-xl">{brand.title}</p>
                <p className="text-sm font-semibold text-[#4D4D4D]">
                  {brand.Description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseBrand;
