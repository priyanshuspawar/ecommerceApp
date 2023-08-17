import { ReactComponent as Search } from "../assets/search.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center w-[60%] h-[50%]">


    <div className="my-3
      h-full w-max 2xl:w-full
    items-center flex rounded-full  border-gray-400 border-[1px] focus-within:border-[#3898EC]">
        <input
          className="bg-transparent outline-none
              p-4  h-[25%] placeholder:text-gray-400 2xl:flex-grow"
          placeholder="Search"
          alt="Please fill out this field"
          
        />
        <Search  className="cursor-pointer mr-4 flex flex-shrink-0"/>
    </div>
    </div>
  );
};

export default SearchBar;
