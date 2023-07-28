import { navBarOptions } from "../../constans";
import { ReactComponent as Downarrow } from "../../assets/downarrow.svg";

const NavOptions = () => {
  return (
    <div className="lg:flex flex-row mr-12 gap-6 hidden">
      <div className="flex flex-col cursor-pointer justify-center hover:fill-[#4353FF] group">
        <div className="flex flex-row gap-3 flex-grow items-center">
          <p className="options">Category</p>
          <Downarrow />
        </div>
        <hr className="lineMove"></hr>
      </div>
      <div className="flex flex-row items-center gap-6">
      {navBarOptions.map((element) => {
        return (
          <div className="flex flex-grow">
            <p className="options">{element.title}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default NavOptions;
