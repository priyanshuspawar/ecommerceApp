import { services } from "../constans";

const Services = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <p className="font-bold text-3xl mb-8 w-[85%]">Services To Help You Shop </p>
      <div className="flex flex-row w-[85%] gap-6">
        {services.map((e) => {
          return (
            <div className="bg-[#F5F6F6] rounded-xl flex flex-col  group flex-grow overflow-hidden" key={e.id}>
              <div className="h-[45%] p-14">
                <p className="font-bold text-2xl">{e.title}</p>
                <p className="font-bold text-2xl mb-3">{e.title2}</p>
                <p className="font-semibold text-[#4D4D4D]">{e.description}</p>
                <p className="font-semibold text-[#4D4D4D]">{e.description2}</p>
              </div>
              <div className=" flex overflow-hidden h-[55%]">
                <img
                  src={e.Img}
                  className="  rounded-b-xl group-hover:scale-125 transiton transform-gpu ease-in  duration-200 object-fill"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
