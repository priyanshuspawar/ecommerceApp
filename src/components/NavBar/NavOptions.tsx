import { navBarOptions } from "../../constans";
import { ReactComponent as Downarrow } from "../../assets/downarrow.svg";

const NavOptions = () => {
  return (
    <div className="lg:flex flex-row gap-x-6 hidden w-[60%]">
      <div className="flex flex-col cursor-pointer justify-center hover:fill-[#4353FF] group">
        <div className="flex flex-row gap-3 flex-grow items-center">
          <p className="options">Category</p>
          <Downarrow />
        </div>
        <hr className="lineMove"></hr>
      </div>
      <div className="flex flex-row items-center gap-6 lg:hidden xl:flex w-max">
      {navBarOptions.map((element) => {
        return (
          <div key={element.id} className="flex flex-grow flex-nowrap">
            <p className="options flex-shrink-0">{element.title}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default NavOptions;
