import { Payment, footer, Last } from "../constans";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="flex flex-row justify-between mt-10  border-y border-[#d1d4d4] py-16 w-[85%]">
          
          
          <div>
            <div>
              <img src="src/assets/shopcart.png" className="mb-9" />
              {footer.ShopCart.map((e) => {
                return <p className="flex my-2  ">{e}</p>;
              })}
            </div>
            <p className="font-bold text-xl mb-6 mt-10"> Accepted Payments</p>
            <div className="grid grid-cols-4 mr-36 gap-y-2">
              {Payment.map((e) => {
                return (
                  <div className="border border-[#d1d4d4]  rounded-md h-11 w-16 flex  items-center justify-center">
                    <img src={e.Img} />
                  </div>
                );
              })}
            </div>
          </div>

        {/* department */}
        <div>
          <p className="font-bold text-xl mb-6"> Department</p>
          {footer.Department.map((e) => {
            return (
              <p className="flex my-2  hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">
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
              <p className="flex my-2  hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">
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
              <p className="flex my-2 hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">
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
              <p className="flex my-2 hover:text-[#ff5c4c]  hover:translate-x-4 transition transform-gpu duratin-300 ease-in">
                {e}
              </p>
            );
          })}
        </div>
      </div>

      <div className="flex flex-row mt-10 mb-10 w-[85%] justify-between items-center ">
        <div className="flex w-[40%]">
          {Last.map((e) => {
            return (
              <div className=" hover:text-[#ff5c4c] flex text-lg gap-2 cursor-pointer flex-grow">
                <img src={e.Img} className="object-contain" />
                <p>{e.title}</p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-10 text-lg">
          <p className="hover:text-[#ff5c4c] cursor-pointer">Terms of Service</p>
          <p className="hover:text-[#ff5c4c] cursor-pointer">Privacy & Policy</p>
        </div>

        <p>All Right reserved by Musemind | 2022</p>
      </div>
    </div>
  );
};
export default Footer;
