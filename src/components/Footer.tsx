import { Payment, footer, Last } from "../constans";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="grid grid-cols-2  mt-10  border-y border-[#d1d4d4] py-16 w-[90%] gap-4">
          
          {/* shopkart logo and description */}
          <div className="col-span-2">
            <div>
              <img src="src/assets/shopcart.png" className="mb-4" />
             <p className="text-sm"> {footer.ShopCartDescription} </p>
            </div>
            
          </div>

        {/* department */}
        <div>
          <p className="font-bold text-xl mb-6"> Department</p>
          {footer.Department.map((e) => {
            return (
              <p className="flex my-2 text-sm  hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">
                {e}
              </p>
            );
          })}
        </div>
        {/* about us */}
        <div>
          <p className="font-bold text-xl mb-6"> About Us</p>
          {footer["About Us"].map((e) => {
            return (
              <p className="flex my-2 text-sm  hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">
                {e}
              </p>
            );
          })}
        </div>
        {/* services */}
        <div>
          <p className="font-bold text-xl mb-6"> Services</p>
          {footer.Services.map((e) => {
            return (
              <p className="flex my-2 text-sm hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">
                {e}
              </p>
            );
          })}
        </div>
        {/* help */}
        <div>
          <p className="font-bold text-xl mb-6"> Help</p>
          {footer.Help.map((e) => {
            return (
              <p className="flex my-2 text-sm hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">
                {e}
              </p>
            );
          })}
        </div>

        {/* accepted payments */}
        <div className="col-span-2 flex flex-col">
        <p className="font-bold text-xl mb-6 mt-10 "> Accepted Payments</p>
            <div className="grid grid-cols-3 gap-4">
              {Payment.map((e) => {
                return (
                  <div className="border border-[#d1d4d4]  rounded-md  flex py-3 items-center justify-center">
                    <img src={e.Img}/>
                  </div>
                );
              })}
            </div>

        </div>

      </div>

      {/* credits n all */}
      <div className="flex flex-col my-4 w-[90%] justify-between items-center ">
        <div className="grid grid-cols-2 w-full gap-y-3 mb-6">
          {Last.map((e) => {
            return (
              <div className=" hover:text-[#ff5c4c] flex text-sm gap-2 items-center cursor-pointer flex-grow">
                <img src={e.Img}  className="" />
                <p>{e.title}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-x-6  text-base mb-2">
          <p className="hover:text-[#ff5c4c] cursor-pointer">Terms of Service</p>
          <p className="hover:text-[#ff5c4c] cursor-pointer">Privacy & Policy</p>
        </div>

        <p className=" col-span-2 text-xs">All Right reserved by Musemind | 2022</p>
      </div>
    </div>
  );
};
export default Footer;
